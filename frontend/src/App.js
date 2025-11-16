import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/:platform" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

