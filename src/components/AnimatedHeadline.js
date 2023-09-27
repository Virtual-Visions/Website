import React from 'react';
import { useSpring, animated } from 'react-spring';
import './AnimatedHeadline.css';
import MenuBar from "./Menu.js";

function AnimatedHeadline() {
  const animationProps = useSpring({
    from: { opacity: 0.5, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 2000 },
  });

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden', // Überlauf verhindern
  };

  const headlineContainerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const headlineStyle = {
    color: '#d5d5d5', // Überschrift in Grauton geändert
    fontSize: 50,
    margin: '350px',
    flex: '1',
    padding: '20px',
  };

  return (
    <div id="containerStyle" style={containerStyle}>
      <div className="imageStyle"></div>
      <div style={headlineContainerStyle} className="headline-container">
      <div style={headlineStyle} className="headline">
        <animated.h1 style={animationProps}>Virtual Visions</animated.h1>
      </div>
    </div>
      <MenuBar/>
      
    </div>
  );
}

export default AnimatedHeadline;
