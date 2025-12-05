import { sizes } from "@/data/scaleVars";
import { generateClampEm } from "./genClampEm";

export function scaleSizesAndReturn(
  minSize: number,
  maxSize: number,
  scaleValue: number
): string {
//   console.log(minSize, maxSize, scaleValue);

  const scaledList = sizes.map((item) => {
    return {
      ...item,
      minValue: Number((minSize * Math.pow(scaleValue, item.pow)).toFixed(6)),
      maxValue: Number((maxSize * Math.pow(scaleValue, item.pow)).toFixed(6)),
    };
  });

  const bodyClamp = generateClampEm(minSize, maxSize, true);
  const itemsCss = scaledList
    .map(({ name, minValue, maxValue }) => {
      const clamp = generateClampEm(minValue, maxValue);
      return `${name} {\n  ${clamp}\n}`;
    })
    .join("\n\n");

  return `body {\n  ${bodyClamp};\n}\n\n${itemsCss}`;
}
