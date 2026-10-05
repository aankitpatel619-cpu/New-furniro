import { Link } from "react-router-dom";
import { IMG } from "../data";
export default function Logo() {
  return <Link to="/" className="brand d-flex align-items-center gap-2"><img src={IMG.logo} alt="" height="32" />Furniro</Link>;
}
