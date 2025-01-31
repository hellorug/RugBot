import React from 'react';
import './index.css';
import App from './App';
import DApp from './dApp';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Mainnet, DAppProvider, Config } from '@usedapp/core';
import Stake from './dApp_stake';
import Claim from './dApp_claim';

const rootElement = document.getElementById("root");

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://rpc.ankr.com/eth',
  },
}

reactDom.render(
    <DAppProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="RugBot/dApp" element={<DApp />} />
          {/*<Route path="stake" element={<Stake />} />*/}
          <Route path="RugBot/claim" element={<Claim />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </DAppProvider>,
    rootElement
);

reportWebVitals();
