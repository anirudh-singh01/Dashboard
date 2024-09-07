import React, { useEffect, useRef, useState } from "react";
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import SlideshowA1 from "../../../assets/slide_a (1).jpg";
import SlideshowA2 from "../../../assets/slide_a (2).jpg";
import SlideshowA3 from "../../../assets/slide_a (3).jpg";
import SlideshowB1 from "../../../assets/slide_b (1).jpg";
import SlideshowB2 from "../../../assets/slide_b (2).jpg";
import SlideshowB3 from "../../../assets/slide_b (3).jpg";
import SlideshowC1 from "../../../assets/slide_c (1).jpg";
import SlideshowC2 from "../../../assets/slide_c (2).jpg";
import SlideshowC3 from "../../../assets/slide_c (3).jpg";
import SpaceImg from "../../../assets/Space_stars.jpg";
import './Activity.css';

function Activity() {
  const [friscoIndex, setFriscoIndex] = useState(0);
  const [noidaIndex, setNoidaIndex] = useState(0);
  const [chennaiIndex, setChennaiIndex] = useState(0);
  const globeEl = useRef();

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

  // Globe configuration for zoom, rotation, and clouds
  useEffect(() => {
    const globe = globeEl.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.70;
      globe.pointOfView({ altitude: 1.5 });

      const CLOUDS_IMG_URL = '/assets/clouds.png';
      const CLOUDS_ALT = 0.004;
      const CLOUDS_ROTATION_SPEED = -0.006;

      new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
        const clouds = new THREE.Mesh(
          new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
          new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
        );
        globe.scene().add(clouds);

        (function rotateClouds() {
          clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
          requestAnimationFrame(rotateClouds);
        })();
      });
    }
  }, []);

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
        <img
          src={SpaceImg}
          alt="Global CSFCs Map"
          className="activity-map-background"
        />
        <div className="globe-overlay">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0, 0, 0, 0)"
            animateIn={true}
            width={1050}  // Set fixed width
            height={590} // Set fixed height
          />
        </div>
      </div>

      {/* Footer section */}
      <footer className="activity-footer">
        <p>&copy; {new Date().getFullYear()} HCLTech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Activity;
