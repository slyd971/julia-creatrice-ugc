import { universe } from "@/content/site";

export function Universe() {
  return (
    <section className="universe" id="univers">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">{universe.eyebrow}</span>
          <h2 className="display">{universe.title}</h2>
        </div>
        <p className="universe-intro" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          {universe.intro}
        </p>
        <div className="universe-grid">
          {universe.items.map((item) => (
            <div className="universe-item" key={item.label}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
