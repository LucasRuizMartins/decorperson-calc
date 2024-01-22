import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Calculator from "./routes/Calculator";
import PowerPoint from "./routes/PowerPoint";
import { FurnituresBody } from "./routes/ProjectArea/FurnituresBody";
import { ContextCalcValue } from "./services/context-calc";
import { ProductForm } from "./components/ProductForm";
import DialogInfo from "./components/DialogDeleteInfo";
import DialogDeleteInfo from "./components/DialogDeleteInfo";
import DialogUpdateInfo from "./components/DialogUpdateInfo";
import DialogPostInfo from "./components/DialogPostInfo";

function App() {
  const [contextCalcValue, setContextCalcValue] = useState<number>(0);

  return (
    <ContextCalcValue.Provider
      value={{ contextCalcValue, setContextCalcValue }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to ="/calc"/>} />
          <Route index element={<Calculator />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/calc/products/:productId" element={<DialogUpdateInfo />} />
          <Route path="/calc/novoItem" element={<DialogPostInfo />} />
          <Route path="/calc/delete/:productId" element={<DialogDeleteInfo />} />
          <Route path="/ppt" element={<PowerPoint />} />
          <Route path="/fur" element={<FurnituresBody />} />

        </Routes>
      </Router>
    </ContextCalcValue.Provider>
  );
}

export default App;
