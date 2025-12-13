import { ScaledList } from "@/types";
import { sizes } from "@/data/variables";
import { removeExcessZerosAndToFix } from "./removeExcessZeros";

export function genScaledList(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): ScaledList[] {
  const scaledList = sizes.map((item) => {
    return {
      ...item,
      minSize: Number(removeExcessZerosAndToFix(
        minSizeBody * Math.pow(scaleValue, item.pow)
      )),
      maxSize: Number(removeExcessZerosAndToFix(
        maxSizeBody * Math.pow(scaleValue, item.pow)
      )),
    };
  });
  return scaledList;
}
