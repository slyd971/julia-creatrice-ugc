import { brand, navLinks, socialLinks } from "@/content/site";
import { EmailIcon, InstagramIcon, TiktokIcon } from "./icons";

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <span className="fmark">{brand.name}</span>
          <p>{brand.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Navigation du footer">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener"
            aria-label={`${socialLinks.instagram.label} (nouvel onglet)`}
            title={socialLinks.instagram.label}
          >
            <InstagramIcon />
          </a>
          <a
            href={socialLinks.tiktok.url}
            target="_blank"
            rel="noopener"
            aria-label={`${socialLinks.tiktok.label} (nouvel onglet)`}
            title={socialLinks.tiktok.label}
          >
            <TiktokIcon />
          </a>
          <a
            href={socialLinks.email.url}
            aria-label={`Email — ${socialLinks.email.address}`}
            title={socialLinks.email.address}
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {brand.name} — {brand.tagline}
        </p>
      </div>
    </footer>
  );
}
