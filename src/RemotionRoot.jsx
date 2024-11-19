import { Composition } from "remotion";
import IntroVideo from "./IntroVideo";
export const RemotionRoot = () => (
  <Composition
    id="intro-video"
    component={IntroVideo}
    durationInFrames={330} // Total duration: 6 seconds (30 fps)
    fps={30}
    width={1920}
    height={1080}
  />
);

// import { Composition } from "remotion";
// import MyVideo from "./MyVideo";

// export const RemotionRoot = () => (
//   <Composition
//     id="my-video"
//     component={MyVideo}
//     durationInFrames={300} // 10 seconds at 30 fps
//     fps={30}
//     width={1920}
//     height={1080}
//     defaultProps={{
//       userText: "Welcome to Remotion!",
//     }}
//   />
// );
