export function generateClampEm(
  minFont: number,
  maxFont: number,
  toBody: boolean = false,
  minWidth: number = 640,
  maxWidth: number = 1280,
): string {
  const slope = (maxFont - minFont) / (maxWidth - minWidth);
  const yAxisIntersection = minFont - slope * minWidth;
  const measure = toBody ? "rem" : "em";

  const slopeVw = slope * 100;
  const preferred = `calc(${yAxisIntersection.toFixed(6)}${measure} + ${slopeVw.toFixed(6)}vw)`;

  return `font-size: clamp(${minFont.toFixed(6)}${measure}, ${preferred}, ${maxFont.toFixed(6)}${measure});`;
}