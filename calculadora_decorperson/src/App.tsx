import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Calculator from "./routes/Calculator";
import PowerPoint from "./routes/PowerPoint";
import { FurnituresBody } from "./routes/ProjectArea/FurnituresBody";
import { ContextCalcValue } from "./services/context-calc";
import DialogDeleteInfo from "./components/productsDialog/DialogDeleteInfo";
import DialogUpdateInfo from "./components/productsDialog/DialogUpdateInfo";
import DialogPostInfo from "./components/productsDialog/DialogPostInfo";
import DialogFurnitureDeleteInfo from "./components/furnituresDialog/DialogFurnitureDeleteInfo";
import DialogFurnitureUpdateInfo from "./components/furnituresDialog/DialogFurnitureUpdateInfo";
import DialogFurniturePostInfo from "./components/furnituresDialog/DialogFurniturePostInfo";

function App() {
  const [contextCalcValue, setContextCalcValue] = useState<number>(0);

  return (
    <ContextCalcValue.Provider
      value={{ contextCalcValue, setContextCalcValue }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/calc" />} />
          <Route index element={<Calculator />} />
          <Route path="/calc" element={<Calculator />} />
          <Route
            path="/calc/products/:productId"
            element={<DialogUpdateInfo />}
          />
          <Route path="/calc/novoItem" element={<DialogPostInfo />} />
          <Route
            path="/calc/delete/:productId"
            element={<DialogDeleteInfo />}
          />
          <Route path="/ppt" element={<PowerPoint />} />
          <Route path="/fur" element={<FurnituresBody />} />
          <Route path="/fur/novoItem/" element={<DialogFurniturePostInfo />} />
          <Route
            path="/fur/furnitures/:furnitureId"
            element={<DialogFurnitureUpdateInfo />}
          />
          <Route
            path="/fur/delete/:furnitureId"
            element={<DialogFurnitureDeleteInfo />}
          />
        </Routes>
      </Router>
    </ContextCalcValue.Provider>
  );
}

export default App;
