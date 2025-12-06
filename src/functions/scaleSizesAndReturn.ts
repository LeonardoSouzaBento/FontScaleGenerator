import { sizes } from "@/data/scaleVars";
import { CssValues, ScaledList, StateSetter } from "@/types";
import { generateClamp } from "./scaleSizesAndReturn/genClamp";
import { genBodySizes } from "./scaleSizesAndReturn/genBodySizes";

function buildClampTable(
  scaledList: ScaledList[],
  minSizeBody: number,
  font1280: number
): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName, minSize, maxSize }) => {
    if (tagName === "body") {
      const css = genBodySizes(minSizeBody, font1280);
      table.push({ tagName, value: css });
    } else if (tagName === ".normal-p") {
      table.push({ tagName, value: "font-size: 1.00em;" });
    } else {
      table.push({ tagName, value: generateClamp(minSize, maxSize) });
    }
  });

  return table;
}

function formatCSS(
  scaledList: ScaledList[],
  minSizeBody: number,
  font1280: number
): string {
  return scaledList
    .map(({ tagName, minSize, maxSize }) => {
      if (tagName === "body") {
        const css = genBodySizes(minSizeBody, font1280);
        return `${tagName} {\n  @apply ${css};\n}`;
      }

      if (tagName === ".normal-p") {
        return `${tagName} {\n  font-size: 1.00em;\n}`;
      }

      const clamp = generateClamp(minSize, maxSize);
      return `${tagName} {\n  ${clamp}\n}`;
    })
    .join("\n\n");
}

export function scaleSizesAndReturn(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number,
  font1280: number,
  setCssValues: StateSetter<CssValues[]>
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

  const clampTable = buildClampTable(scaledList, minSizeBody, font1280);
  const formattedCSS = formatCSS(scaledList, minSizeBody, font1280);

  setCssValues(clampTable);

  return formattedCSS;
}
