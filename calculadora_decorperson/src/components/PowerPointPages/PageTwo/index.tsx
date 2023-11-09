import pageTwo from'../../../assets/page-2.png'


export default function PageTwo() {
  return (
    <>
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
    
    </>
  );
}
