import "./styles.css";
import background from "../../../assets/bg-gold.png";
import * as budgetService from "../../../services/budget-service";
import pageFive from "../../../assets/page-5.svg";
import { formatDateMonth, formatPrintDate } from "../../../utils/utils";

export default function PageFive() {
  const bud = budgetService.getBudget();

  const sendDate = formatPrintDate(bud.date);
  const monthDate = formatDateMonth(bud.date);

  return (
    <div className="page-five-background">
      <div>
        <img className="" src={pageFive} alt="" />

        <div className="info-box-page-five">
          <span className="title-proposta-pg-five">Proposta</span>
          <span className="month-proposta"> | {monthDate}</span>
          <hr className="info-box-line" />
          <p className="left-text-pg-five">Decoperson </p>
          <span className="left-text-pg-five">Data : </span>
          <span className="right-text-pg-five"> {sendDate}</span> <br />
          <span className="left-text-pg-five">Gerente : </span>
          <span className="right-text-pg-five">Miguel Machado</span>
        </div>
      </div>
    </div>
  );
}
