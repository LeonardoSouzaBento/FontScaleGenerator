export function gerarTailwind(
  minFontSize: number, // px para telas pequenas
  maxFontSize: number, // px para XL
  minBase: number = 17.5, // base até 640px
  maxBase: number = 18.5 // base em XL
): string {
  const breakpoints = [
    { prefix: "", width: 375 },
    { prefix: "sm", width: 640 },
    { prefix: "md", width: 768 },
    { prefix: "lg", width: 1024 },
    { prefix: "xl", width: 1280 },
    { prefix: "2xl", width: 1536 },
  ];

  // conversão para em usando as bases definidas
  const minSizeEm = minFontSize / minBase;
  const maxSizeEm = maxFontSize / maxBase;

  // para interpolar linearmente, trabalhamos em EM
  const firstWidth = breakpoints[0].width; // 375
  const lastWidth = breakpoints[4].width; // 1280 (xl)
  const maxWidth = breakpoints[5].width; // 1536 (2xl)

  const calcEm = (value: number) => value.toFixed(5);

  // calcula tamanho para um breakpoint intermediário
  const calcFontSize = (width: number): string => {
    const size =
      minSizeEm +
      (maxSizeEm - minSizeEm) *
        ((width - firstWidth) / (lastWidth - firstWidth));

    return calcEm(size);
  };

  // projeção para 2xl (continua o mesmo crescimento linear)
  const calc2xl = (): string => {
    const growthPerPx = (maxSizeEm - minSizeEm) / (lastWidth - firstWidth);
    const extra = (maxWidth - lastWidth) * growthPerPx;
    return calcEm(maxSizeEm + extra);
  };

  let result = "";

  breakpoints.forEach((bp) => {
    let size: string;

    if (bp.prefix === "") {
      size = calcEm(minSizeEm);
    } else if (bp.prefix === "xl") {
      size = calcEm(maxSizeEm);
    } else if (bp.prefix === "2xl") {
      size = calc2xl();
    } else {
      size = calcFontSize(bp.width);
    }

    result += ` ${bp.prefix ? bp.prefix + ":" : ""}text-[${size}em]`;
  });

  return result.trim();
}