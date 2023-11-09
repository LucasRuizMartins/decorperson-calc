import "./styles.css";
import pageThree from "../../../assets/page-3.png";
import { ProjectDTO, ProjectItemDTO } from "../../../models/project";
import {useContext, useState } from "react";
import * as projService from "../../../services/furniture-service"
import { ContextCalcValue } from "../../../services/context-calc";
 
type Props = { 
  totalSale :number
}


const nomeProjeto = "Eduardo Gibi Esporte Educação";

export default function PageThree({totalSale} : Props) {


  const [proj, setProj] = useState<ProjectDTO>(projService.getProj());
  
  const {contextCalcValue, setContextCalcValue } = useContext(ContextCalcValue);



  return (
    <div id="page-three" className="background">
      <div className="info-box-page-three">
        <span className="budget-title">Orçamento - {nomeProjeto}</span>
        <br />
     
        {proj.items.map((item) => (
          <div key={item.furnitureId} className="">
            <p className="furniture-title">{item.name}</p>
            <p className="furniture-info-pg-3">Comprimento : {item.length} mm</p>
            <p className="furniture-info-pg-3">Altura : {item.height} mm</p>
            <p className="furniture-info-pg-3">Profundidade : {item.width} mm</p>
            <p className="furniture-info-pg-3">VALOR TOTAL :      {contextCalcValue}</p>
          </div>
        ))}

      </div>
      <div>
        <img className="background-page-three" src={pageThree} alt="" />
      </div>


      <div></div>
    </div>
  );
}
