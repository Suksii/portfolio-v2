import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#08070d",
          color: "#f3f1ff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(139,107,255,0.35)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -80,
            bottom: -180,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(255,92,184,0.25)",
            filter: "blur(90px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: "#f3f1ff",
              color: "#08070d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <span style={{ fontSize: 26, color: "#a29fb8" }}>{profile.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 104, fontWeight: 700, lineHeight: 1 }}>
            {profile.name}
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 40,
              fontWeight: 600,
              background: "linear-gradient(100deg, #8b6bff, #ff5cb8 45%, #ff9542)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.roles.join("  ·  ")}
          </span>
          <span style={{ marginTop: 28, fontSize: 28, color: "#a29fb8", maxWidth: 900 }}>
            {profile.tagline}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
