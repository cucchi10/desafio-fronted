import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PicDetail from '../pages/PicDetail';
import { PicProvider } from '../contexts/PicContext';

function main() {
  return (
  <BrowserRouter>
    <PicProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pic/:id" element={<PicDetail />} />
      </Routes>
    </PicProvider>
  </BrowserRouter>
);
}

export default main;
