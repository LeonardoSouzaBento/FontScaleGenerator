export function deduceFontAt1530px(
  font640: number,
  font1280: number
): number {
  const minWidth = 640;
  const midWidth = 1280;
  const targetWidth = 1530;

  const slope = (font1280 - font640) / (midWidth - minWidth);
  const font1530 = font640 + slope * (targetWidth - minWidth);

  return Number(font1530.toFixed(2));
}