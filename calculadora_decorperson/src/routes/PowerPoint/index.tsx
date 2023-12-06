import "./styles.css";

import PageTwo from "../../components/PowerPointPages/PageTwo";
import PageThree from "../../components/PowerPointPages/PageThree";
import PageOne from "../../components/PowerPointPages/PageOne";

import * as budgetService from "../../services/budget-service";
import PageFour from "../../components/PowerPointPages/PageFour";
import PageFive from "../../components/PowerPointPages/PageFive";
import { useEffect } from "react";
import generatePDF, { Margin } from "react-to-pdf";

import { usePDF } from "react-to-pdf";
import { Header } from "../../components/Header";

const contentPdf = () => document.getElementById("pptId");

const config = {
  // default is `save`
  method: 'save',
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.NONE,
    // default is 'A4'
    format: 'A4',
    // default is 'portrait'
    orientation: 'landscape',
 },
}

//      <button onClick={() => generatePDF(contentPdf, config)}>gerar PDF</button>
export default function PowerPoint() {
  const quantidade = 1;
  const bud = budgetService.getBudget();

  return (
    <div className="" id="pptId">



      <div className="page">
        <PageOne />
      </div>

      <div className="page">
        <PageTwo name={bud?.clientFirstName} />
      </div>

      <div className="">
        {Array.from({ length: quantidade }, (_, index) => (
          <div key={index} className="page">
            {}
            <PageThree />
          </div>
        ))}
      </div>

      <div className="page">
        <PageFour />
      </div>

      <div className="page">
        <PageFive />
      </div>
    </div>
  );
}
