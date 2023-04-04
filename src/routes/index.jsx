import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PicDetail from '../pages/PicDetail';
import PicContext from '../contexts/PicContext';

function main() {
  const [pics, setPics] = useState([]);
   const updatePicContext = (data) => {
    setPics(data);
  };

  return (
    <PicContext.Provider value={{ pics, updatePicContext }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pic/:id" element={<PicDetail />} />
        </Routes>
      </BrowserRouter>
    </PicContext.Provider>
  );
}

export default main;
