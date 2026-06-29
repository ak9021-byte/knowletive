import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #172554, #1e3a8a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            marginBottom: 20,
          }}
        >
          Knowletive
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#7dd3fc",
            fontWeight: 700,
          }}
        >
          Where Ambition Meets Expert Guidance
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#cbd5e1",
            marginTop: 24,
          }}
        >
          Career Counselling · Admissions · Business Excellence
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}