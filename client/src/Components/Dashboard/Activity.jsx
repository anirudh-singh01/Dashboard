import React from "react";
import MyImage from "../../../assets/image.png"; // Adjust the path to your image file

function Activity() {
  return (
    <div style={{ height: "100vh" }}>
      <img src={MyImage} alt="Description of Image" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default Activity;

//If wants to play video

// import React from "react";
// import MyVideo from "../../../assets/video.mp4"; // Adjust the path to your video file

// function Activity() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <video
//         src={MyVideo}
//         //controls  // Adds play/pause, volume, and other controls
//         style={{ width: "100%", height: "auto" }}
//         autoPlay  // Automatically starts playing the video
//         loop      // Loops the video
//         muted     // Mutes the video by default
//       />
//     </div>
//   );
// }

// export default Activity;



// If External video

// function Activity() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <iframe
//         width="100%"
//         height="500px"
//         src="https://www.youtube.com/embed/your-video-id"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="Video Title"
//       ></iframe>
//     </div>
//   );
// }

// export default Activity;

//For External link 

// function Activity() {
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <iframe
//         src="https://www.google.com/maps/@28.7035352,77.4587233,15z?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" // Replace with your external dashboard URL
//         style={{ width: "100%", height: "100%", border: "none" }}
//         title="External Dashboard"
//         allowFullScreen
//       />
//     </div>
//   );
// }

// export default Activity;


