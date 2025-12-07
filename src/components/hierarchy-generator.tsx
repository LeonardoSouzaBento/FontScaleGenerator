import { scales } from "@/data/scaleVars";
import { scaleSizesAndReturn } from "@/functions/scaleSizesAndReturn";
import { CssValues, StateSetter } from "@/types";
import GenButton from "@/ui/gen-button";
import { useEffect, useState } from "react";
import Inputs from "./hierarchy-generator/inputs";
import OptionsScale from "./hierarchy-generator/optionsScale";

interface Props {
  setCssValues: StateSetter<CssValues[]>;
  setOutput: StateSetter<string>;
  setSecondOutput: StateSetter<string>;
  cssValues: CssValues[];
}

const HierarchyGenerator = ({
  cssValues,
  setCssValues,
  setOutput,
  setSecondOutput,
}: Props) => {
  const [newMinBase, setnewMinBase] = useState<number | null>(null);
  const [newMaxBase, setnewMaxBase] = useState<number | null>(null);
  const [realMaxBase, setRealMaxBase] = useState<number | null>(null);
  const [scaleValue, setScaleValue] = useState<number>(scales[0].value);
  const [canGenerate, setCanGenerate] = useState<number>(0);

  useEffect(() => {
    if (canGenerate > 0) {
      const minEm = newMinBase / 16;
      const maxEm = realMaxBase / 16;
      const font1280 = newMaxBase / 16;
      const fullCss = scaleSizesAndReturn(
        minEm,
        maxEm,
        scaleValue,
        font1280,
        setCssValues
      );

      setOutput(fullCss);
    }
  }, [canGenerate]);

  useEffect(() => {
    if (canGenerate > 0) {
      const inclusions = [".big-p", ".normal-p", ".small-p", ".smaller-p"];
      const variables = ["--text-lg", "--text-base", "--text-sm", "--text-xs"];

      const values = cssValues
        .filter((item) => inclusions.includes(item.tagName))
        .map((item) => item.value.replace("font-size:", "").trim());

      const secondOutput = values.map((value, index) => {
        return `${variables[index]}: ${value}`;
      });

      setSecondOutput(secondOutput.join("\n\n"));
    }
  }, [cssValues]);

  return (
    <div className={`flex flex-col gap-5`}>
      <Inputs
        newMinBase={newMinBase}
        setnewMinBase={setnewMinBase}
        newMaxBase={newMaxBase}
        setnewMaxBase={setnewMaxBase}
        setRealMaxBase={setRealMaxBase}
      />

      <OptionsScale scaleValue={scaleValue} setScaleValue={setScaleValue} />

      <GenButton
        title="Gerar CSS"
        newMinBase={newMinBase}
        realMaxBase={realMaxBase}
        setCanGenerate={setCanGenerate}
      />
    </div>
  );
};

export default HierarchyGenerator;
