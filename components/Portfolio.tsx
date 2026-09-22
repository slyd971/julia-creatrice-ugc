"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { portfolio } from "@/content/site";
import { PlayIcon } from "./icons";

export function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <h2 className="display">{portfolio.title}</h2>
        </div>
        <p className="portfolio-intro" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          {portfolio.intro}
        </p>
        <div className="portfolio-grid">
          {portfolio.items.map((item, i) => (
            <button
              type="button"
              className="portfolio-item"
              key={item.video}
              onClick={() => setOpenIndex(i)}
              aria-label={`Lire la vidéo : ${item.alt}`}
            >
              <Image
                src={item.poster}
                alt={item.alt}
                fill
                sizes="(max-width: 820px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <span className="portfolio-play">
                <span>
                  <PlayIcon />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vidéo en plein écran"
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Fermer">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <video
              src={portfolio.items[openIndex].video}
              poster={portfolio.items[openIndex].poster}
              controls
              autoPlay
              playsInline
            />
          </figure>
        </div>
      )}
    </section>
  );
}
