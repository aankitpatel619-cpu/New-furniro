import { useState, useMemo } from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import PageBanner from "../components/PageBanner";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import { products } from "../data";

export default function Shop() {
  const [show, setShow] = useState(16);
  const [sort, setSort] = useState("default");
  const list = useMemo(() => {
    const s = Array.from({ length: 16 }, (_, i) => products[i % 4]);
    if (sort === "low") s.sort((a, b) => a.price - b.price);
    if (sort === "high") s.sort((a, b) => b.price - a.price);
    return s.slice(0, show);
  }, [show, sort]);
  return (
    <main>
      <PageBanner title="Shop" />
      <div className="bg-cream py-3"><div className="container-xl d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <div className="d-flex gap-3 align-items-center"><span><FiFilter /> Filter</span><FiGrid /><FiList /><small>Showing 1–{list.length} of 32 results</small></div>
        <div className="d-flex gap-3 align-items-center">Show
          <input type="number" min="4" max="16" step="4" value={show} onChange={e => setShow(Number(e.target.value) || 16)} className="form-control border-0 text-center p-2" style={{ width: 65 }} />
          Sort by
          <select className="form-select border-0 p-2" value={sort} onChange={e => setSort(e.target.value)}><option value="default">Default</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option></select>
        </div>
      </div></div>
      <div className="container-xl py-5"><ProductGrid list={list} /><Pagination /></div>
    </main>
  );
}
