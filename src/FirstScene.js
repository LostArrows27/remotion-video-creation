import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const FirstScene = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#282c34",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "white",
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        Welcome to Our Journesssy!
      </div>
    </AbsoluteFill>
  );
};

export default FirstScene;
