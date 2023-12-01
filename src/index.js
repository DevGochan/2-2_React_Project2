import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import ScrollTop from "./ScrollTop.js";

import Novel from "./pages/Novel.js";
import Humanities from "./pages/Humanities.js";
import History from "./pages/History.js";
import Computer from "./pages/Computer.js";
import Science from "./pages/Science.js";
import Religion from "./pages/Religion.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

// var hist = createBrowserHistory();
root.render(
  <BrowserRouter>
    {/* 페이지 전환 시 스크롤이 자동으로 올라가도록 해줌 */}
    <ScrollTop />
    <Routes>
      <Route path="*" element={<Components />} />
      <Route path="/novel" element={<Novel />} />
      <Route path="/humanities" element={<Humanities />} />
      <Route path="/religion" element={<Religion />} />
      <Route path="/history" element={<History />} />
      <Route path="/IT" element={<Computer />} />
      <Route path="/science" element={<Science />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
