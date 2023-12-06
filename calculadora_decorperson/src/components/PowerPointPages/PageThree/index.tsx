import "./styles.css";
import pageThreeBackGround from "../../../assets/page-3.png";
import * as budgetService from "../../../services/budget-service";
import {  useState } from "react";
import * as projService from "../../../services/furniture-service";
import { ProjectDTO } from "../../../models/project";




export default function PageThree() {
  const bud = budgetService.getBudget();

  const [proj] = useState<ProjectDTO>(projService.getProj());

  
 

  return (
    <div className="page">
      <img className="background-pg-3" src={pageThreeBackGround} alt="" />

      <div className="info-box-page-three ">
        <span className="budget-title">Orçamento - {bud?.budgetName}</span>

        {proj.items.map((item) => (
          <div key={item.furnitureId} className="">
            <p className="furniture-title">{item.name}</p>
            <p className="furniture-info-pg-3">
              Comprimento : {item.length} mm
            </p>
            <p className="furniture-info-pg-3">Altura : {item.height} mm</p>
            <p className="furniture-info-pg-3">
              Profundidade : {item.width} mm
            </p>
          </div>
        ))}
      </div>
      <span className="project-time-title"> Prazo de entrega : <br /> </span>
      <span className="project-time-info">• prazo limite {bud?.projectTime} dias</span>
      <div className="payment-info-box">
        <span>total</span>
        <span className="pay-value">R$ {bud?.totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}</span>
        <p className="payment-text-info">
          Sinal de 50% + 50% na entrega. Pagamento via cartão de crédito ou pix.
          Proposta válida por 7 dias. Para parcelamentos consulte seu gerente
        </p>
      </div>
    </div>
  );
}
