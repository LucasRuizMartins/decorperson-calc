
import "./styles.css"


type Props = {
  nameButton: string;
};

export default function ButtonPrimary({nameButton}: Props) {
  return <div className="decp-btn decp-btn-blue">{nameButton}</div>;
}
