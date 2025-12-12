import { Button } from "@/ui/button";
import { scales } from "@/data/variables";
import { StateSetter } from "@/types";

interface OptionsScaleProps {
  scaleValue: number;
  setScaleValue: StateSetter<number>;
  setCanGenerate: StateSetter<number>;
}

const OptionsScale = ({
  scaleValue,
  setScaleValue,
  setCanGenerate,
}: OptionsScaleProps) => {
  return (
    <div
      className={`flex flex-col gap-3 rounded-none border-b 
        border-input sm:border-b-0 pb-4.5 sm:pb-0`}
    >
      <label
        htmlFor="scale"
        className={` tracking-wide 
            text-muted-foreground`}
      >
        Escala tipográfica
      </label>
      <div
        className={`flex flex-wrap gap-3 rounded-md 
           text-foreground`}
      >
        {scales.map((item) => (
          <Button
            key={item.value}
            variant="outline"
            size="sm"
            optionButton
            isSelected={item.value === scaleValue}
            className={`min-w-18`}
            onClick={() => {
              setScaleValue(item.value);
              setCanGenerate((prev) => prev + 1);
            }}
          >
            {item.value}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default OptionsScale;
