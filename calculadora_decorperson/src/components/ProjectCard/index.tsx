import { useContext, useEffect, useState } from "react";
import "./styles.css";
import * as projectService from "../../services/project-service";
import { ContextCalcValue } from "../../services/context-calc";

type Props = {
  totalProducts: number;
};

type enviromentValue = {
  enviroments: number;
  medition: number;
  complexFactor: number;
};

export default function ProjectCard({ totalProducts }: Props) {

  const [totalEnviromentPrice, setTotalEnvirmentoPrice] = useState(0);
  const [factorComplexWork, setFactorComplexWork] = useState(2.5);
  const [discount, setDiscount] = useState(0);
  const [aliquota, setAliquota] = useState(0);
  const [architectComission, setArchitectComission] = useState(0);
  const [sellerComission, setSellerComission] = useState(0);

  const {contextCalcValue, setContextCalcValue } = useContext(ContextCalcValue);


  const [enviromentValue, setEnvironmentsValue] = useState<enviromentValue>({
    enviroments: 1,
    medition: 1,
    complexFactor: 1,
  });

  useEffect(() => {
   
    const enviromentsQtd = enviromentValue.enviroments * 150.0;
    const complexF = enviromentValue.complexFactor;
    const medition = enviromentValue.medition * 70.0;
    setTotalEnvirmentoPrice(enviromentsQtd * Number(complexF) + medition); 
    setContextCalcValue(totalSalePrice)
  }, [enviromentValue]);
  
 
  

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setEnvironmentsValue({ ...enviromentValue, [name]: value });
  }

  function handleInputTaxChange(event: any) {
    setFactorComplexWork(event.target.value);
  }

  function handleInputDiscountChange(event: any) {
    setDiscount(event.target.value);
  }

  function handleInputAliquotaChange(event: any) {
    setAliquota(event.target.value);
  }

  function handleInputArchitectChange(event: any) {
    setArchitectComission(event.target.value);
  }

  function handleInputSellerChange(event: any) {
    setSellerComission(event.target.value);
  }

  const totalSalePrice = projectService.getTotalSalePrice(
    totalProducts,
    Number(factorComplexWork),
    Number(discount)
   
  );
  return (
    <div className="project-area">
      <div>
        <div className="dflex">
          <div>
            <span className="">Ambientes : {contextCalcValue} </span>
          </div>
          <div>
            <input
              className="input-info"
              name="enviroments"
              placeholder="Ambientes"
              type="text"
              value={enviromentValue.enviroments || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="dflex">
          <div>
            {" "}
            <span className="">Medição : </span>
          </div>
          <div>
            {" "}
            <input
              className="input-info"
              name="medition"
              placeholder="medição"
              type="text"
              value={enviromentValue.medition || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="dflex">
          <div>
            <label htmlFor="compValue">Complexidade :</label>
          </div>
          <div>
            <select
              className="input-info"
              id="complexFactor"
              name="complexFactor"
              value={enviromentValue.complexFactor}
              onChange={handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="dflex">
          <div>
            {" "}
            <label htmlFor="complexValue">Complexidade da Mão de obra :</label>
          </div>
          <div>
            {" "}
            <select
              className="input-info"
              id="factorComplexWork"
              name="factorComplexWork"
              value={factorComplexWork}
              onChange={handleInputTaxChange}
            >
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="dflex">
          <div>
            <label htmlFor="discount"> Desconto :</label>
          </div>
          <div>
            <select
              className="input-info"
              id="discount"
              name="discount"
              value={discount}
              onChange={handleInputDiscountChange}
            >
              <option value="0">0%</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
            </select>
          </div>
        </div>

        <div className="dflex">
          <div>
            {" "}
            <span>Aliquota : </span>
          </div>
          <div>
            <select
              className="input-info"
              id="aliquota"
              name="aliquota"
              value={aliquota}
              onChange={handleInputAliquotaChange}
            >
              <option value="0">0%</option>
              <option value="7">7%</option>
              <option value="15">15%</option>
              <option value="22.5">22.5%</option>
              <option value="27.5">27.5%</option>
            </select>
          </div>
        </div>

        <div className="dflex">
          <div>
            <span>Comissão do Arquiteto :</span>
          </div>
          <div>
            <select
              className="input-info"
              id="architectComission"
              name="architectComission"
              value={architectComission}
              onChange={handleInputArchitectChange}
            >
              <option value="0">0%</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
            </select>
          </div>
        </div>

        <div className="dflex">
          <div>
            <span>Comissão do Vendedor :</span>
          </div>
          <div>
            <select
              className="input-info"
              id="sellerComission"
              name="sellerComission"
              value={sellerComission}
              onChange={handleInputSellerChange}
            >
              <option value="1">1%</option>
              <option value="2">2%</option>
              <option value="3">3%</option>
            </select>
          </div>
        </div>
      </div>

      <div className="values-container">
        <p id="enviroment-total-price" className="info-label">
          {`Valor dos ambientes  R$ : `}
          {` ${totalEnviromentPrice.toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})} `}
        </p>

        <span id="complex-total-price" className="info-label">
          Valor da venda - R$ : {totalSalePrice.toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})}
        </span>

        <p id="gross-profit-value" className="info-label">
          {"Lucro Bruto  R$ : "}
          {projectService
            .getGrossProfit(
              totalSalePrice,
              totalProducts,
              aliquota,
              architectComission,
              sellerComission
            )
            .toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})}
        </p>
        <span className="info-label red-value">
          {` Total em materia Prima  R$ : ${totalProducts.toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})}`}
        </span>

        <label htmlFor="aliquotaValue" className="info-label red-value">
          {"  Aliquota  R$ : "}
          {projectService.getAliquota(totalProducts, aliquota).toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})}
        </label>

        <label
          htmlFor="architectComissionValue"
          className="info-label red-value"
        >
          {"Comissão Arquiteto  R$ : "}
          {projectService
            .getComission(totalProducts, architectComission)
            .toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})}
        </label>

        <label htmlFor="sellerComissionValue" className="info-label red-value">
          {"  Comissão Vendedor/Projetista  R$ : "}
          {projectService
            .getComission(totalProducts, sellerComission)
            .toLocaleString('pt-BR',{style:'currency',currency: 'BRL', minimumFractionDigits: 2})}
        </label>
      </div>
    </div>
  );
}
