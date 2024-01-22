import "./styles.css"


type Props = {
  nameButton: string;
};

export default function ButtonInverse({ nameButton }: Props) {
  return <div className="decp-btn decp-btn-white">{nameButton}</div>;
}
