import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/navstyles.css";
import "./css/home.css";
import "./css/input.css";
import "./css/cards.css";
import "./css/reviews.css";
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
