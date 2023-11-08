import "./styles.css";
import logoPageOne from "../../assets/logo-decorperson-rebrand.png";
import rightPgOne from "../../assets/right-page-one.png";
import pageTwo from "../../assets/page-2.png";
import PageThree from "../../components/PowerPointPages/Page-Three";

type Props = {
  mes: string;
};

export default function PowerPoint({ mes }: Props) {
  const month = "NOV/23";
  const quantidade = 1;

  return (
    <section className="background">
      <div id="page-one" className="background">
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
      </div>

      <div id="page-two" className="background">
        <div className="info-box-page-two">
          <span className="name-proposta">
            Prezado Eduardo, sua proposta chegou.
          </span>
          <br />

          <div className="mt30">
            <span className="proposta-text">
              Esta proposta contempla todos os materiais e mão de obra
              envolvidos na confecção e instalação dos seus móveis planejados.
            </span>
          </div>
        </div>
        <div>
          <img className="background-page-two" src={pageTwo} alt="" />
        </div>
      </div>

      <div className="background-page-three-container">
        {Array.from({ length: quantidade }, (_, index) => (
          <PageThree key={index} />
        ))}
      </div>
    </section>
  );
}
