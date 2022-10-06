import React from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Inputform from "./pages/Inputform";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import LeaveReview from "./pages/LeaveReview";
import { Route, Routes } from "react-router-dom";
import "./css/App.css";


function App() {
  return (
    <>
    <Navbar />
    <div className="all-pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/add" element={<Inputform />} />
        <Route path="/addreview" element={<LeaveReview />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
