import React from "react";
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"]; // Images for columns
const columnCount = 5; // Total columns

const ThirdScene = () => {
  const frame = useCurrentFrame();

  // Generate scroll positions for each column
  const scrollSpeeds = Array.from({ length: columnCount }, (_, i) =>
    i % 2 === 0
      ? interpolate(frame, [0, 150], [0, -300])
      : interpolate(frame, [0, 150], [0, 300])
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1c1c1e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Centered Text */}
      <div
        style={{
          position: "absolute",
          fontSize: 70,
          color: "white",
          fontWeight: "bold",
          zIndex: 2,
        }}
      >
        Summary Trip
      </div>

      {/* Columns */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          zIndex: 0,
        }}
      >
        {Array.from({ length: columnCount }, (_, columnIndex) => (
          <div
            key={columnIndex}
            style={{
              display: "flex",
              width: "19%",
              flexDirection: "column",
              alignItems: "center",
              transform: `translateY(${scrollSpeeds[columnIndex]}px)`,
              gap: 20,
            }}
          >
            {/* Images in each column */}
            {images.map((src, imageIndex) => (
              <img
                key={imageIndex}
                src={staticFile(src)}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                }}
                alt={`Image ${imageIndex + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

export default ThirdScene;
