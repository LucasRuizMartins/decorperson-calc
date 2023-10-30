import { useEffect, useState } from "react";
import "./styles.css";
import homeIcon from "../../assets/home.png";
import metricIcon from "../../assets/medicao.png";
import * as projectService from "../../services/project-service";
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
      <div className="ambient-container">
        <div className="enviroment-card">
          <p className="">Ambientes</p>

          <input
            className="drop-box"
            name="enviroments"
            placeholder="Ambientes"
            type="text"
            value={enviromentValue.enviroments || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="enviroment-card ">
          <p className="">Medição : </p>

          <input
            className="drop-box"
            name="medition"
            placeholder="medição"
            type="text"
            value={enviromentValue.medition || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="enviroment-card">
          <label htmlFor="compValue">Complexidade :</label>
          <select
            className="drop-box"
            id="complexFactor"
            name="complexFactor"
            value={enviromentValue.complexFactor}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <p>{"PREÇO TOTAL : " + totalEnviromentPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="complex-container">
        <label htmlFor="complexValue">Complexidade Mão de obra :</label>

        <select
          className="drop-box"
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
        <label htmlFor="discount"> Desconto :</label>
        <div>
          <select
            className="drop-box"
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
          <p>
            {" "}
            valor da venda:
            <br />
            <div>{totalSalePrice.toFixed(2)}</div>
          </p>
        </div>
      </div>

      <div className="complex-container">
        <label htmlFor="aliquotaValue">
          Aliquota :{" "}
          {projectService.getAliquota(totalProducts, aliquota).toFixed(2)}
        </label>

        <select
          className="drop-box"
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

        <label htmlFor="architectComissionValue">
          {" "}
          Comissão Arquiteto :{" "}
          {projectService
            .getComission(totalProducts, architectComission)
            .toFixed(2)}
        </label>
        <div>
          <select
            className="drop-box"
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

        <label htmlFor="sellerComissionValue">
          {" "}
          Comissão Vendedor/Projetista :{" "}
          {projectService
            .getComission(totalProducts, sellerComission)
            .toFixed(2)}
        </label>
        <div>
          <select
            className="drop-box"
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
        <p>{projectService.getGrossProfit(totalSalePrice,totalProducts,aliquota ,architectComission, sellerComission).toFixed(2)}</p>
      </div>
    </div>
  );
}
//totalSalePrice,totalProducts,aliquota,architectComission,sellerComission