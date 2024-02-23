import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./components/Booking";
import Admin from "./components/Admin";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Body />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/body" element={<Body />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
