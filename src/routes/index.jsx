import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PicDetail from '../pages/Pic/PicDetail';
import UsePics from '../hooks/UsePics';
import { PicContext, useContext } from '../contexts/PicContext';
import { notification } from 'antd';

function main() {
  // NOTIFICATION ERROR
  const [showNotification, NotificationProvider] = notification.useNotification();
  const notificationError = (message = 'Error al obtener datos') => {
    showNotification.error({ message });
  };

  // CONTEXT PICS
  const { pics, updatePicContext } = useContext(PicContext);

  const { searchPics, isLoading } = UsePics((data) => {
    updatePicContext(data)
  }, (error) => notificationError(error?.data));

  // LOAD DATA
  const loadData = () => {
    if (!pics.length) {
      searchPics();
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <BrowserRouter>
      {NotificationProvider}
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/pic/:id" element={<PicDetail isLoading={isLoading} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default main;
