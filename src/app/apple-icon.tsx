import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so the tile stays square.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08070d",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -50,
            width: 140,
            height: 140,
            borderRadius: 9999,
            background: "rgba(139,107,255,0.45)",
            filter: "blur(30px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -30,
            bottom: -60,
            width: 120,
            height: 120,
            borderRadius: 9999,
            background: "rgba(255,92,184,0.35)",
            filter: "blur(30px)",
          }}
        />
        <span
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -4,
            background: "linear-gradient(100deg, #8b6bff, #ff5cb8 50%, #ff9542)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.initials}
        </span>
      </div>
    ),
    { ...size }
  );
}
