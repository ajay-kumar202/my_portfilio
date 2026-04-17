import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px",
          background: "linear-gradient(130deg, #0A0A0A, #111111, #0f766e)",
          color: "#F5F5F5"
        }}
      >
        <p style={{ fontSize: 24, letterSpacing: "0.18em", color: "#51E2F5", textTransform: "uppercase" }}>
          Senior Software Architect
        </p>
        <h1 style={{ margin: "18px 0 0 0", fontSize: 72, lineHeight: 1.05 }}>Ajay Kumar</h1>
      </div>
    ),
    size
  );
}
