import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GithubProvider } from './context/GithubContext';
import "./css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>
);
