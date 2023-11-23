import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Novel from "./pages/Novel.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

// var hist = createBrowserHistory();
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/custom-components" element={<CustomComponents />} /> */}
      <Route path='*' element={<Components />}/>
      <Route path='/novel' element={<Novel />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
