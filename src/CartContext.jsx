import { useState, useEffect, createContext, useContext } from "react";
import { sofa, allProducts } from "./data";

const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } };

export function CartProvider({ children }) {
  const [items, setItems] = useState([{ ...sofa, qty: 1 }]);
  const [open, setOpen] = useState(false);
  const [favIds, setFavIds] = useState(() => load("furniro-fav", []));
  const [user, setUser] = useState(() => load("furniro-user", null));
  const [toast, setToast] = useState("");

  useEffect(() => save("furniro-fav", favIds), [favIds]);
  useEffect(() => save("furniro-user", user), [user]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(""), 2500); return () => clearTimeout(t); }, [toast]);

  const add = (p, qty = 1) => {
    setItems(cur => cur.some(i => i.id === p.id)
      ? cur.map(i => (i.id === p.id ? { ...i, qty: i.qty + qty } : i))
      : [...cur, { ...p, qty }]);
    setOpen(true);
  };
  const remove = id => setItems(cur => cur.filter(i => i.id !== id));
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  const isFav = id => favIds.includes(id);
  const toggleFav = p => {
    setToast(isFav(p.id) ? `${p.name} removed from favourites` : `${p.name} added to favourites`);
    setFavIds(cur => (cur.includes(p.id) ? cur.filter(x => x !== p.id) : [...cur, p.id]));
  };
  const favourites = favIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean);

  const share = async p => {
    const url = `${window.location.origin}/product/${p.id}`;
    try { await navigator.clipboard.writeText(url); setToast("Product link copied!"); }
    catch { window.prompt("Copy this product link:", url); }
  };
  const login = u => setUser(u);
  const logout = () => setUser(null);

  return (
    <Ctx.Provider value={{ items, add, remove, subtotal, open, setOpen, favourites, isFav, toggleFav, share, user, login, logout, toast }}>
      {children}
    </Ctx.Provider>
  );
}
