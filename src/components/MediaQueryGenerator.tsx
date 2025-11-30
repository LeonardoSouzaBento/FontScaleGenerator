import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { gerarStyledComponents } from "@/functions/gerarStyledComponents";
import { gerarTailwind } from "@/functions/gerarTailwind";

/* --------inputs de valores minimo e maximo em px -------- */

const MinMaxSizeInput = ({
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
}: {
  minSize: number;
  setMinSize: (value: number) => void;
  maxSize: number;
  setMaxSize: (value: number) => void;
}) => {
  return (
    <div className={`grid grid-cols-2 gap-4`}>
      <div className={`space-y-2`}>
        <label className={`text-sm font-medium text-muted-foreground`}>
          Tamanho mínimo em px
        </label>
        <Input
          type="number"
          step="0.01"
          value={minSize}
          onChange={(e) => setMinSize(parseFloat(e.target.value))}
          placeholder="1.0"
          className={`transition-all duration-200 focus:scale-[1.02]`}
        />
      </div>
      <div className={`space-y-2`}>
        <label className={`text-sm font-medium text-muted-foreground`}>
          Tamanho máximo em px
        </label>
        <Input
          type="number"
          step="0.01"
          value={maxSize}
          onChange={(e) => setMaxSize(parseFloat(e.target.value))}
          placeholder="1.0"
          className={`transition-all duration-200 focus:scale-[1.02]`}
        />
      </div>
    </div>
  );
};

const MinMaxBaseSizeInput = ({
  minBase,
  setMinBase,
  maxBase,
  setMaxBase,
}: {
  minBase: number;
  setMinBase: (value: number) => void;
  maxBase: number;
  setMaxBase: (value: number) => void;
}) => {
  return (
    <div className={`grid grid-cols-2 gap-4`}>
      <div className={`space-y-2`}>
        <label className={`text-sm font-medium text-muted-foreground`}>
          Tamanho mínimo base
        </label>
        <Input
          type="number"
          step="0.01"
          value={minBase}
          onChange={(e) => setMinBase(parseFloat(e.target.value))}
          placeholder="1.0"
          className={`transition-all duration-200 focus:scale-[1.02]`}
        />
      </div>
      <div className={`space-y-2`}>
        <label className={`text-sm font-medium text-muted-foreground`}>
          Tamanho máximo base
        </label>
        <Input
          type="number"
          step="0.01"
          value={maxBase}
          onChange={(e) => setMaxBase(parseFloat(e.target.value))}
          placeholder="1.0"
          className={`transition-all duration-200 focus:scale-[1.02]`}
        />
      </div>
    </div>
  );
};

/* --------output -------- */
const Output = ({
  output,
  handleCopy,
  copied,
}: {
  output: string;
  handleCopy: () => void;
  copied: boolean;
}) => {
  return (
    <div
      className={`space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300`}
    >
      <pre
        className={`bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap wrap-break-word border border-border`}
      >
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
  );
};

/* --------componente principal -------- */
export const MediaQueryGenerator = () => {
  const [minSize, setMinSize] = useState(17.5);
  const [maxSize, setMaxSize] = useState(18.5);
  const [minBase, setMinBase] = useState(17.5);
  const [maxBase, setMaxBase] = useState(18.5);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerateStyledComponents = () => {
    const css = gerarStyledComponents(minSize, maxSize, minBase, maxBase);
    setOutput(css);
    setCopied(false);
  };

  const handleGenerateTailwind = () => {
    const tw = gerarTailwind(minSize, maxSize, minBase, maxBase);
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
    <Card
      className={`w-full max-w-2xl shadow-lg hover:shadow-xl 
    transition-shadow duration-300`}
    >
      <CardHeader>
        <CardTitle className={`text-2xl font-semibold`}>
          Gerador de font-sizes
        </CardTitle>
        <CardDescription>
          Gere classes TailwindCSS ou CSS de Styled Components
        </CardDescription>
      </CardHeader>

      <CardContent className={`space-y-4`}>
        <MinMaxSizeInput
          minSize={minSize}
          setMinSize={setMinSize}
          maxSize={maxSize}
          setMaxSize={setMaxSize}
        />

        <MinMaxBaseSizeInput
          minBase={minBase}
          setMinBase={setMinBase}
          maxBase={maxBase}
          setMaxBase={setMaxBase}
        />

        <div className={`flex gap-3`}>
          <Button
            onClick={handleGenerateTailwind}
            className={`flex-1 bg-linear-to-r from-primary to-end hover:opacity-90 transition-all duration-200 hover:scale-[1.02]`}
          >
            Gerar para Tailwind
          </Button>
          <Button
            onClick={handleGenerateStyledComponents}
            variant="secondary"
            className={`flex-1 transition-all duration-200 hover:scale-[1.02]`}
          >
            Gerar para Styled Components
          </Button>
        </div>

        {output && (
          <Output output={output} handleCopy={handleCopy} copied={copied} />
        )}
      </CardContent>
    </Card>
  );
};

export default MinMaxSizeInput;
