import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoPage from "./components/DemoPage/DemoPage";
import DemoLogin from "./components/DemoLogin/DemoLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<DemoLogin />} />
        <Route path="/" exact element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
