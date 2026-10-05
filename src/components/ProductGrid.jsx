import ProductCard from "./ProductCard";
export default function ProductGrid({ list }) {
  return (
    <div className="row g-4">
      {list.map((p, i) => <div key={p.id + "-" + i} className="col-6 col-lg-3"><ProductCard p={p} /></div>)}
    </div>
  );
}
