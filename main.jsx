import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

// For CSS files
import './index.css'; // for tailwind css
import './App.css';
import './styles/global.css'; // might have to move this elsewhere...


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Wrapping App with BrowserRouter/ Router */}
      <App />
    </Router>
  </StrictMode>
)
