import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./routes/Calculator";
import PowerPoint from "./routes/PowerPoint";
import { FurnituresBody } from "./routes/ProjectArea/FurnituresBody";
import { ContextCalcValue } from "./services/context-calc";

function App() {
  const [contextCalcValue, setContextCalcValue] = useState<number>(0);

  return (
    <ContextCalcValue.Provider
      value={{ contextCalcValue, setContextCalcValue }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/ppt" element={<PowerPoint />} />
          <Route path="/fur" element={<FurnituresBody />} />

        </Routes>
      </Router>
    </ContextCalcValue.Provider>
  );
}

export default App;
