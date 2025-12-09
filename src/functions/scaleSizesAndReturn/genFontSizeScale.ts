export function genFontSizeScale(
  font640: number,
  font1280: number
): string {
  const breakpoints: string[] = ["", "sm", "md", "lg", "xl", "2xl"];

  const calcFontSize = (index: number) => {
    // 0, 640, 768, 1024, 1280, 1536
    const proportions: number[] = [0, 0.5, 0.6, 0.8, 1, 1.2];
    const size = proportions[index] * (font1280 - font640) + font640;
    return `${size}`;
  };

  let result: string = "";

  breakpoints.forEach((item, index) => {
    let size: string;
    size = calcFontSize(index);

    result += `${item ? item + ":" : ""}text-[${Number(size).toFixed(5)}rem] `;
  });

  return result.trim();
}
