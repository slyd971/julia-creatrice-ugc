import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const displayFont = readFileSync(
    join(process.cwd(), "app", "fonts", "BodoniModa-Italic-600.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171310",
          color: "#C97B4E",
          fontFamily: "Bodoni Moda",
          fontStyle: "italic",
          fontSize: 130,
          fontWeight: 600,
        }}
      >
        J
      </div>
    ),
    { ...size, fonts: [{ name: "Bodoni Moda", data: displayFont, style: "italic", weight: 600 }] }
  );
}
