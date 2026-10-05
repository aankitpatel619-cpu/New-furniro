import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import PageBanner from "../components/PageBanner";
import Pagination from "../components/Pagination";
import { posts, categories, recent, blogThumbs } from "../data";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.";
export default function Blog() {
  return (
    <main>
      <PageBanner title="Blog" />
      <div className="container-xl py-5 row mx-auto g-5">
        <div className="col-lg-8">
          {posts.map(p => (
            <article key={p.t} className="mb-5">
              <img src={p.img} alt="" className="w-100 rounded-3" style={{ maxHeight: 400, objectFit: "cover" }} />
              <div className="muted small d-flex gap-4 my-3"><span><FaUser /> Admin</span><span><FaCalendar /> 14 Oct 2022</span><span><FaTag /> {p.cat}</span></div>
              <h3 className="fw-medium">{p.t}</h3><p className="muted small">{lorem}</p>
              <a href="#!" className="text-dark text-decoration-none border-bottom border-dark pb-1">Read more</a>
            </article>
          ))}
          <Pagination />
        </div>
        <aside className="col-lg-4 ps-lg-5">
          <div className="position-relative mb-5"><input className="form-control" aria-label="Search" /><FiSearch className="position-absolute top-50 end-0 translate-middle-y me-3" /></div>
          <h5 className="fw-medium mb-4">Categories</h5>
          {categories.map(([c, n]) => <div key={c} className="d-flex justify-content-between muted small mb-3"><span>{c}</span><span>{n}</span></div>)}
          <h5 className="fw-medium my-4">Recent Posts</h5>
          {recent.map((r, i) => (
            <div key={r} className="d-flex gap-3 mb-3 align-items-center"><img src={blogThumbs[i]} width="64" height="64" className="rounded-2 object-fit-cover" alt="" />
              <div><small className="d-block">{r}</small><small className="muted">03 Aug 2022</small></div></div>
          ))}
        </aside>
      </div>
    </main>
  );
}
