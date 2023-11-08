import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./routes/Calculator";
import PowerPoint from "./routes/PowerPoint";
import { FurnituresBody } from "./routes/ProjectArea/FurnituresBody";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Calculator />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/ppt" element={<PowerPoint mes={"NOV"} />} />
        <Route path="/fur" element={<FurnituresBody />} />
      </Routes>
    </Router>
  );
}

export default App;
