
import { sizes } from "@/data/variables";
import { StateSetter, ScaledList, CssValues } from "@/types";

function scaleSizesForPureCSS(
  font640: number,
  font1280: number
): string {
  const breakpoints = [
    { prefix: "", min: 0 },
    { prefix: "sm", min: 640 },
    { prefix: "md", min: 768 },
    { prefix: "lg", min: 1024 },
    { prefix: "xl", min: 1280 },
    { prefix: "2xl", min: 1536 },
  ];

  const proportions = [0, 0.5, 0.6, 0.8, 1, 1.2];

  let result = "";

  breakpoints.forEach((bp, index) => {
    const size =
      proportions[index] * (font1280 - font640) + font640;

    if (index === 0) {
      result += `font-size: ${size.toFixed(5)}rem;\n`;
    } else {
      result += `@media (min-width: ${bp.min}px) {\n  font-size: ${size.toFixed(5)}rem;\n}\n`;
    }
  });

  return result.trim();
}

function buildCSSPureTable(scaledList: ScaledList[]): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName, minSize, maxSize }) => {
    if (tagName === ".normal-p") {
      table.push({ tagName, value: "font-size: 1em;" });
    } else {
      table.push({
        tagName,
        value: scaleSizesForPureCSS(minSize, maxSize),
      });
    }
  });

  return table;
}

export function scaleSizesAndReturnCSS(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number,
): string {
  const scaledList = sizes.map((item) => ({
    ...item,
    minSize: Number((minSizeBody * Math.pow(scaleValue, item.pow)).toFixed(6)),
    maxSize: Number((maxSizeBody * Math.pow(scaleValue, item.pow)).toFixed(6)),
  }));

  const cssTable = buildCSSPureTable(scaledList);

  return cssTable
    .map(
      ({ tagName, value }) =>
        `${tagName} {\n${value}\n}`
    )
    .join("\n\n");
}