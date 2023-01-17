import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './utils/style/index.css';
import { store } from "./redux"
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
