import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import FirstScene from "./FirstScene";
import SecondScene from "./SecondScene";
import ThirdScene from "./ThirdScene";

const IntroVideo = () => {
  return (
    <AbsoluteFill>
      {/* Add background music */}
      <Audio src={staticFile("/music.mp3")} />

      {/* Sequence of scenes */}
      <Sequence from={0} durationInFrames={90}>
        <FirstScene />
      </Sequence>
      <Sequence from={90} durationInFrames={90}>
        <SecondScene />
      </Sequence>
      <Sequence from={180} durationInFrames={150}>
        <ThirdScene />
      </Sequence>
    </AbsoluteFill>
  );
};

export default IntroVideo;
