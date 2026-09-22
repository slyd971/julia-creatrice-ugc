import Image from "next/image";
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
          {brands.items.map((item) => (
            <div className="brand-item" key={item.name}>
              <Image
                src={item.logo}
                alt={item.name}
                fill
                sizes="(max-width: 560px) 40vw, 150px"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
