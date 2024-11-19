import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const SecondScene = () => {
  const frame = useCurrentFrame();

  const positions = [0, 15, 30]; // Delays for each image
  const yValues = positions.map((start) =>
    interpolate(frame, [start, start + 30], [-300, 0], {
      extrapolateRight: "clamp",
    })
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1c1c1e",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <Img
          key={index}
          src={`${staticFile(`/image${index + 1}.jpg`)}`} // Dynamically load images from public folder
          style={{
            top: `${yValues[index]}px`,
            left: `${index * 350 + 300}px`,
            width: 200,
            objectFit: "contain",
            borderRadius: 10,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export default SecondScene;
