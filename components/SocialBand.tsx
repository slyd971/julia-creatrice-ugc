import { socialLinks } from "@/content/site";
import { EmailIcon, InstagramIcon, TiktokIcon } from "./icons";

export function SocialBand() {
  return (
    <div className="social-band">
      <div className="wrap">
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
  );
}
