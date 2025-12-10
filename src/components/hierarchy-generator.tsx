import { scales } from "@/data/variables";
import { scaleSizesAndReturn } from "@/functions/scaleSizesAndReturn";
import { ClampValue, CssValues, ScaledList, StateSetter } from "@/types";
import GenButton from "@/ui/gen-button";
import { useEffect, useState } from "react";
import Inputs from "./hierarchy-generator/inputs";
import OptionsScale from "./hierarchy-generator/optionsScale";
import { generateClamp } from "@/functions/scaleSizesAndReturn/genClamp";

interface Props {
  setOutput: StateSetter<string>;
  setClampValues: StateSetter<ClampValue>;
  disabled: boolean;
  setDisabled: StateSetter<boolean>;
}

function deduceFontAt1536px(font640: number, font1280: number): number {
  const font1536 = 1.2 * (font1280 - font640) + font640;

  return Number(font1536.toFixed(2));
}

const HierarchyGenerator = ({
  setOutput,
  setClampValues,
  disabled,
  setDisabled,
}: Props) => {
  const [newMinBase, setnewMinBase] = useState<number | null>(null);
  const [newMaxBase, setnewMaxBase] = useState<number | null>(null);
  const [scaleValue, setScaleValue] = useState<number>(scales[0].value);
  const [canGenerate, setCanGenerate] = useState<number>(0);
  const [scaledList, setScaledList] = useState<ScaledList[]>([]);

  useEffect(() => {
    if (canGenerate > 0) {
      const minEm = newMinBase / 16;
      const maxEm = newMaxBase / 16;

      const fullCss = scaleSizesAndReturn(
        minEm,
        maxEm,
        scaleValue,
        setScaledList
      );
      setOutput(fullCss);
    }
  }, [canGenerate]);

  /* Gerar tabela de clamps em px*/
  useEffect(() => {
    const valuesInPx = scaledList.map((item) => {
      return {
        tagName: item.tagName,
        minSize: item.minSize * 16,
        maxSize: deduceFontAt1536px(item.minSize, item.maxSize) * 16,
      };
    });
    const clampTable = valuesInPx.reduce((acc, item) => {
      acc[item.tagName] = generateClamp(item.minSize, item.maxSize);
      return acc;
    }, {} as ClampValue);

    setClampValues(clampTable);
  }, [scaledList]);

  useEffect(() => {
    setDisabled(
      !newMinBase || !newMaxBase || newMinBase.toString().length < 2 || newMaxBase.toString().length < 2
    );
  }, [newMinBase, newMaxBase]);

  return (
    <div className={`flex flex-col gap-5`}>
      <Inputs
        newMinBase={newMinBase}
        setnewMinBase={setnewMinBase}
        newMaxBase={newMaxBase}
        setnewMaxBase={setnewMaxBase}
        setCanGenerate={setCanGenerate}
      />

      <OptionsScale scaleValue={scaleValue} setScaleValue={setScaleValue} />

      <GenButton
        title="Gerar CSS"
        setCanGenerate={setCanGenerate}
        disabled={disabled}
      />
    </div>
  );
};

export default HierarchyGenerator;
