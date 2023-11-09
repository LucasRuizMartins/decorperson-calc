import "./styles.css";

import { useContext } from "react";
import { ContextCalcValue } from "../../services/context-calc";
import PageTwo from "../../components/PowerPointPages/PageTwo";
import PageThree from "../../components/PowerPointPages/PageThree";
import PageOne from "../../components/PowerPointPages/PageOne";
import PageFour from "../../components/PowerPointPages/PageFour";

export default function PowerPoint() {
  const quantidade = 1;

  const { contextCalcValue } = useContext(ContextCalcValue);

  return (
    <section className="background">
      <div id="page-one" className="background">
        <PageOne />
      </div>

      <div>
        <PageTwo />
      </div>

      <div className="background-page-three-container">
        {Array.from({ length: quantidade }, (_, index) => (
          <PageThree key={index} totalSale={contextCalcValue} />
        ))}
      </div>
      <PageFour/>
    </section>
  );
}
