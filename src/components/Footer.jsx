import { Link } from "react-router-dom";
import Features from "./Features";
const cols = { Links: [["Home", "/"], ["Shop", "/shop"], ["About", "/about"], ["Contact", "/contact"]], Help: [["Payment Options", "/checkout"], ["Returns", "/"], ["Privacy Policies", "/"]] };
export default function Footer() {
  return (
    <>
      <Features />
      <footer className="footer border-top">
        <div className="container-xl py-5 row mx-auto g-4">
          <div className="col-lg-4"><h4 className="fw-bold">Funiro.</h4><p className="muted mt-5">400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p></div>
          {Object.entries(cols).map(([h, ls]) => (
            <div key={h} className="col-6 col-lg-2"><p className="muted">{h}</p>
              {ls.map(([n, to]) => <p key={n} className="my-4"><Link to={to}>{n}</Link></p>)}
            </div>
          ))}
          <div className="col-lg-4"><p className="muted">Newsletter</p>
            <form className="d-flex gap-3" onSubmit={e => e.preventDefault()}>
              <input type="email" className="border-0 border-bottom bg-transparent flex-grow-1" placeholder="Enter Your Email Address" />
              <button className="btn btn-link text-dark text-decoration-underline p-0 fw-medium">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="container-xl border-top py-4"><small>2023 furino. All rights reserved</small></div>
      </footer>
    </>
  );
}
