import React from 'react';
import ReactDOM from 'react-dom/client';
import { SaibWebButton } from './components/SaibWebButton';
import { SaibWebHeader } from './components/SaibWebHeader';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SaibWebHeader title="Lib de components SaibWeb" />
    <SaibWebButton>saiba mais</SaibWebButton>
  </React.StrictMode>
);
