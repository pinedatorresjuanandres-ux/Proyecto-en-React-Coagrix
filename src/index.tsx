import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/pages/home.css';
import './styles/pages/ui.css';

const root = document.getElementById('root');
if (!root) throw new Error('No se encontró el elemento root.');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
