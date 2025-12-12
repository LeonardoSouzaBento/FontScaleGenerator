import { CssValues, ScaledList } from "@/types";
import { genScaledList } from "./genScaledList";
import { buttonSizes, textClasses } from "@/data/variables";

function scaleSizesForPureCSS(font640: number, font1280: number): string {
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
    const size = proportions[index] * (font1280 - font640) + font640;

    if (index === 0) {
      result += `font-size: ${size.toFixed(5)}rem;\n`;
    } else {
      result += `@media (min-width: ${bp.min}px) {font-size: ${size.toFixed(5)}rem;}\n`;
    }
  });

  return result.trim();
}

const specialRules = {
  ".normal-text": "font-size: 1.00em;",
  button: `font-size: ${buttonSizes.normal};`,
  ".small-button": `font-size: ${buttonSizes.small};`,
  ".large-button": `font-size: ${buttonSizes.large};`,
};

function buildCSSPureTable(scaledList: ScaledList[]): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName, minSize, maxSize }) => {
    const rule = specialRules[tagName];
    if (textClasses.includes(tagName)) {
      table.push({
        tagName,
        value: `font-size: ${minSize.toFixed(6)}em;`,
      });
    } else {
      table.push({
        tagName,
        value: rule ?? scaleSizesForPureCSS(minSize, maxSize),
      });
    }
  });

  return table;
}

export function scaleSizesAndReturnCSS(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): string {
  const scaledList = genScaledList(minSizeBody, maxSizeBody, scaleValue);

  const cssTable = buildCSSPureTable(scaledList);

  return cssTable
    .map(({ tagName, value }) => `${tagName} {${value}}`)
    .join("\n\n");
}
