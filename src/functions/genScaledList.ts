import { ScaledList } from "@/types";
import { sizes } from "@/data/variables";

export function genScaledList(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): ScaledList[] {
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
  return scaledList;
}
