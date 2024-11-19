import React from "react";
import { AbsoluteFill, Img } from "remotion";
import testImage from "../public/assets/test.jpg";

const MyVideo = ({ userText }) => {
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
          fontSize: 50,
          color: "white",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        {userText || "Default Text"}
      </div>
      <Img
        src={testImage}
        style={{
          width: 600,
          height: "auto",
          borderRadius: 10,
          border: "5px solid white",
        }}
      />
    </AbsoluteFill>
  );
};

export default MyVideo;
