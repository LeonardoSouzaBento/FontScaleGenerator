import { CssValues, ScaledList } from "@/types";
import { generateClamp } from "./genClamp";

export function buildClampTable(
  scaledList: ScaledList[],
  font1536: number,
): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName, minSize, maxSize }) => {
    if (tagName === ".normal-text") {
      table.push({ tagName, value: "font-size: 1.00em;" });
    } else {
      
      table.push({ tagName, value: generateClamp(minSize, maxSize, font1536) });
    }
  });

  return table;
}
