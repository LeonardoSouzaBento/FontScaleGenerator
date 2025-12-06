import { scales } from "@/data/scaleVars";
import { scaleSizesAndReturn } from "@/functions/scaleSizesAndReturn";
import { CssValues, StateSetter } from "@/types";
import GenButton from "@/ui/gen-button";
import { useEffect, useState } from "react";
import Inputs from "./hierarchy-generator/inputs";
import OptionsScale from "./hierarchy-generator/optionsScale";

const HierarchyGenerator = ({
  setCssValues,
  setOutput,
}: {
  setCssValues: StateSetter<CssValues[]>;
  setOutput: StateSetter<string>;
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

  return (
    <div className={`flex flex-col gap-5.5`}>
      <Inputs
        newMinBase={newMinBase}
        setnewMinBase={setnewMinBase}
        newMaxBase={newMaxBase}
        setnewMaxBase={setnewMaxBase}
        setRealMaxBase={setRealMaxBase}
      />

      <OptionsScale scaleValue={scaleValue} setScaleValue={setScaleValue} />

      <GenButton
        title="Gerar"
        newMinBase={newMinBase}
        realMaxBase={realMaxBase}
        setCanGenerate={setCanGenerate}
      />
    </div>
  );
};

export default HierarchyGenerator;
