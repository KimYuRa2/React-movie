// 코드 Home.js로 옮기고 => App.js에는 라우터 관련 코드 작성

import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" exact={true} element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
