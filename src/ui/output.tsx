import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";
import { CardContent } from "./card";
import CopyButton from "./copy-button";

const Output = ({
  output,
  outputExample,
}: {
  output: string;
  outputExample: string;
}) => {
  return (
    <CardContent
      className={`bg-white pt-5 space-y-3 animate-in fade-in 
        slide-in-from-bottom-4 duration-300 rounded-lg shadow-md overflow-y-scroll 
        max-h-128`}
    >
      {!output && (
        <p className={`-mt-0.5 mb-3 text-sm uppercase`}>Exemplo de saída:</p>
      )}
      <pre
        className={`bg-gray-100 p-4 rounded-lg text-sm 
          overflow-x-auto whitespace-pre-wrap wrap-break-word`}
      >
        {output || outputExample}
      </pre>
    </CardContent>
  );
};

export default Output;
