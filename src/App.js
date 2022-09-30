import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadNow from "./Components/ReadNow";
// import API from "./Components/API.JS";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/read" element={<ReadNow />} />
      </Routes>
    </Router>
  );
}

export default App;
