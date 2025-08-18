import './App.css'

import React from 'react';
import Home from './pages/Home';
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return <Routes>
    
    <Route path="/" element={<Home />}>
    </Route>

  </Routes>

};

export default App;
