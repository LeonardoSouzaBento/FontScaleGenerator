import { sizes } from "@/data/variables";
import { CssValues, ScaledList, StateSetter } from "@/types";
import { genFontSizeScale } from "./scaleSizesAndReturn/genFontSizeScale";

function buildCSSTable(
  scaledList: ScaledList[],
): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName, minSize, maxSize }) => {
    if (tagName === "#root") {
      table.push({ tagName, value: "font-size: 1.00rem;" });
    } else if (tagName === ".normal-p") {
      table.push({ tagName, value: "font-size: 1.00em;" });
    } else {
      table.push({ tagName, value: genFontSizeScale(minSize, maxSize) });
    }
  });

  return table;
}

export function scaleSizesAndReturn(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number,
  setScaledList: StateSetter<ScaledList[]>,
): string {
  const scaledList = sizes.map((item) => {
    return {
      ...item,
      minSize: Number(
        (minSizeBody * Math.pow(scaleValue, item.pow)).toFixed(6)
      ),
      maxSize: Number(
        (maxSizeBody * Math.pow(scaleValue, item.pow)).toFixed(6)
      ),
    };
  });
  setScaledList(scaledList);

  const CSSTable = buildCSSTable(scaledList);

  return `@layer components {\n${CSSTable.map(({ tagName, value }) => {
    return `${tagName} {\n@apply ${value}\n}`;
  }).join("\n\n")} \n}`;
}
