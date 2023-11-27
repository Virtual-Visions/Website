import React from 'react';
// import { useSpring, animated } from 'react-spring';
import './AnimatedHeadline.css';
import MenuBar from './Menu.js';

function AnimatedHeadline() {
  // const animationProps = useSpring({
  //   from: { opacity: 0.5, transform: 'translateY(-100px)' },
  //   to: { opacity: 1, transform: 'translateX(0)' },
  //   config: { duration: 2000 },
  // });
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden', // Überlauf verhindern
    backgroundColor: '#000', // Schwarz als Hintergrundfarbe
  };
  
  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Video so skalieren, dass es vollständig im Container passt und Seitenverhältnis beibehält
  
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 1,

  };
  

  // const headlineContainerStyle = {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  // };

  // const headlineStyle = {
  //   color: '#d5d5d5', // Überschrift in Grauton geändert
  //   fontSize: 50,
  //   margin: '20px', // Anpassung des Margins
  //   flex: '1',
  //   padding: '20px',
  // };


  const isMobileDevice = window.innerWidth < 768;

  return (
    <div id="containerStyle" style={containerStyle}>
      {isMobileDevice ? (
        <video autoPlay muted loop style={videoStyle}>
        <source src="Header_Video_Small.mp4" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>
        // <div style={headlineContainerStyle} className="headline-container">
        //   <div className="imageStyle"></div>
        //   <div style={headlineStyle} className="headline">
        //     <animated.h1 style={animationProps}>Virtual Visions</animated.h1>
        //   </div>
          
        // </div>
      ) : (

        <video autoPlay muted loop style={videoStyle}>
          <source src="Header_Video.mp4" type="video/mp4" />
          Dein Browser unterstützt das Video-Tag nicht.
        </video>

      )}



      <MenuBar />
    </div>
  );
}

export default AnimatedHeadline;
