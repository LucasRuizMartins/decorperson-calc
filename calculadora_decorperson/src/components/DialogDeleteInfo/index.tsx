import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../models/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

//        onClick={(event) => event.stopPropagation()} é para não fechar a janela ao clicar na area branca

export default function DialogDeleteInfo() {
  const navigate = useNavigate();
  const params = useParams();

  const [prod, setProd] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      setProd(response.data);
    });

  }, []);

  function handleDeleteClick() {
    const result = confirm(
      `Você tem certeza que deseja excluir permanentemente o ${prod?.name}?`
    );
    if (result) {
      productService.deleteById(Number(params.productId));
      navigate("/calc");
    } else {
      navigate("/calc");
    }
  }

  function handleCancelClick(){navigate("/calc")}


  return (
    <div className="decp-dialog-background delete-bg">
      <div
        className="decp-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2> Deseja deletar o produto ? </h2>
        <div className="delete-dialog-info">
          <img className="product_img" src={prod?.imgUrl}></img>
          <p>{prod?.name}</p>
          <p>{`R$ ${prod?.price} `}</p>
        </div>

        <div className="decp-dialog-btn">
          <div onClick={handleDeleteClick}>
            <ButtonPrimary nameButton={"SIM"} />
          </div>

          <div onClick={handleCancelClick}>
            <ButtonInverse nameButton={"CANCELAR"} />
          </div>
        </div>
      </div>
    </div>
  );
}
