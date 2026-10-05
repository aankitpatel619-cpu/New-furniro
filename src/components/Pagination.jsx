import { useState } from "react";
export default function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <div className="text-center my-5">
      {[1, 2, 3].map(n => <button key={n} className={`pg-btn ${page === n ? "on" : ""}`} onClick={() => setPage(n)}>{n}</button>)}
      <button className="pg-btn px-4 w-auto" onClick={() => setPage(p => Math.min(3, p + 1))}>Next</button>
    </div>
  );
}
