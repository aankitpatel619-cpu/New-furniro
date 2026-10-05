import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import PageBanner from "../components/PageBanner";

const info = [
 [FaMapMarkerAlt, "Address", ["236 5th SE Avenue, New York NY10000, United States"]],
 [FaPhoneAlt, "Phone", ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"]],
 [FaClock, "Working Time", ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"]],
];
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm({ ...form, [k]: e.target.value });
  return (
    <main>
      <PageBanner title="Contact" />
      <section className="container-xl py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}><h2 className="fw-semibold">Get In Touch With Us</h2>
          <p className="muted small">For More Information About Our Product &amp; Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
        <div className="row g-5 justify-content-center">
          <div className="col-lg-4">{info.map(([Icon, t, ls]) => (
            <div key={t} className="d-flex gap-3 mb-4"><Icon className="mt-2" /><div><h5 className="fw-medium">{t}</h5>{ls.map(l => <p key={l} className="small mb-1">{l}</p>)}</div></div>
          ))}</div>
          <form className="col-lg-5" onSubmit={e => { e.preventDefault(); setSent(true); }}>
            {[["Your name", "name", "Abc", "text"], ["Email address", "email", "Abc@def.com", "email"], ["Subject", "subject", "This is optional", "text"]].map(([l, k, ph, type]) => (
              <div key={k} className="mb-4"><label className="small fw-medium mb-2">{l}</label><input type={type} className="form-control" placeholder={ph} value={form[k]} onChange={set(k)} required={k !== "subject"} /></div>
            ))}
            <div className="mb-4"><label className="small fw-medium mb-2">Message</label><textarea rows="4" className="form-control" placeholder="Hi! I'd like to ask about" value={form.message} onChange={set("message")} required /></div>
            <button className="btn btn-gold">Submit</button>
            {sent && <div className="alert alert-success mt-3">Message sent. We'll reply soon.</div>}
          </form>
        </div>
      </section>
    </main>
  );
}
