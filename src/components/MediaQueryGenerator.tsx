import { Card, CardContent } from "@/components/ui/card";
import { gerarStyledComponents } from "@/functions/gerarStyledComponents";
import { gerarTailwind } from "@/functions/gerarTailwind";
import { useState } from "react";
import { toast } from "sonner";
import GenButtons from "./MediaQueryGenerator/gen-buttons";
import MeasurementDefiner from "./MediaQueryGenerator/measurement-definer";
import MinMaxSizeInput from "./MediaQueryGenerator/min-max-size-input";
import Output from "./MediaQueryGenerator/output";
import TitleSubtitle from "./MediaQueryGenerator/title-subtitle";
import Options from "./MediaQueryGenerator/options";

/* --------componente principal -------- */
export const MediaQueryGenerator = () => {
  const [option, setOption] = useState<"body" | "hierarchy" | "tags">("body");
  const [measurement, setMeasurement] = useState<"px" | "em">("px");
  const [minBase, setMinBase] = useState(16);
  const [maxBase, setMaxBase] = useState(16);
  const [minSize, setMinSize] = useState(16);
  const [maxSize, setMaxSize] = useState(16);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function callFunction(type: "styled-components" | "tailwind"): string {
    if (type === "styled-components") {
      if (option === "body") {
        return gerarStyledComponents(16, 16, minSize, maxSize, measurement);
      } else if (option === "hierarchy") {
        return gerarStyledComponents(minBase, maxBase, minSize, maxSize, measurement);
      } else {
        return gerarStyledComponents(minBase, maxBase, minSize, maxSize, measurement);
      }
    } else {
      if (option === "body") {
        return gerarTailwind(16, 16, minSize, maxSize, measurement);
      } else if (option === "hierarchy") {
        return gerarTailwind(minBase, maxBase, minSize, maxSize, measurement);
      } else {
        return gerarTailwind(minBase, maxBase, minSize, maxSize, measurement);
      }
    }
  }

  const handleGenerateStyledComponents = () => {
    const css = callFunction("styled-components");
    setOutput(css);
    setCopied(false);
  };

  const handleGenerateTailwind = () => {
    const tw = callFunction("tailwind");
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
      <TitleSubtitle />

      <CardContent className={`space-y-4`}>
        <Options option={option} setOption={setOption} />
        <div className={`space-y-4 border-t pt-3`}>
          {option !== "body" && (
            <MinMaxSizeInput
              title="Tamanho base da tag &lt;body&gt;"
              minSize={minBase}
              setMinSize={setMinBase}
              maxSize={maxBase}
              setMaxSize={setMaxBase}
            />
          )}

          <MinMaxSizeInput
            title="Novos tamanhos"
            minSize={minSize}
            setMinSize={setMinSize}
            maxSize={maxSize}
            setMaxSize={setMaxSize}
          />

          <MeasurementDefiner
            measurement={measurement}
            setMeasurement={setMeasurement}
          />

          <GenButtons
            handleGenerateTailwind={handleGenerateTailwind}
            handleGenerateStyledComponents={handleGenerateStyledComponents}
          />
        </div>

        {output && (
          <Output output={output} handleCopy={handleCopy} copied={copied} />
        )}
      </CardContent>
    </Card>
  );
};

export default MediaQueryGenerator;
