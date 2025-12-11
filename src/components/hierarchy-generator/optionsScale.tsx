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
      className={`flex flex-col gap-3 pt-3 pb-5 border-t 
    border-b border-input rounded-none`}
    >
      <label
        htmlFor="scale"
        className={` tracking-wide 
            text-card-foreground`}
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
            className={`min-w-20 rounded-full ${
              item.value !== scaleValue
                ? "bg-white"
                : "ring ring-accent text-primary shadow-sm"
            }`}
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
