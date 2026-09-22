import { brands } from "@/content/site";

export function Brands() {
  return (
    <section className="brands" id="references">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">{brands.eyebrow}</span>
          <h2 className="display">{brands.title}</h2>
        </div>
        <div className="brands-grid">
          {brands.items.map((name) => (
            <div className="brand-item" key={name}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
