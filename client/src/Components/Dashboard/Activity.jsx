import React, { useEffect, useState } from "react";
import SlideshowA1 from "../../../assets/slide_a (1).jpg";
import SlideshowA2 from "../../../assets/slide_a (2).jpg";
import SlideshowA3 from "../../../assets/slide_a (3).jpg";
import SlideshowB1 from "../../../assets/slide_b (1).jpg";
import SlideshowB2 from "../../../assets/slide_b (2).jpg";
import SlideshowB3 from "../../../assets/slide_b (3).jpg";
import SlideshowC1 from "../../../assets/slide_c (1).jpg";
import SlideshowC2 from "../../../assets/slide_c (2).jpg";
import SlideshowC3 from "../../../assets/slide_c (3).jpg";
import mapImg from "../../../assets/map.png"; // Assuming you have a map image

function Activity() {
  // State to handle current slide index for each location
  const [friscoIndex, setFriscoIndex] = useState(0);
  const [noidaIndex, setNoidaIndex] = useState(0);
  const [chennaiIndex, setChennaiIndex] = useState(0);

  // Arrays to store images for each location
  const friscoImages = [SlideshowA1, SlideshowA2, SlideshowA3];
  const noidaImages = [SlideshowB1, SlideshowB2, SlideshowB3];
  const chennaiImages = [SlideshowC1, SlideshowC2, SlideshowC3];

  // Function to handle slide change
  const nextSlide = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide for each location
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(setFriscoIndex, friscoImages);
      nextSlide(setNoidaIndex, noidaImages);
      nextSlide(setChennaiIndex, chennaiImages);
    }, 2000); // Change image every  seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [friscoImages, noidaImages, chennaiImages]);

  return (
    <div style={{ height: "100vh", fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        HCLTech CSFC (Cyber Security Fusion Centre) – Service Offerings
      </h1>

      {/* Image Grid */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        {/* Frisco Slideshow */}
        <div style={{ textAlign: 'center', position: 'relative', width: '300px' }}>
          <img
            src={friscoImages[friscoIndex]}
            alt="Frisco"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <button
            onClick={() => prevSlide(setFriscoIndex, friscoImages)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &#9664;
          </button>
          <button
            onClick={() => nextSlide(setFriscoIndex, friscoImages)}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &#9654;
          </button>
          <p>Frisco</p>
        </div>

        {/* Noida Slideshow */}
        <div style={{ textAlign: 'center', position: 'relative', width: '300px' }}>
          <img
            src={noidaImages[noidaIndex]}
            alt="Noida"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <button
            onClick={() => prevSlide(setNoidaIndex, noidaImages)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &#9664;
          </button>
          <button
            onClick={() => nextSlide(setNoidaIndex, noidaImages)}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &#9654;
          </button>
          <p>Noida</p>
        </div>

        {/* Chennai Slideshow */}
        <div style={{ textAlign: 'center', position: 'relative', width: '300px' }}>
          <img
            src={chennaiImages[chennaiIndex]}
            alt="Chennai"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <button
            onClick={() => prevSlide(setChennaiIndex, chennaiImages)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &#9664;
          </button>
          <button
            onClick={() => nextSlide(setChennaiIndex, chennaiImages)}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &#9654;
          </button>
          <p>Chennai</p>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img
          src={mapImg}
          alt="Global CSFCs Map"
          style={{ width: '80%', height: 'auto', borderRadius: '8px' }}
        />
        <h2 style={{ color: 'green' }}>Global CSFCs</h2>
        <p style={{ fontSize: '12px', color: 'purple' }}>* CSFC</p>
        <p style={{ fontSize: '12px', color: 'green' }}>*Emerging Satellite Centers</p>
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


