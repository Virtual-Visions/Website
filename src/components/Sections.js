import React from 'react';
import './Sections.css'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

function App() {
  return (
    <div id="sections" className="sections">
      <div id="section4" className="section4">
        <Section4/>
      </div>    
      <div id="section3" className="section3">
        <Section3/>
      </div>    
      <div id="section1" className="section1">
        <Section1/>
      </div>
      <div id="section2" className="section2">
        <Section2/>
      </div>
    </div>
  );
}

export default App;