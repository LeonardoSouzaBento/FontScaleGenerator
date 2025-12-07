export function generateClamp(
  minFont: number,
  maxFont: number,
  minWidth: number = 640,
  maxWidth: number = 1536
): string {
  const slope = (maxFont - minFont) / (maxWidth - minWidth);
  const yAxisIntersection = minFont - slope * minWidth;

  const preferred = `calc(${yAxisIntersection.toFixed(
    6
  )}rem + ${(slope * 100).toFixed(6)}vw)`;

  return `font-size: clamp(${minFont.toFixed(
    6
  )}rem, ${preferred}, ${maxFont.toFixed(6)}rem);`;
}
