import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IMG } from "../data";
export default function PageBanner({ title }) {
  return (
    <section className="banner d-flex flex-column align-items-center justify-content-center text-center">
      <img src={IMG.logo} alt="" height="32" />
      <h1>{title}</h1>
      <small className="fw-medium"><Link to="/" className="text-dark text-decoration-none">Home</Link> <FaChevronRight size={10} className="mx-1" /> <span className="fw-normal">{title}</span></small>
    </section>
  );
}
