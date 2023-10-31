import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Router, Routes, Route } from "react-router-dom";
import Market from "./pages/Market";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/shop" element={<Market />} />
            </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
