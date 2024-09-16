import React, { useEffect, useRef, useState, useMemo } from "react";
import Globe from 'react-globe.gl';
import * as THREE from 'three'; // Import Three.js for 3D rendering
import SlideshowA1 from "../../../assets/before_s1.jpg";
import SlideshowA2 from "../../../assets/before_s2.jpg";
import SlideshowA3 from "../../../assets/before_s3.jpg";
import SlideshowB1 from "../../../assets/after_s1.jpg";
import SlideshowB2 from "../../../assets/after_s2.jpg";
import SlideshowB3 from "../../../assets/after_s3.jpg";
import SlideshowC1 from "../../../assets/firewall_s1.jpg";
import SlideshowC2 from "../../../assets/firewall_s2.jpg";
import SlideshowC3 from "../../../assets/firewall_s3.jpg";
import SpaceImg from "../../../assets/Space_stars.jpg"; // Image for the map background
import './Activity.css'; // Importing CSS for styling

// Helper functions to move to the next and previous slides in the slideshow
const nextSlide = (setIndex, images) => {
  setIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const prevSlide = (setIndex, images) => {
  setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};

const Activity = () => {
  // Slideshow state to track the current index of images for each slideshow
  const [friscoIndex, setFriscoIndex] = useState(0); // Slideshow for Frisco images
  const [noidaIndex, setNoidaIndex] = useState(0);   // Slideshow for Noida images
  const [chennaiIndex, setChennaiIndex] = useState(0); // Slideshow for Chennai images

  const globeEl = useRef(); // Ref to access the globe instance

  // Using useMemo to avoid unnecessary re-renders when the image arrays don't change
  const friscoImages = useMemo(() => [SlideshowA1, SlideshowA2, SlideshowA3], []);
  const noidaImages = useMemo(() => [SlideshowB1, SlideshowB2, SlideshowB3], []);
  const chennaiImages = useMemo(() => [SlideshowC1, SlideshowC2, SlideshowC3], []);

  // Auto-advance the slides for each slideshow every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(setFriscoIndex, friscoImages);
      nextSlide(setNoidaIndex, noidaImages);
      nextSlide(setChennaiIndex, chennaiImages);
    }, 2000); // 2 seconds interval

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [friscoImages, noidaImages, chennaiImages]);

  // State to store the globe's size, which adjusts dynamically based on window size
  const [globeSize, setGlobeSize] = useState({
    width: window.innerWidth * 0.5,  // 80% of the window's width
    height: window.innerHeight * 0.6, // 60% of the window's height
  });

  // Effect to handle window resize events and update the globe's dimensions accordingly
  useEffect(() => {
    const handleResize = () => {
      setGlobeSize({
        width: window.innerWidth * 0.5,
        height: window.innerHeight * 0.6,
      });
    };
    
    // Add event listener to handle resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoizing the Globe component to prevent unnecessary re-renders
  const memoizedGlobe = useMemo(() => (
    <Globe
      ref={globeEl} // Attach the globe instance to the ref
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Texture for the globe
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"    // Bump map for terrain
      backgroundColor="rgba(0, 0, 0, 0)" // Transparent background for globe
      height={globeSize.height} // Globe's height based on window size
      width={globeSize.width}   // Globe's width based on window size
      animateIn={true}          // Animate globe on load
    />
  ), [globeSize]); // Recompute only when the globe size changes

  // Effect to initialize and configure the globe after it is rendered
  useEffect(() => {
    const globe = globeEl.current; // Access the globe instance

    if (globe) {
      globe.controls().autoRotate = true; // Enable auto-rotation for the globe
      globe.controls().autoRotateSpeed = 0.7; // Set auto-rotation speed
      globe.pointOfView({ altitude: 1.5 });   // Set the initial altitude for the globe's POV

      // Load a cloud texture and add rotating clouds to the globe
      const CLOUDS_IMG_URL = '/assets/clouds.png';
      const CLOUDS_ALT = 0.004; // Altitude for clouds relative to the globe
      const CLOUDS_ROTATION_SPEED = -0.006; // Speed at which clouds rotate

      // Load the cloud texture and apply it to a mesh around the globe
      new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
        const clouds = new THREE.Mesh(
          new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
          new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true }) // Add transparency
        );
        globe.scene().add(clouds); // Add clouds mesh to the globe's scene

        // Rotate the clouds continuously
        const rotateClouds = () => {
          clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180; // Convert degrees to radians
          requestAnimationFrame(rotateClouds); // Animate rotation
        };
        rotateClouds(); // Start rotating clouds
      });
    }
  }, []); // Run once after the component mounts

  return (
    <div className="activity-container">
      {/* Page Header */}
      <h1 className="activity-header">
        HCLTech CIDC (Cyber Innovation & Design Center) – Demo Platform
      </h1>

      {/* Slideshow Section */}
      <div className="activity-slideshow-container">
        {/* Slideshow for Frisco images */}
        <Slideshow images={friscoImages} currentIndex={friscoIndex} setIndex={setFriscoIndex} />
        {/* Slideshow for Noida images */}
        <Slideshow images={noidaImages} currentIndex={noidaIndex} setIndex={setNoidaIndex} />
        {/* Slideshow for Chennai images */}
        <Slideshow images={chennaiImages} currentIndex={chennaiIndex} setIndex={setChennaiIndex} />
      </div>

      {/* Map Section */}
      <div className="activity-map-container">
        <img src={SpaceImg} alt="Global CSFCs Map" className="activity-map-background" />
        <div className="globe-overlay">
          {memoizedGlobe} {/* Render the memoized globe */}
        </div>
      </div>

      {/* Footer */}
      <footer className="activity-footer">
        <p>&copy; {new Date().getFullYear()} HCLTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Slideshow component to display images and navigation buttons
const Slideshow = ({ images, currentIndex, setIndex }) => {
  return (
    <div className="activity-slideshow">
      <img src={images[currentIndex]} alt="Slide" className="activity-image" /> {/* Current image */}
      
      {/* Previous slide button */}
      <button onClick={() => prevSlide(setIndex, images)} className="activity-prev-button">
        &#9664;
      </button>
      
      {/* Next slide button */}
      <button onClick={() => nextSlide(setIndex, images)} className="activity-next-button">
        &#9654;
      </button>
    </div>
  );
};

export default Activity;
