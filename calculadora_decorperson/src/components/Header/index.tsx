import "./styles.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="nav">
      <div className="nav decp-container">
        <img className="logo" src={logo} alt="" />
        <div className="">
          <NavLink
            to={"/calc"}
                className={({ isActive }) =>
              isActive ? "dsc-menu-item-active" : ""
            }
          >
            Calculadora{" "}
          </NavLink>
          <NavLink
            to={"/fur"}
            className={({ isActive }) =>
              isActive ? "dsc-menu-item-active" : ""
            }
          >
            Projeto{" "}
          </NavLink>


          <NavLink
            to={"/proj"}
            className={({ isActive }) =>
              isActive ? "dsc-menu-item-active" : ""
            }
          >
            histórico{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
