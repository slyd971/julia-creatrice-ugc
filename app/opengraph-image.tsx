import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.name} — ${brand.tagline}`;

export default async function OpengraphImage() {
  // Polices embarquées explicitement : next/og (Satori) ignore les
  // fontFamily/fontStyle génériques ("serif", "italic") sans fichier de
  // police réellement chargé — sans ça le rendu retombe sur une police
  // système, ce qui cassait l'identité visuelle (Bodoni Moda italique) sur
  // la carte de partage affichée par les réseaux sociaux.
  const displayFont = readFileSync(
    join(process.cwd(), "app", "fonts", "BodoniModa-Italic-600.ttf")
  );
  const bodyFont = readFileSync(join(process.cwd(), "app", "fonts", "Manrope-Bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #171310 0%, #241811 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            fontFamily: "Manrope",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C97B4E",
            marginBottom: 32,
          }}
        >
          {brand.tagline}
        </div>
        <div
          style={{
            fontFamily: "Bodoni Moda",
            fontStyle: "italic",
            fontSize: 128,
            fontWeight: 600,
            color: "#F9F2E9",
          }}
        >
          {brand.name}
        </div>
        <div
          style={{
            fontFamily: "Manrope",
            fontSize: 32,
            fontWeight: 700,
            color: "#ECE1D4",
            marginTop: 36,
            textAlign: "center",
          }}
        >
          Beauté · Mode · Lifestyle · Food · Voyage
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bodoni Moda", data: displayFont, style: "italic", weight: 600 },
        { name: "Manrope", data: bodyFont, style: "normal", weight: 700 },
      ],
    }
  );
}
