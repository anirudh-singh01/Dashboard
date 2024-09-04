import React, { useEffect, useState } from "react";
import Globe from 'react-globe.gl';
import SlideshowA1 from "../../../assets/slide_a (1).jpg";
import SlideshowA2 from "../../../assets/slide_a (2).jpg";
import SlideshowA3 from "../../../assets/slide_a (3).jpg";
import SlideshowB1 from "../../../assets/slide_b (1).jpg";
import SlideshowB2 from "../../../assets/slide_b (2).jpg";
import SlideshowB3 from "../../../assets/slide_b (3).jpg";
import SlideshowC1 from "../../../assets/slide_c (1).jpg";
import SlideshowC2 from "../../../assets/slide_c (2).jpg";
import SlideshowC3 from "../../../assets/slide_c (3).jpg";

import './Activity.css';

function Activity() {
  const [friscoIndex, setFriscoIndex] = useState(0);
  const [noidaIndex, setNoidaIndex] = useState(0);
  const [chennaiIndex, setChennaiIndex] = useState(0);

  const friscoImages = [SlideshowA1, SlideshowA2, SlideshowA3];
  const noidaImages = [SlideshowB1, SlideshowB2, SlideshowB3];
  const chennaiImages = [SlideshowC1, SlideshowC2, SlideshowC3];

  const nextSlide = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(setFriscoIndex, friscoImages);
      nextSlide(setNoidaIndex, noidaImages);
      nextSlide(setChennaiIndex, chennaiImages);
    }, 2000);

    return () => clearInterval(interval);
  }, [friscoImages, noidaImages, chennaiImages]);

  return (
    <div className="activity-container">
      <h1 className="activity-header">
        HCLTech CSFC (Cyber Security Fusion Centre) – Service Offerings
      </h1>

      <div className="activity-slideshow-container">
        <div className="activity-slideshow">
          <img
            src={friscoImages[friscoIndex]}
            alt="Frisco"
            className="activity-image"
          />
          <button
            onClick={() => prevSlide(setFriscoIndex, friscoImages)}
            className="activity-prev-button"
          >
            &#9664;
          </button>
          <button
            onClick={() => nextSlide(setFriscoIndex, friscoImages)}
            className="activity-next-button"
          >
            &#9654;
          </button>
          <p>Frisco</p>
        </div>

        <div className="activity-slideshow">
          <img
            src={noidaImages[noidaIndex]}
            alt="Noida"
            className="activity-image"
          />
          <button
            onClick={() => prevSlide(setNoidaIndex, noidaImages)}
            className="activity-prev-button"
          >
            &#9664;
          </button>
          <button
            onClick={() => nextSlide(setNoidaIndex, noidaImages)}
            className="activity-next-button"
          >
            &#9654;
          </button>
          <p>Noida</p>
        </div>

        <div className="activity-slideshow">
          <img
            src={chennaiImages[chennaiIndex]}
            alt="Chennai"
            className="activity-image"
          />
          <button
            onClick={() => prevSlide(setChennaiIndex, chennaiImages)}
            className="activity-prev-button"
          >
            &#9664;
          </button>
          <button
            onClick={() => nextSlide(setChennaiIndex, chennaiImages)}
            className="activity-next-button"
          >
            &#9654;
          </button>
          <p>Chennai</p>
        </div>
      </div>

      <div className="activity-map-container">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0, 0, 0, 0)"
          width={660} // Increased by 10%
          height={440} // Increased by 10%
          animateIn={true}
          rotateSpeed={0.05} // Controls the speed of rotation
        />
        <h2 className="activity-globe-title">Global CSFCs</h2>
        <p className="activity-globe-legend purple">* CSFC</p>
        <p className="activity-globe-legend green">*Emerging Satellite Centers</p>
      </div>
    </div>
  );
}

export default Activity;



//image or video view in dashboard

// import React from "react";
// import MyImage from "../../../assets/image.png"; // Adjust the path to your image file

// function Activity() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <img src={MyImage} alt="Description of Image" style={{ width: "100%", height: "auto" }} />
//     </div>
//   );
// }

// export default Activity;

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


