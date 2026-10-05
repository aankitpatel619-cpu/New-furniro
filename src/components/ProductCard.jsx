import { Link } from "react-router-dom";
import { FaShareAlt, FaRegHeart, FaHeart, FaExchangeAlt } from "react-icons/fa";
import { fmt } from "../data";
import { useCart } from "../CartContext";
export default function ProductCard({ p }) {
  const { add, isFav, toggleFav, share } = useCart();
  const color = p.tag === "New" ? "#2EC1AC" : "#E97171";
  const liked = isFav(p.id);
  return (
    <div className="pcard">
      <Link to={`/product/${p.id}`}><img src={p.img} alt={p.name} loading="lazy" /></Link>
      {p.tag && <span className="badge-c" style={{ background: color }}>{p.tag}</span>}
      <div className="body">
        <h5 className="fw-semibold">{p.name}</h5>
        <p className="muted small mb-2">{p.desc}</p>
        <b>{fmt(p)}</b> {p.old && <span className="old ms-2">{fmt({ ...p, price: p.old })}</span>}
      </div>
      <div className="overlay">
        <button className="btn bg-white text-gold px-5 rounded-0" onClick={() => add(p)}>Add to cart</button>
        <div className="d-flex gap-3 small">
          <button className="btn p-0 text-white" onClick={() => share(p)}><FaShareAlt /> Share</button>
          <Link to="/comparison" className="text-white text-decoration-none"><FaExchangeAlt /> Compare</Link>
          <button className="btn p-0 text-white" onClick={() => toggleFav(p)}>{liked ? <FaHeart className="heart-on" /> : <FaRegHeart />} {liked ? "Liked" : "Like"}</button>
        </div>
      </div>
    </div>
  );
}
