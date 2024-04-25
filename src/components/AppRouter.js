// src/AppRouter.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Imprint from './Imprint';
import DS from './DS'
import Memoria from './Memoria';
import PhysicsBasedUI from './PhysicsBasedUI';
import Grabbing from './Freies_Greifen';
import Walking from './RedirectedWalking';
import CNCMachine from './CNC_Maschine';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/dataPrivacy" element={<DS />} />
        <Route path="/memoria" element={<Memoria />} />
        <Route path="/grabbing" element={<Grabbing />} />
        <Route path="/walking" element={<Walking />} />
        <Route path="/cncMachine" element={<CNCMachine />} />
        <Route path="/physicsBasedUI" element={<PhysicsBasedUI />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;