import "./styles.css";

import PageTwo from "../../components/PowerPointPages/PageTwo";
import PageThree from "../../components/PowerPointPages/PageThree";
import PageOne from "../../components/PowerPointPages/PageOne";

import * as budgetService from "../../services/budget-service";
import PageFour from "../../components/PowerPointPages/PageFour";
import PageFive from "../../components/PowerPointPages/PageFive";


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
