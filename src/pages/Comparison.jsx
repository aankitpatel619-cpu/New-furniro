import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import { useCart } from "../CartContext";
import { compare } from "../data";

const items = [
 { id: 100, name: "Asgaard Sofa", price: 250000, rating: 4.7, rev: 204, rs: true, img: "/images/asgaard.png" },
 { id: 101, name: "Outdoor Sofa Set", price: 224000, rating: 4.2, rev: 145, rs: true, img: "/images/outdoor.png" },
];
export default function Comparison() {
  const { add } = useCart();
  return (
    <main>
      <PageBanner title="Product Comparison" />
      <div className="container-xl py-5">
        <div className="row g-4 align-items-start mb-4">
          <div className="col-md-4"><h4 className="fw-medium">Go to Product page for more Products</h4><Link to="/shop" className="text-dark small">View More</Link></div>
          {items.map(i => (
            <div key={i.id} className="col-6 col-md-3"><img src={i.img} alt={i.name} className="w-100 rounded-3 bg-cream p-2" />
              <h6 className="fw-semibold mt-3 mb-0">{i.name}</h6><small className="d-block">Rs. {i.price.toLocaleString("en-US")}.00</small>
              <small><b>{i.rating}</b> <FaStar className="text-warning" /> <span className="muted">{i.rev} Review</span></small></div>
          ))}
          <div className="col-md-2"><b>Add A Product</b><select className="form-select mt-2 border-0 text-white" style={{ background: "var(--gold)" }}><option>Choose a Product</option></select></div>
        </div>
        <div className="table-responsive"><table className="table cmp"><tbody>
          {Object.entries(compare).map(([sec, rows]) => [
            <tr key={sec}><th colSpan="3" className="fs-5 pt-5">{sec}</th></tr>,
            ...rows.map(([k, a, b]) => <tr key={sec + k}><td className="w-25">{k}</td><td>{a}</td><td>{b}</td></tr>),
          ])}
          <tr><td />{items.map(i => <td key={i.id}><button className="btn btn-gold" onClick={() => add(i)}>Add To Cart</button></td>)}</tr>
        </tbody></table></div>
      </div>
    </main>
  );
}
