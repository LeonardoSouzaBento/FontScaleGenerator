import { ClampValue } from "@/types";

const ButtonsSection = ({clampValues}: {clampValues: ClampValue}) => {
  return (
    <>
      <h4>Botões em escala</h4>
      <button className="btn-lg">Botão Grande</button>
      <button className="btn-md">Botão Médio</button>
      <button className="btn-sm">Botão Pequeno</button>
    </>
  );
};

export default ButtonsSection;
