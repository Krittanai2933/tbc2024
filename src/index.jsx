// index.js or the file where your root rendering logic is
import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Agenda } from "./components/Agenda";
import { Sponsorpage } from "./components/Sponserpage/Sponserpage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/sponsor" element={<Sponsorpage />}/>
    </Routes>
  </Router>
);
