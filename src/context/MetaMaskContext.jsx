// src/context/MetaMaskContext.js

import React, { createContext, useState, useContext } from 'react';

const MetaMaskContext = createContext();

export const useMetaMask = () => useContext(MetaMaskContext);

export const MetaMaskProvider = ({ children }) => {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);

  return (
    <MetaMaskContext.Provider value={{ metaMaskAddress, setMetaMaskAddress }}>
      {children}
    </MetaMaskContext.Provider>
  );
};
