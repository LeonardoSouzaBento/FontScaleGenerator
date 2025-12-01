export function gerarTailwind(
  minBase: number = 16, // base até 640px
  maxBase: number = 16, // base em XL
  minFontSize: number, // px para telas pequenas
  maxFontSize: number, // px para XL
  measurement: "px" | "em" = "px"
): string {
  const breakpoints = [
    { prefix: "", width: 375 },
    { prefix: "sm", width: 640 },
    { prefix: "md", width: 768 },
    { prefix: "lg", width: 1024 },
    { prefix: "xl", width: 1280 },
    { prefix: "2xl", width: 1536 },
  ];

  const firstWidth = breakpoints[0].width; // 375
  const lastWidth = breakpoints[4].width; // 1280 (xl)
  const maxWidth = breakpoints[5].width; // 1536 (2xl)

  // Determine the base values for interpolation based on the desired measurement
  const baseMinSize =
    measurement === "em" ? minFontSize / minBase : minFontSize;
  const baseMaxSize =
    measurement === "em" ? maxFontSize / maxBase : maxFontSize;

  const formatSize = (value: number): string => {
    // sempre gerar 6 casas para ter padrão
    const fixed = value.toFixed(6);

    // separa parte inteira e decimal
    const [int, dec] = fixed.split(".");

    // REGRA:
    // remover zeros finais enquanto houver mais que 2 zeros seguidos
    let trimmed = dec.replace(/0+$/, (zeros) => {
      return zeros.length > 2 ? zeros.slice(0, 2) : zeros;
    });

    return `${int}.${trimmed}`;
  };

  // Calculates size for an intermediate breakpoint
  const calcInterpolatedSize = (width: number): string => {
    const size =
      baseMinSize +
      (baseMaxSize - baseMinSize) *
        ((width - firstWidth) / (lastWidth - firstWidth));
    return formatSize(size);
  };

  // Projection for 2xl (continues the same linear growth)
  const calc2xlSize = (): string => {
    const growthPerPx = (baseMaxSize - baseMinSize) / (lastWidth - firstWidth);
    const extra = (maxWidth - lastWidth) * growthPerPx;
    return formatSize(baseMaxSize + extra);
  };

  let result = "";

  breakpoints.forEach((bp) => {
    let size: string;

    if (bp.prefix === "") {
      size = formatSize(baseMinSize);
    } else if (bp.prefix === "xl") {
      size = formatSize(baseMaxSize);
    } else if (bp.prefix === "2xl") {
      size = calc2xlSize();
    } else {
      size = calcInterpolatedSize(bp.width);
    }

    result += ` ${
      bp.prefix ? bp.prefix + ":" : ""
    }text-[${size}${measurement}]`;
  });

  return result.trim();
}
