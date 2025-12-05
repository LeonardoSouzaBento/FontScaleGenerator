import { StateSetter } from "@/types";
import { useState } from "react";
import { Button } from "./button";

interface GenButtonProps {
  title: string;
  newMinBase: number;
  realMaxBase: number;
  setCanGenerate: StateSetter<number>;
}

const GenButton = ({
  title,
  newMinBase,
  realMaxBase,
  setCanGenerate,
}: GenButtonProps) => {
  const [warn, setWarn] = useState<string>("");

  const minEm = newMinBase / 16;
  const maxEm = realMaxBase / newMinBase;

  const handleClick = () => {
    if (!newMinBase || !realMaxBase) {
      setWarn("Valores ausentes!");
      setTimeout(() => setWarn(""), 2200);
      return;
    }
    setCanGenerate(prev => prev + 1);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className={`w-full min-h-10 flex-1 bg-linear-to-r from-primary to-end
            hover:opacity-90 transition-all duration-200 hover:scale-[1.02]
            tracking-normal uppercase ${
              !newMinBase || !realMaxBase
                ? "opacity-66 grayscale-100 cursor-not-allowed"
                : ""
            }`}
      >
        {title}
      </Button>

      {warn && <p className={`w-full mb-0 text-center text-destructive mt-2`}>{warn}</p>}
    </div>
  );
};

export default GenButton;
