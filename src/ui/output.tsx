import { useEffect, useState } from "react";
import { CardContent } from "./card";
import CopyButton from "./copy-button";

const css = {
  pre: `bg-gray-50 p-4 rounded-lg 
  overflow-x-auto whitespace-pre-wrap wrap-break-word transition-opacity duration-400`,
};

const Output = ({
  output,
  secondOutput,
  outputExample,
}: {
  output: string;
  secondOutput: string;
  outputExample: string;
}) => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 200);
  }, [output]);

  return (
    <CardContent
      className={`animate-in fade-in slide-in-from-bottom-4 relative h-91.5 max-h-full 
        space-y-3 overflow-y-scroll rounded-lg bg-white pt-5 pr-3 shadow-lg duration-300 
        hover:shadow-xl ${!output && "border border-gray-100"}`}
    >
      <div className={`relative space-y-4`}>
        <div
          className={`absolute top-0 -z-1 left-0 size-full rounded-md bg-transparent 
            transition-all duration-200 ${animate && "bg-white/66 z-2"}`}
        />
        <pre
          className={`${css.pre} ${!output ? "opacity-50" : "opacity-100"} `}
        >
          {output || outputExample}
        </pre>
        <pre
          className={`${css.pre} ${
            !secondOutput ? "opacity-50" : "opacity-100"
          }`}
        >
          {secondOutput}
        </pre>
      </div>
      <CopyButton output={output} />
    </CardContent>
  );
};

export default Output;
