import React, { useState, useContext } from 'react';

const PicContext = React.createContext([]);

function PicProvider({ children }) {
  const [pics, setPics] = useState([]);

  const updatePicContext = (data) => {
    setPics(data);
  };

  return (
    <PicContext.Provider value={{ pics, updatePicContext }}>
      {children}
    </PicContext.Provider>
  );
};

export { PicContext, PicProvider, useContext };