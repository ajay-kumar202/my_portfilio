import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(130deg, #0A0A0A, #111111, #0f766e)",
          color: "#F5F5F5"
        }}
      >
        <p style={{ fontSize: 28, letterSpacing: "0.2em", color: "#51E2F5", textTransform: "uppercase" }}>
          Senior Software Architect
        </p>
        <h1 style={{ margin: 0, fontSize: 86, lineHeight: 1.05 }}>Ajay Kumar</h1>
        <p style={{ margin: 0, fontSize: 30, color: "#B8B8B8" }}>
          Architecting Scalable Systems for Global Brands
        </p>
      </div>
    ),
    size
  );
}
