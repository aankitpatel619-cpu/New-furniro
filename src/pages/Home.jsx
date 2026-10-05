import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { products, rooms, slides, gallery } from "../data";

export default function Home() {
  const [s, setS] = useState(0);
  useEffect(() => { const t = setInterval(() => setS(x => (x + 1) % slides.length), 4000); return () => clearInterval(t); }, []);
  const [room, title, pic] = slides[s];
  return (
    <main>
      <section className="hero"><div className="hero-box">
        <small className="fw-semibold" style={{ letterSpacing: 3 }}>New Arrival</small>
        <h2>Discover Our<br />New Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Link to="/shop" className="btn btn-gold">BUY NOW</Link>
      </div></section>
      <section className="container-xl text-center py-5">
        <h3 className="fw-bold">Browse The Range</h3><p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row g-4 mt-2">{rooms.map(([r, src]) => (
          <div key={r} className="col-12 col-md-4"><img src={src} alt={r} className="w-100 rounded-3" style={{ height: 480, objectFit: "cover" }} /><h5 className="mt-3 fw-semibold">{r}</h5></div>
        ))}</div>
      </section>
      <section className="container-xl pb-5 text-center">
        <h3 className="fw-bold mb-4">Our Products</h3>
        <div className="text-start"><ProductGrid list={products} /></div>
        <Link to="/shop" className="btn btn-outline-gold mt-5">Show More</Link>
      </section>
      <section className="bg-cream py-5"><div className="container-xl row mx-auto align-items-center g-4">
        <div className="col-lg-4"><h3 className="fw-bold">50+ Beautiful rooms inspiration</h3><p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p><Link to="/shop" className="btn btn-gold">Explore More</Link></div>
        <div className="col-lg-8"><div className="position-relative"><img src={pic} alt={title} className="w-100 rounded-3" style={{ height: 500, objectFit: "cover" }} />
          <div className="position-absolute bottom-0 start-0 m-3 p-3 bg-white bg-opacity-75"><small className="muted">0{s + 1} — {room}</small><h5 className="fw-semibold mb-0">{title}</h5></div></div>
          <div className="text-center mt-3">{slides.map((_, i) => <button key={i} onClick={() => setS(i)} aria-label={`Slide ${i + 1}`} className="border-0 rounded-circle mx-1" style={{ width: 12, height: 12, background: i === s ? "var(--gold)" : "#ccc" }} />)}</div></div>
      </div></section>
      <section className="text-center py-5"><small>Share your setup with</small><h3 className="fw-bold mb-4">#FuniroFurniture</h3>
        <div className="ig container-xl">{gallery.map(src => <img key={src} src={src} alt="" style={{ height: 260 }} />)}</div></section>
    </main>
  );
}
