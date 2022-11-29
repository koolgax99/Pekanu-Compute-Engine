import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterTask from "./Components/RegisterTask";
import Navbar from "./Components/Navbar";

// React Router App

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<RegisterTask />} />
      </Routes>
    </Router>
  );
};

export default App;
