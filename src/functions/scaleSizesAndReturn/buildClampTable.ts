import { CssValues, ScaledList } from "@/types";
import { genBodySizes } from "./genBodySizes";
import { generateClamp } from "./genClamp";

export function buildClampTable(
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