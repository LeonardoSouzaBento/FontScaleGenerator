import { ClampValue } from "@/data/types";

const buttonConfigs = [
  {
    text: "Botão Pequeno",
    sizeKey: ".small-button",
    styles: "h-8 py-0 font-medium",
  },
  { text: "Botão Normal", sizeKey: "button", styles: "h-10 font-semibold" },
  { text: "Botão Grande", sizeKey: ".large-button", styles: "h-12 font-bold" },
];

const css = {
  wrapper: `flex gap-3`,
  button: `bg-primary text-primary-foreground px-5 
  rounded-full max-w-max text-muted-foreground`,
};

const ButtonsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <h4>Botões em escala</h4>
      <div className={css.wrapper}>
        {buttonConfigs.map((config) => (
          <button
            className={`flex items-center ${config.styles} ${css.button} `}
            key={config.sizeKey}
            style={{ fontSize: clampValues[config.sizeKey] }}
          >
            {config.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsSection;
