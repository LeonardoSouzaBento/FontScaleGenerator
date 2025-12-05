import { scales } from "@/data/scaleVars";
import { deduceFontAt1530px } from "@/functions/deduceFontAt1530px";
import { scaleSizesAndReturn } from "@/functions/scaleSizesAndReturn";
import { Button } from "@/ui/button";
import CopyButton from "@/ui/copy-button";
import GenButton from "@/ui/gen-button";
import { Input } from "@/ui/input";
import { WrapperInput } from "@/ui/wrapper-input";
import { useEffect, useState } from "react";

const HierarchyGenerator = ({
  output,
  setOutput,
}: {
  output: string;
  setOutput: (output: string) => void;
}) => {
  const [newMinBase, setnewMinBase] = useState<number | null>(null);
  const [newMaxBase, setnewMaxBase] = useState<number | null>(null);
  const [realMaxBase, setRealMaxBase] = useState<number | null>(null);
  const [scaleValue, setScaleValue] = useState<number>(scales[0].value);
  const [canGenerate, setCanGenerate] = useState<number>(0);

  useEffect(() => {
    if (canGenerate > 0) {
      const minEm = newMinBase / 16;
      const maxEm = realMaxBase / 16;

      const fullCss = scaleSizesAndReturn(minEm, maxEm, scaleValue);
      setOutput(fullCss);
    }
  }, [canGenerate]);

  return (
    <div className={`flex flex-col gap-5.5`}>
      <div className={`py-1 grid grid-cols-2 gap-4`}>
        <WrapperInput htmlFor="minBase" label="em max-width 640px">
          <Input
            type="number"
            id="minBase"
            placeholder="17.5"
            required
            value={newMinBase || ""}
            onChange={(e) => setnewMinBase(Number(e.target.value))}
          />
        </WrapperInput>

        <WrapperInput htmlFor="maxBase" label="em min-width 1280px">
          <Input
            type="number"
            id="maxBase"
            placeholder="18.5"
            required
            value={newMaxBase || ""}
            onChange={(e) => {
              setnewMaxBase(Number(e.target.value));
              setRealMaxBase(
                deduceFontAt1530px(newMinBase, Number(e.target.value))
              );
            }}
          />
        </WrapperInput>
      </div>

      <div className={`flex flex-col gap-3 p-4.5 pb-5 border rounded-md`}>
        <label
          htmlFor="scale"
          className={`font-medium uppercase tracking-wide text-sm 
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
              className={`capitalize`}
              variant={item.value === scaleValue ? "default" : "outline"}
              onClick={() => {
                setScaleValue(item.value);
              }}
            >
              {item.value}
            </Button>
          ))}
        </div>
      </div>

      <GenButton
        title="Gerar"
        newMinBase={newMinBase}
        realMaxBase={realMaxBase}
        setCanGenerate={setCanGenerate}
      />

      <CopyButton output={output} />
    </div>
  );
};

export default HierarchyGenerator;
