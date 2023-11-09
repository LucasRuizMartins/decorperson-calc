
import logoPageOne from "../../../assets/logo-decorperson-rebrand.png";
import rightPgOne from "../../../assets/right-page-one.png";


 

export default function PageOne() {

    const month = "NOV/23";


  return (
    <>
          <div className="left-page-one">
          <div className="info-box-page-one">
            <span className="title-proposta">Proposta</span>
            <span className="month-proposta"> | {month}</span>
            <hr className="info-box-line" />
            <p className="left-text">Decoperson Planejados</p>
            <span className="left-text">Cliente : </span>
            <span className="right-text">Eduardo </span> <br />
            <span className="left-text">Data : </span>
            <span className="right-text"> 06/11/2023 </span> <br />
            <span className="left-text">Endereço : </span>
            <span className="right-text">
              R.da Paz, 1601, CJ1115 - Chácara Santo Antônio
            </span>
            <br />
            <span className="left-text">Contato : </span>
            <span className="right-text">+55 11 98054-3911 </span>
          </div>
          <h3 className="proposta">proposta</h3>
          <img id="logo-pg-one" src={logoPageOne} alt="" />

          <div className="right-page-one">
            <img src={rightPgOne} alt="" />
          </div>
        </div>
    
    </>
  );
}
