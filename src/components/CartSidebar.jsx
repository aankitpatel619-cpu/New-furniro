import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { useCart } from "../CartContext";
import { rs, rp } from "../data";
export default function CartSidebar() {
  const { items, remove, subtotal, open, setOpen } = useCart();
  if (!open) return null;
  return (
    <>
      <div className="backdrop" onClick={() => setOpen(false)} />
      <aside className="cart-side">
        <h5 className="fw-semibold border-bottom pb-3 mb-4">Shopping Cart</h5>
        {items.length === 0 && <p className="muted">Your cart is empty.</p>}
        {items.map(i => (
          <div key={i.id} className="d-flex align-items-center gap-3 mb-4">
            <img src={i.img} alt="" width="80" height="80" className="rounded-3 object-fit-contain bg-cream" />
            <div className="flex-grow-1"><div>{i.name}</div><small>{i.qty} X <span className="text-gold">{i.rs ? rs(i.price) : rp(i.price)}</span></small></div>
            <button className="btn p-0 muted" onClick={() => remove(i.id)} aria-label="Remove"><FaTimesCircle /></button>
          </div>
        ))}
        <div className="d-flex justify-content-between border-top pt-3 my-4"><span>Subtotal</span><b className="text-gold">{rs(subtotal)}</b></div>
        <div className="d-flex gap-2 flex-wrap">
          {[["Cart", "/cart"], ["Checkout", "/checkout"], ["Comparison", "/comparison"]].map(([n, to]) => (
            <Link key={n} to={to} onClick={() => setOpen(false)} className="btn btn-sm btn-outline-dark rounded-pill px-3">{n}</Link>
          ))}
        </div>
      </aside>
    </>
  );
}
