import { gerarStyledComponents } from "@/functions/gerarStyledComponents";
import { gerarTailwind } from "@/functions/gerarTailwind";
import { OptionTool } from "@/types";
import Output from "@/ui/output";
import { useState } from "react";
import { toast } from "sonner";
import MinMaxSizeInput from "./MediaQueryGenerator/min-max-size-input";
import GenButton from "@/ui/gen-button";

interface Props {
  option: OptionTool;
  minBase: number;
  setMinBase: (minBase: number) => void;
  maxBase: number;
  setMaxBase: (maxBase: number) => void;
}

const outputExample = "body { font-size: clamp(1.09em, 1.5vw, 1.15em); }";

export const MediaQueryGenerator = ({
  option,
  minBase,
  setMinBase,
  maxBase,
  setMaxBase,
}: Props) => {
  const [minSize, setMinSize] = useState(16);
  const [maxSize, setMaxSize] = useState(16);
  const [measurement, setMeasurement] = useState<"px" | "em">("em");
  const [fontAt1530px, setFontAt1530px] = useState(0);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function callFunction(type: "styled-components" | "tailwind"): string {
    if (type === "styled-components") {
      if (option === "body") {
        return gerarStyledComponents(16, 16, minSize, maxSize, measurement);
      } else if (option === "hierarchy") {
        return gerarStyledComponents(
          minBase,
          maxBase,
          minSize,
          maxSize,
          measurement
        );
      } else {
        return gerarStyledComponents(
          minBase,
          maxBase,
          minSize,
          maxSize,
          measurement
        );
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

  return (
    <div className={`space-y-5`}>
      <div className={`space-y-5 border-t pt-3`}>
        {option !== "body" && (
          <MinMaxSizeInput
            htmlFor="minBase"
            title="Tamanho base da tag &lt;body&gt;"
            minSize={minBase}
            setMinSize={setMinBase}
            maxSize={maxBase}
            setMaxSize={setMaxBase}
            setFontAt1530px={setFontAt1530px}
          />
        )}

        <MinMaxSizeInput
          htmlFor="minSize"
          title="Novos tamanhos"
          minSize={minSize}
          setMinSize={setMinSize}
          maxSize={maxSize}
          setMaxSize={setMaxSize}
          setFontAt1530px={setFontAt1530px}
        />

        {/* <GenButton title="Gerar clamp" /> */}
      </div>

      <Output output={output} outputExample={outputExample}/>
    </div>
  );
};

export default MediaQueryGenerator;
