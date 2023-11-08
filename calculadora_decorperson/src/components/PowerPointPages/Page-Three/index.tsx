import "./styles.css";
import pageThree from "../../../assets/page-3.png";


export default function PageThree() {
  return (
    <div id="page-three" className="background">
      <div className="info-box-page-two">
        <span className="name-proposta">
          Prezado Eduardo, sua proposta chegou.
        </span>
        <br />

        <div className="mt30">
          <span className="proposta-text">

          </span>
        </div>
      </div>
      <div>
        <img className="background-page-two" src={pageThree} alt="" />
      </div>
    </div>
  );
}
