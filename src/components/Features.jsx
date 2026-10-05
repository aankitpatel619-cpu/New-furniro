import * as Fa from "react-icons/fa";
import { features } from "../data";
export default function Features() {
  return (
    <section className="bg-cream py-5 mt-5">
      <div className="container-xl row mx-auto g-4">
        {features.map(([icon, t, s]) => {
          const Icon = Fa[icon];
          return (
            <div key={t} className="col-6 col-lg-3 d-flex gap-3 align-items-center">
              <Icon size={38} />
              <div><h6 className="fw-semibold mb-0">{t}</h6><small className="muted">{s}</small></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
