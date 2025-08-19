import "./App.css";

import React from "react";
import Home from "./pages/Home";
import VulRep from "./pages/VulRep";
import VollDb from "./pages/VollDb";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/vulnerability-reporter" element={<VulRep />} />
        <Route path="/projects/volleyball-database" element={<VollDb />} />
      </Routes>
    </Router>
  );
};

export default App;
