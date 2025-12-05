import { sizes } from "@/data/scaleVars";
import { generateClampEm } from "./genClampEm";

export function scaleSizesAndReturn(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
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

  const fontSizeValuesList = scaledList.map(({ tagName, minSize, maxSize }) => {
    if (tagName === ".normal-p") return `1.00em`;
    else {
      const clamp = generateClampEm(minSize, maxSize);
      return clamp;
    }
  });
  
  console.log(fontSizeValuesList);

  const formattedCSS = scaledList
    .map(({ tagName, minSize, maxSize }) => {
      if (tagName === ".normal-p")
        return `${tagName} {\n  font-size: 1.00em;\n}`;
      else {
        const clamp = generateClampEm(minSize, maxSize);
        return `${tagName} {\n  ${clamp}\n}`;
      }
    })
    .join("\n\n");

  return `${formattedCSS}`;
}
