const { bundle } = require("@remotion/bundler");
const { renderMedia, selectComposition } = require("@remotion/renderer");
const path = require("path");

const renderVideo = async () => {
  // Bundle the project
  const bundleLocation = await bundle({
    entryPoint: path.resolve("./src/index.jsx"),
  });

  // Input props for the video
  const inputProps = {
    userText: "Hello, world!",
  };

  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: "my-video",
  }); // Render the video
  await renderMedia({
    composition: composition,
    serveUrl: bundleLocation,
    crf: 18,
    pixelFormat: "yuv420p",
    codec: "h264",
    outputLocation: `out/test.mp4`,
    inputProps,
  });

  console.log("Render done!");
};

renderVideo();
