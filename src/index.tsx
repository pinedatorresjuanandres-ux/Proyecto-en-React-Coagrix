import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/notificaciones';
import './styles/global.css';
import './styles/pages/home.css';
import './styles/pages/ui.css';

const root = document.getElementById('root');
if (!root) throw new Error('No se encontró el elemento root.');

createRoot(root).render(
  // Realizado por JUAN ANDRES PINEDA
  <Provider store={store}>
    <App />
  </Provider>
);
