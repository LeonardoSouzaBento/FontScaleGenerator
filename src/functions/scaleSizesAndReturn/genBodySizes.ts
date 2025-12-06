export function genBodySizes(
  minFontSize: number,
  font1280: number,
): string {
  const breakpoints = [
    { prefix: "", width: 0 },
    { prefix: "sm", width: 640 },
    { prefix: "md", width: 768 },
    { prefix: "lg", width: 1024 },
    { prefix: "xl", width: 1280 },
    { prefix: "2xl", width: 1536 },
  ];

  const calcFontSize = (index: number) => {
    const proportions = [0, 0.5, 0.6, 0.8, 1, 1.2];
    const size = proportions[index] * (font1280 - minFontSize) + minFontSize;
    return `${size}`;
  };

  let result = "";

  breakpoints.forEach((item, index) => {
    let size: string;
    size = calcFontSize(index);

    result += ` ${item.prefix ? item.prefix + ":" : ""}text-[${Number(size).toFixed(
      5
    )}rem]`;
  });

  return result.trim();
}