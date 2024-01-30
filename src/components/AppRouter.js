// src/AppRouter.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Imprint from './Imprint';
import Memoria from './Memoria';
import Grabbing from './Freies_Greifen';
import Walking from './RedirectedWalking';
import CNCMachine from './CNC_Maschine';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/memoria" element={<Memoria />} />
        <Route path="/grabbing" element={<Grabbing />} />
        <Route path="/walking" element={<Walking />} />
        <Route path="/cncMachine" element={<CNCMachine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;