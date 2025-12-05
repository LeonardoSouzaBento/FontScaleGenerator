import { Button } from "../../ui/button";

const GenButtons = ({
  handleGenerateTailwind,
  handleGenerateStyledComponents,
}: {
  handleGenerateTailwind: () => void;
  handleGenerateStyledComponents: () => void;
}) => {
  function handleClick(type: "tailwind" | "styled-components") {
    if (type === "tailwind") {
      handleGenerateTailwind();
    } else {
      handleGenerateStyledComponents();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className={`flex gap-3`}>
      <Button
        onClick={() => handleClick("tailwind")}
        className={`flex-1 bg-linear-to-r from-primary to-end 
          hover:opacity-90 transition-all duration-200 hover:scale-[1.02]`}
      >
        Gerar para Tailwind
      </Button>
      <Button
        onClick={() => handleClick("styled-components")}
        variant="secondary"
        className={`flex-1 transition-all duration-200 hover:scale-[1.02]`}
      >
        Gerar para Styled Components
      </Button>
    </div>
  );
};

export default GenButtons;
