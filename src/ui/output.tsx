import { useEffect, useState } from "react";
import { Card } from "./card";
import CopyButton from "./copy-button";
import { outputExample } from "@/data/outputExample";

const css = {
  pre: `bg-gray-50 p-4 rounded-lg font-thin
  overflow-x-auto whitespace-pre-wrap wrap-break-word transition-opacity duration-400`,
};

const Output = ({
  output,
  cardHeight,
}: {
  output: string;
  cardHeight: number;
}) => {
  const [animate, setAnimate] = useState<boolean>(false);
  
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 200);
  }, [output]);

  return (
    <Card
      className={`animate-in fade-in slide-in-from-bottom-4 relative max-h-full 
      space-y-5 overflow-y-scroll pr-5.5`}
      style={{ maxHeight: cardHeight || "22rem" }}
    >
      <div className={`relative space-y-4`}>
        <div
          className={`absolute top-0 -z-1 left-0 size-full rounded-md bg-transparent 
            transition-all duration-200 ${animate && "bg-white/66 z-2"}`}
        />
        <pre
          className={`${css.pre} ${!output && "text-neutral-400"} `}
        >
          {output || outputExample}
        </pre>
      </div>
      <CopyButton output={output}/>
    </Card>
  );
};

export default Output;
