import { Button } from "@/ui/button";
import { scales } from "@/data/scaleVars";

const OptionsScale = ({
  scaleValue,
  setScaleValue,
}: {
  scaleValue: number;
  setScaleValue: (value: number) => void;
}) => {
  return (
    <div
      className={`flex flex-col gap-3 pt-2.5 pb-5 border-t 
    border-b border-input rounded-none`}
    >
      <label
        htmlFor="scale"
        className={` tracking-wide 
            text-muted-foreground`}
      >
        Escala tipográfica
      </label>
      <div
        className={`flex flex-wrap gap-4 rounded-md 
           text-foreground`}
      >
        {scales.map((item) => (
          <Button
            key={item.value}
            variant="outline"
            className={`capitalize h-[38px] min-w-20 ${
              item.value !== scaleValue ? "bg-white" : "ring ring-blue-300 shadow-sm"
            }`}
            onClick={() => {
              setScaleValue(item.value);
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
