import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C97B4E",
            marginBottom: 32,
          }}
        >
          Créatrice de contenu & UGC
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: 96,
            fontWeight: 600,
            color: "#F9F2E9",
          }}
        >
          {brand.name}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#ECE1D4",
            marginTop: 36,
            textAlign: "center",
          }}
        >
          Beauté · Mode · Lifestyle · Food · Voyage
        </div>
      </div>
    ),
    { ...size }
  );
}
