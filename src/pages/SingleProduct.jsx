import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaFacebook, FaLinkedin, FaTwitter, FaLink, FaHeart, FaRegHeart } from "react-icons/fa";
import ProductGrid from "../components/ProductGrid";
import { allProducts, sofa, fmt, descImgs } from "../data";
import { useCart } from "../CartContext";

const tabs = ["Description", "Additional Information", "Reviews [5]"];
export default function SingleProduct() {
  const { id } = useParams();
  const p = allProducts.find(x => String(x.id) === id) || sofa;
  const { add, isFav, toggleFav, share } = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("L");
  const [tab, setTab] = useState(0);
  const [main, setMain] = useState(0);
  const thumbs = p.gallery || [p.img];
  const url = encodeURIComponent(`${window.location.origin}/product/${p.id}`);
  const socials = [[FaFacebook, `https://www.facebook.com/sharer/sharer.php?u=${url}`, "Facebook"], [FaLinkedin, `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "LinkedIn"], [FaTwitter, `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(p.name)}`, "Twitter"]];
  const liked = isFav(p.id);
  return (
    <main key={p.id}>
      <div className="bg-cream py-4"><div className="container-xl small"><span className="muted">Home › Shop ›</span> | {p.name}</div></div>
      <div className="container-xl py-4 row mx-auto g-4">
        <div className="col-lg-6 d-flex gap-3">
          <div className="d-none d-sm-flex flex-column gap-3">{thumbs.map((t, i) => <img key={t} src={t} className="thumb" alt="" onClick={() => setMain(i)} />)}</div>
          <img src={thumbs[main]} alt={p.name} className="w-100 rounded-3 bg-cream" style={{ maxHeight: 500, objectFit: p.rs ? "contain" : "cover" }} />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-normal">{p.name}</h2><p className="muted fs-5">{fmt(p)}</p>
          <div className="d-flex align-items-center gap-2 mb-3 text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><small className="muted border-start ps-3 ms-2">5 Customer Review</small></div>
          <p className="small" style={{ maxWidth: 420 }}>{p.desc}. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
          <p className="small muted mb-1">Size</p>
          <div className="d-flex gap-2 mb-3">{["L", "XL", "XS"].map(s => <button key={s} className={`size-btn ${size === s ? "on" : ""}`} onClick={() => setSize(s)}>{s}</button>)}</div>
          <p className="small muted mb-1">Color</p>
          <div className="d-flex gap-3 mb-4">{["#816DFA", "#000", "#B88E2F"].map(c => <button key={c} className="swatch" style={{ background: c }} aria-label={c} />)}</div>
          <div className="d-flex gap-3 flex-wrap align-items-center">
            <div className="d-flex align-items-center border rounded-3 px-3 gap-3 py-3">
              <button className="btn p-0" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>{qty}<button className="btn p-0" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button className="btn-outline-ink px-4 py-3" onClick={() => add(p, qty)}>Add To Cart</button>
            <Link to="/comparison" className="btn-outline-ink px-4 py-3 text-dark text-decoration-none">+ Compare</Link>
            <button className="btn fs-4 p-0" onClick={() => toggleFav(p)} aria-label="Favourite">{liked ? <FaHeart className="heart-on" /> : <FaRegHeart />}</button>
          </div>
          <hr className="my-5" />
          <table className="small muted"><tbody>
            <tr><td className="pe-5 py-1">SKU</td><td>: SS00{String(p.id).slice(-1)}</td></tr>
            <tr><td className="py-1">Category</td><td>: {p.desc}</td></tr>
            <tr><td className="py-1">Tags</td><td>: Sofa, Chair, Home, Shop</td></tr>
            <tr><td className="py-1">Share</td><td>: {socials.map(([Icon, href, n]) => <a key={n} href={href} target="_blank" rel="noreferrer" aria-label={`Share on ${n}`} className="text-dark mx-1"><Icon /></a>)}
              <button className="btn btn-sm p-0 ms-2 text-dark" onClick={() => share(p)} title="Copy product link"><FaLink /> Copy link</button></td></tr>
          </tbody></table>
        </div>
      </div>
      <section className="border-top mt-4 py-4"><div className="container-xl">
        <div className="d-flex justify-content-center gap-5 flex-wrap mb-4">{tabs.map((t, i) => <button key={t} className={`btn p-0 fs-5 ${tab === i ? "text-dark" : "muted"}`} onClick={() => setTab(i)}>{t}</button>)}</div>
        <div className="muted small mx-auto" style={{ maxWidth: 900 }}>
          {tab === 0 && <><p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p><p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.</p></>}
          {tab === 1 && <p>Material: solid wood frame, fabric + cotton upholstery. Dimensions: 265 × 168 × 76 cm. Weight: 45 KG.</p>}
          {tab === 2 && <p>5 customer reviews. Average rating 4.5 / 5.</p>}
        </div>
        <div className="row g-4 mt-3">{(p.rs ? descImgs : [p.img, p.img]).map((s, n) => <div key={n} className="col-md-6"><img src={s} alt="" className="w-100 rounded-3 bg-cream" style={{ height: 320, objectFit: p.rs ? "contain" : "cover" }} /></div>)}</div>
      </div></section>
      <section className="container-xl text-center py-5"><h3 className="fw-semibold mb-4">Related Products</h3>
        <div className="text-start"><ProductGrid list={allProducts.filter(x => x.id !== p.id).slice(0, 4)} /></div>
        <Link to="/shop" className="btn btn-outline-gold mt-5">Show More</Link></section>
    </main>
  );
}
