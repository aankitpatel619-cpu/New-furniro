import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useCart } from "../CartContext";

export default function Login() {
  const { user, login, logout } = useCart();
  const nav = useNavigate();
  const [mode, setMode] = useState("login");
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const submit = e => {
    e.preventDefault();
    login({ name: f.name || f.email.split("@")[0], email: f.email });
    nav("/");
  };
  return (
    <main>
      <PageBanner title="My Account" />
      <div className="container-xl py-5" style={{ maxWidth: 520 }}>
        {user ? (
          <div className="text-center">
            <h3 className="fw-semibold">Welcome, {user.name}</h3><p className="muted">{user.email}</p>
            <Link to="/favourites" className="btn btn-gold me-2">My favourites</Link>
            <button className="btn-outline-ink py-2 px-4" onClick={logout}>Log out</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h2 className="fw-semibold mb-4 text-center">{mode === "login" ? "Log In" : "Create Account"}</h2>
            {mode === "register" && <div className="mb-4"><label className="small fw-medium mb-2">Your name</label><input className="form-control" value={f.name} onChange={set("name")} required /></div>}
            <div className="mb-4"><label className="small fw-medium mb-2">Email address</label><input type="email" className="form-control" value={f.email} onChange={set("email")} required /></div>
            <div className="mb-4"><label className="small fw-medium mb-2">Password</label><input type="password" minLength="6" className="form-control" value={f.password} onChange={set("password")} required /></div>
            <button className="btn btn-gold w-100">{mode === "login" ? "Log In" : "Register"}</button>
            <p className="text-center small mt-4">{mode === "login" ? "New to Furniro? " : "Already have an account? "}
              <button type="button" className="btn btn-link p-0 text-gold small" onClick={() => setMode(mode === "login" ? "register" : "login")}>{mode === "login" ? "Create an account" : "Log in"}</button></p>
          </form>
        )}
      </div>
    </main>
  );
}
