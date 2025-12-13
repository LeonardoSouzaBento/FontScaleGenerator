import { CssValues, ScaledList } from "@/data/types";
import { genScaledList } from "./genScaledList";
import { buttonSizes, textClasses, twTextVariables } from "@/data/variables";
import { removeExcessZerosAndToFix } from "./removeExcessZeros";


/* ---------- Funções auxiliares ---------- */
export function genFontSizeScale(font640: number, font1280: number): string {
  const breakpoints: string[] = ["", "sm", "md", "lg", "xl", "2xl"];

  const calcFontSize = (index: number) => {
    // 0, 640, 768, 1024, 1280, 1536
    const proportions: number[] = [0, 0.5, 0.6, 0.8, 1, 1.2];
    const size = proportions[index] * (font1280 - font640) + font640;
    return removeExcessZerosAndToFix(size);
  };

  let result: string = "";

  breakpoints.forEach((item, index) => {
    let size: string;
    size = calcFontSize(index);

    result += `${item ? item + ":" : ""}text-[${size}rem] `;
  });

  return result.trim();
}

const specialRules: Record<string, string> = {
  ".normal-text": `text-[1.00em];`,
  button: `text-[${buttonSizes.normal}];`,
  ".small-button": `text-[${buttonSizes.small}];`,
  ".large-button": `text-[${buttonSizes.large}];`,
};

function buildTailwindCSSTable(scaledList: ScaledList[]): CssValues[] {
  return scaledList.map(({ tagName, minSize, maxSize }) => {
    const rule = specialRules[tagName];
    if (textClasses.includes(tagName)) {
      return {
        tagName,
        value: `text-[${minSize}em];`,
      };
    }
    return {
      tagName,
      value: rule ?? genFontSizeScale(minSize, maxSize),
    };
  });
}

function genTextVariables(scaledList: ScaledList[]): string {
  const variables = twTextVariables
    .map(({ varName, className }) => {
      const values = scaledList.find((item) => item.tagName === className);
      if (varName === "--text-base") {
        return `${varName}: 1.00em;`;
      }
      return `${varName}: ${values?.minSize}em;`;
    })
    .join("\n");

  return `@theme {\n...\n${variables}\n...\n}`;
}

/* ---------- Função principal ---------- */

export function scaleSizesAndReturn(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): string {
  const scaledList = genScaledList(minSizeBody, maxSizeBody, scaleValue);

  const tailwindCSSTable = buildTailwindCSSTable(scaledList);

  const textVariables = genTextVariables(scaledList);

  const layerComponents = `@layer components {\n${tailwindCSSTable
    .map(({ tagName, value }) => {
      return `${tagName} {\n@apply ${value}\n}`;
    })
    .join("\n\n")} \n}`;

  return `${textVariables}\n\n${layerComponents}`;
}
