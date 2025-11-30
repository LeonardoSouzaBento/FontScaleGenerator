export function gerarStyledComponents(
  minFontSize: number, // px para telas pequenas
  maxFontSize: number, // px para telas grandes
  minBase: number = 17.5, // base até ~sm
  maxBase: number = 18.5 // base em XL
): string {
  // converte para EM usando as bases
  const minSizeEm = minFontSize / minBase;
  const maxSizeEm = maxFontSize / maxBase;

  // converte EM → px para fazer interpolação linear
  const minSizePx = minSizeEm * 16;
  const maxSizePx = maxSizeEm * 16;

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

  const calcEm = (n: number) => n.toFixed(5) + "em";

  const calcFontSize = (width: number): string => {
    const size =
      minSizePx +
      (maxSizePx - minSizePx) * ((width - minWidth) / (maxWidth - minWidth));

    const clamped = Math.max(Math.min(size, maxSizePx), minSizePx);

    return calcEm(clamped / 16);
  };

  let result = "";

  breakpoints.forEach((bp) => {
    if (bp.type === "max" && bp.max) {
      // até 375px → usa o tamanho mínimo
      result += `@media screen and (max-width: ${
        bp.max
      }px) {\n  font-size: ${calcFontSize(bp.max)};\n}\n`;
    } else if (bp.type === "range" && bp.min && bp.max) {
      // intervalo → calcula no ponto médio
      const mid = Math.round((bp.min + bp.max) / 2);
      result += `@media screen and (min-width: ${bp.min}px) and (max-width: ${
        bp.max
      }px) {\n  font-size: ${calcFontSize(mid)};\n}\n`;
    } else if (bp.type === "min" && bp.min) {
      // acima de 1201px → usa extrapolação dentro do clamp
      result += `@media screen and (min-width: ${
        bp.min
      }px) {\n  font-size: ${calcFontSize(bp.min)};\n}\n`;
    }
  });

  return result.trim();
}