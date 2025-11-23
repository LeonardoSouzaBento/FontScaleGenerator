import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const formatEm = (value: number): string => {
  let v = value.toFixed(5);
  if (v.endsWith("00")) {
    v = value.toFixed(3);
  }
  return v + "em";
};

const gerarMedias = (minSizeEm = 1, maxSizeEm = 1.2): string => {
  const minWidth = 375;
  const maxWidth = 1201;
  const minSizePx = minSizeEm * 16;
  const maxSizePx = maxSizeEm * 16;

  const breakpoints = [
    { type: "max" as const, max: 375 },
    { type: "range" as const, min: 375, max: 576 },
    { type: "range" as const, min: 577, max: 768 },
    { type: "range" as const, min: 769, max: 992 },
    { type: "range" as const, min: 993, max: 1200 },
    { type: "min" as const, min: 1201 },
  ];

  const calcFontSize = (width: number): string => {
    const size =
      minSizePx +
      (maxSizePx - minSizePx) * ((width - minWidth) / (maxWidth - minWidth));
    const clamped = Math.max(Math.min(size, maxSizePx), minSizePx);
    return formatEm(clamped / 16);
  };

  let result = "";
  breakpoints.forEach((bp) => {
    if (bp.type === "max" && bp.max) {
      result += `@media screen and (max-width: ${bp.max}px) {\n  font-size: ${calcFontSize(bp.max)};\n}\n`;
    } else if (bp.type === "range" && bp.min && bp.max) {
      const mid = Math.round((bp.min + bp.max) / 2);
      result += `@media screen and (min-width: ${bp.min}px) and (max-width: ${bp.max}px) {\n  font-size: ${calcFontSize(mid)};\n}\n`;
    } else if (bp.type === "min" && bp.min) {
      result += `@media screen and (min-width: ${bp.min}px) {\n  font-size: ${calcFontSize(bp.min)};\n}\n`;
    }
  });
  return result.trim();
};

const gerarTailwind = (minSizeEm = 1, lastSizeEm = 1.2): string => {
  const tailwindBreakpoints = [
    { prefix: "", width: 375 },
    { prefix: "sm", width: 640 },
    { prefix: "md", width: 768 },
    { prefix: "lg", width: 1024 },
    { prefix: "xl", width: 1280 },
    { prefix: "2xl", width: 1536 },
  ];

  const minSizePx = minSizeEm * 16;
  const lastSizePx = lastSizeEm * 16;

  const minWidth = tailwindBreakpoints[0].width;
  const lastWidth = tailwindBreakpoints[4].width;
  const maxWidth = tailwindBreakpoints[5].width;

  const calcFontSize = (width: number): string => {
    const size =
      minSizePx +
      (lastSizePx - minSizePx) * ((width - minWidth) / (lastWidth - minWidth));
    return formatEm(size / 16);
  };

  const calc2xl = (): string => {
    const growthPerPx = (lastSizePx - minSizePx) / (lastWidth - minWidth);
    const extra = (maxWidth - lastWidth) * growthPerPx;
    const size = lastSizePx + extra;
    return formatEm(size / 16);
  };

  let result = "";

  tailwindBreakpoints.forEach((bp) => {
    let size: string;

    if (bp.prefix === "") {
      size = formatEm(minSizeEm);
    } else if (bp.prefix === "xl") {
      size = formatEm(lastSizeEm);
    } else if (bp.prefix === "2xl") {
      size = calc2xl();
    } else {
      size = calcFontSize(bp.width);
    }

    result += ` ${bp.prefix ? bp.prefix + ":" : ""}text-[${size}]`;
  });

  return result.trim();
};

export const MediaQueryGenerator = () => {
  const [minSize, setMinSize] = useState("1.0");
  const [maxSize, setMaxSize] = useState("1.0");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerateCSS = () => {
    const min = parseFloat(minSize);
    const max = parseFloat(maxSize);
    if (isNaN(min) || isNaN(max)) {
      toast.error("Por favor, insira valores válidos");
      return;
    }
    const css = gerarMedias(min, max);
    setOutput(css);
    setCopied(false);
  };

  const handleGenerateTailwind = () => {
    const min = parseFloat(minSize);
    const max = parseFloat(maxSize);
    if (isNaN(min) || isNaN(max)) {
      toast.error("Por favor, insira valores válidos");
      return;
    }
    const tw = gerarTailwind(min, max);
    setOutput(tw);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      toast.success("Copiado para área de transferência!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar");
    }
  };

  return (
    <Card className={`w-full max-w-2xl shadow-lg hover:shadow-xl 
    transition-shadow duration-300`}>
      <CardHeader>
        <CardTitle className={`text-2xl font-semibold`}>Gerador de Media Queries</CardTitle>
        <CardDescription>
          Gere media queries CSS ou classes Tailwind responsivas
        </CardDescription>
      </CardHeader>
      <CardContent className={`space-y-4`}>
        <div className={`grid grid-cols-2 gap-4`}>
          <div className={`space-y-2`}>
            <label className={`text-sm font-medium text-muted-foreground`}>
              Tamanho mínimo (em)
            </label>
            <Input
              type="number"
              step="0.01"
              value={minSize}
              onChange={(e) => setMinSize(e.target.value)}
              placeholder="1.0"
              className={`transition-all duration-200 focus:scale-[1.02]`}
            />
          </div>
          <div className={`space-y-2`}>
            <label className={`text-sm font-medium text-muted-foreground`}>
              Tamanho máximo (em)
            </label>
            <Input
              type="number"
              step="0.01"
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
              placeholder="1.0"
              className={`transition-all duration-200 focus:scale-[1.02]`}
            />
          </div>
        </div>

        <div className={`flex gap-3`}>
          <Button 
            onClick={handleGenerateTailwind} 
            className={`flex-1 bg-linear-to-r from-primary to-end hover:opacity-90 transition-all duration-200 hover:scale-[1.02]`}
          >
            Gerar para Tailwind
          </Button>
          <Button 
            onClick={handleGenerateCSS} 
            variant="secondary"
            className={`flex-1 transition-all duration-200 hover:scale-[1.02]`}
          >
            Gerar para CSS
          </Button>
        </div>

        {output && (
          <div className={`space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300`}>
            <pre className={`bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap wrap-break-word border border-border`}>
              {output}
            </pre>
            <Button
              onClick={handleCopy}
              variant="outline"
              className={`w-full transition-all duration-200 hover:scale-[1.02]`}
            >
              {copied ? (
                <>
                  <Check className={`mr-2 h-4 w-4`} />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className={`mr-2 h-4 w-4`} />
                  Copiar para área de transferência
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
