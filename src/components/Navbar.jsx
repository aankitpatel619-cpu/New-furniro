import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import { useCart } from "../CartContext";

const links = [["Home", "/"], ["Shop", "/shop"], ["Blog", "/blog"], ["Contact", "/contact"]];
export default function Navbar() {
  const [show, setShow] = useState(false);
  const { setOpen, favourites, items, user } = useCart();
  return (
    <header className="bg-white sticky-top">
      <nav className="container-xl d-flex align-items-center justify-content-between py-3 flex-wrap">
        <Logo />
        <button className="btn d-lg-none fs-3" onClick={() => setShow(!show)} aria-label="Menu"><FiMenu /></button>
        <ul className={`list-unstyled gap-5 mb-0 mx-auto d-lg-flex ${show ? "d-flex flex-column w-100 py-3" : "d-none"}`}>
          {links.map(([n, to]) => (
            <li key={n}><NavLink to={to} className="text-dark text-decoration-none fw-medium" onClick={() => setShow(false)}>{n}</NavLink></li>
          ))}
        </ul>
        <div className="nav-icons d-flex gap-2 align-items-center">
          <Link to="/login" aria-label="Account" title={user ? user.name : "Login"}><FiUser className={user ? "text-gold" : ""} /></Link>
          <Link to="/shop" aria-label="Search"><FiSearch /></Link>
          <Link to="/favourites" aria-label="Favourites"><FiHeart />{favourites.length > 0 && <span className="nav-badge">{favourites.length}</span>}</Link>
          <button aria-label="Cart" onClick={() => setOpen(true)}><FiShoppingCart />{items.length > 0 && <span className="nav-badge">{items.length}</span>}</button>
        </div>
      </nav>
    </header>
  );
}
