import { sizes } from "@/data/variables";
import { CssValues, ScaledList, StateSetter } from "@/types";

/* ---------- Funções auxiliares ---------- */
export function genFontSizeScale(
  font640: number,
  font1280: number
): string {
  const breakpoints: string[] = ["", "sm", "md", "lg", "xl", "2xl"];

  const calcFontSize = (index: number) => {
    // 0, 640, 768, 1024, 1280, 1536
    const proportions: number[] = [0, 0.5, 0.6, 0.8, 1, 1.2];
    const size = proportions[index] * (font1280 - font640) + font640;
    return `${size}`;
  };

  let result: string = "";

  breakpoints.forEach((item, index) => {
    let size: string;
    size = calcFontSize(index);

    result += `${item ? item + ":" : ""}text-[${Number(size).toFixed(5)}rem] `;
  });

  return result.trim();
}

function buildTailwindCSSTable(
  scaledList: ScaledList[],
): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName, minSize, maxSize }) => {
    if (tagName === ".normal-p") {
      table.push({ tagName, value: "font-size: 1.00em;" });
    } else {
      table.push({ tagName, value: genFontSizeScale(minSize, maxSize) });
    }
  });

  return table;
}

/* ---------- Função principal ---------- */

export function scaleSizesAndReturn(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number,
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

  const tailwindCSSTable = buildTailwindCSSTable(scaledList);

  return `@layer components {\n${tailwindCSSTable.map(({ tagName, value }) => {
    return `${tagName} {\n@apply ${value}\n}`;
  }).join("\n\n")} \n}`;
}
