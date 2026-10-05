import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { useCart } from "../CartContext";
import { rs } from "../data";

const text = [["First Name", "firstName"], ["Last Name", "lastName"], ["Company Name (Optional)", "company"], ["Street address", "street"], ["Town / City", "city"], ["ZIP code", "zip"], ["Phone", "phone"], ["Email address", "email"]];
export default function Checkout() {
  const { items, subtotal } = useCart();
  const [pay, setPay] = useState("bank");
  const [done, setDone] = useState(false);
  const field = ([label, name]) => (
    <div key={name} className={["firstName", "lastName"].includes(name) ? "col-6" : "col-12"}>
      <label className="small fw-medium mb-2">{label}</label><input name={name} type="text" className="form-control" required={name !== "company"} />
    </div>
  );
  return (
    <main>
      <PageBanner title="Checkout" />
      <form className="container-xl py-5 row mx-auto g-5" onSubmit={e => { e.preventDefault(); setDone(true); }}>
        <div className="col-lg-6"><h2 className="fw-semibold mb-4">Billing details</h2>
          <div className="row g-4">
            {text.slice(0, 3).map(field)}
            <div className="col-12"><label className="small fw-medium mb-2">Country / Region</label><select className="form-select"><option>Sri Lanka</option></select></div>
            {text.slice(3, 5).map(field)}
            <div className="col-12"><label className="small fw-medium mb-2">Province</label><select className="form-select"><option>Western Province</option><option>Central Province</option><option>Southern Province</option></select></div>
            {text.slice(5).map(field)}
            <div className="col-12"><textarea className="form-control" placeholder="Additional information" /></div>
          </div>
        </div>
        <div className="col-lg-6"><div className="mx-lg-4">
          <div className="d-flex justify-content-between fs-5 fw-medium mb-3"><span>Product</span><span>Subtotal</span></div>
          {items.map(i => <div key={i.id} className="d-flex justify-content-between small mb-2"><span className="muted">{i.name} <b className="text-dark">x {i.qty}</b></span><span>{rs(i.price * i.qty)}</span></div>)}
          <div className="d-flex justify-content-between small mb-2"><span>Subtotal</span><span>{rs(subtotal)}</span></div>
          <div className="d-flex justify-content-between mb-3"><span className="small">Total</span><b className="text-gold fs-4">{rs(subtotal)}</b></div>
          <hr />
          {[["bank", "Direct Bank Transfer"], ["cod", "Cash On Delivery"]].map(([v, l]) => (
            <div key={v} className="form-check mb-2"><input className="form-check-input" type="radio" id={v} checked={pay === v} onChange={() => setPay(v)} /><label htmlFor={v} className="form-check-label small">{l}</label></div>
          ))}
          {pay === "bank" && <p className="muted small">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
          <p className="small">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
          <div className="text-center mt-4"><button className="btn-outline-ink px-5 py-2">Place order</button></div>
          {done && <div className="alert alert-success mt-4">Order placed. Thank you!</div>}
        </div></div>
      </form>
    </main>
  );
}
