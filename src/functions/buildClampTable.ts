import { CssValues, ScaledList } from "@/types";

export function generateClamp(
  minFont: number,
  maxFont: number,
  minWidth: number = 640,
  maxWidth: number = 1536
): string {
  const slope = (maxFont - minFont) / (maxWidth - minWidth);
  const yAxisIntersection = minFont - slope * minWidth;

  const preferred = `calc(${yAxisIntersection.toFixed(
    2
  )}px + ${(slope * 100).toFixed(2)}vw)`;

  return `clamp(${minFont.toFixed(2)}px, ${preferred}, ${maxFont.toFixed(2)}px)`;
}

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
