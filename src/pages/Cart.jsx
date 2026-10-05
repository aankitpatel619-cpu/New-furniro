import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import { useCart } from "../CartContext";
import { rs, rp } from "../data";

export default function Cart() {
  const { items, remove, subtotal } = useCart();
  const fmt = i => (i.rs ? rs(i.price) : rp(i.price));
  return (
    <main>
      <PageBanner title="Cart" />
      <div className="container-xl py-5 row mx-auto g-4">
        <div className="col-lg-8 table-responsive">
          <table className="table align-middle">
            <thead><tr>{["", "Product", "Price", "Quantity", "Subtotal", ""].map((h, k) => <th key={k} className="bg-cream py-3 fw-medium">{h}</th>)}</tr></thead>
            <tbody>
              {items.map(i => (
                <tr key={i.id}>
                  <td><img src={i.img} alt="" width="105" height="105" className="rounded-3 bg-cream object-fit-cover" /></td>
                  <td className="muted">{i.name}</td><td className="muted">{fmt(i)}</td>
                  <td><span className="border rounded px-2">{i.qty}</span></td><td>{fmt({ ...i, price: i.price * i.qty })}</td>
                  <td><button className="btn text-gold" onClick={() => remove(i.id)} aria-label="Remove"><FaTrash /></button></td>
                </tr>
              ))}
              {!items.length && <tr><td colSpan="6" className="muted text-center py-5">Your cart is empty. <Link to="/shop">Go shopping</Link></td></tr>}
            </tbody>
          </table>
        </div>
        <aside className="col-lg-4"><div className="bg-cream p-4 p-lg-5 text-center">
          <h3 className="fw-semibold mb-5">Cart Totals</h3>
          <div className="d-flex justify-content-between mb-3"><b className="small">Subtotal</b><span className="muted small">{rs(subtotal)}</span></div>
          <div className="d-flex justify-content-between mb-5"><b className="small">Total</b><b className="text-gold">{rs(subtotal)}</b></div>
          <Link to="/checkout" className="btn-outline-ink px-5 py-2 text-dark text-decoration-none d-inline-block">Check Out</Link>
        </div></aside>
      </div>
    </main>
  );
}
