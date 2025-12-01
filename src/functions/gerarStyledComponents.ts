export function gerarStyledComponents(
  minBase: number = 16, // base até ~sm
  maxBase: number = 16, // base em XL
  minFontSize: number, // px para telas pequenas
  maxFontSize: number, // px para telas grandes
  measurement: "px" | "em" = "px",
): string {
  const minSizeScaledPx = (minFontSize / minBase) * 16;
  const maxSizeScaledPx = (maxFontSize / maxBase) * 16;

  const minWidth = 375;
  const maxWidth = 1201;

  const breakpoints = [
    { type: "max" as const, max: 375 },
    { type: "range" as const, min: 375, max: 576 },
    { type: "range" as const, min: 577, max: 768 },
    { type: "range" as const, min: 769, max: 992 },
    { type: "range" as const, min: 993, max: 1200 },
    { type: "min" as const, min: 1201 },
  ];

  const formatSize = (value: number): string => {
    let processedValue = value;
    const unit = measurement === "em" ? "em" : "px";

    if (measurement === "em") {
      processedValue = value / 16;
    }

    const fixed = processedValue.toFixed(6);
    const [int, dec] = fixed.split(".");

    let trimmedDec = dec.replace(/0+$/, (zeros) => {
      return zeros.length > 2 ? zeros.slice(0, 2) : zeros;
    });

    if (trimmedDec === "" || trimmedDec === "00") {
      return `${int}${unit}`;
    }

    return `${int}.${trimmedDec}${unit}`;
  };

  const calcFontSize = (width: number): string => {
    const sizePx =
      minSizeScaledPx +
      (maxSizeScaledPx - minSizeScaledPx) * ((width - minWidth) / (maxWidth - minWidth));

    const clampedPx = Math.max(Math.min(sizePx, maxSizeScaledPx), minSizeScaledPx);

    return formatSize(clampedPx);
  };

  let result = "";

  breakpoints.forEach((bp) => {
    if (bp.type === "max" && bp.max) {
      result += `@media screen and (max-width: ${
        bp.max
      }px) {\n  font-size: ${calcFontSize(bp.max)};\n}\n`;
    } else if (bp.type === "range" && bp.min && bp.max) {
      const mid = Math.round((bp.min + bp.max) / 2);
      result += `@media screen and (min-width: ${bp.min}px) and (max-width: ${
        bp.max
      }px) {\n  font-size: ${calcFontSize(mid)};\n}\n`;
    } else if (bp.type === "min" && bp.min) {
      result += `@media screen and (min-width: ${
        bp.min
      }px) {\n  font-size: ${calcFontSize(bp.min)};\n}\n`;
    }
  });

  return result.trim();
}