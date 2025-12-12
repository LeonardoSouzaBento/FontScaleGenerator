import { outputExample } from "@/data/outputExample";
import { secondOutputExample } from "@/data/secondOutputExample";
import { Card } from "@/ui/card";
import { useEffect, useState } from "react";

interface Props {
  cardHeight: number;
  output: string;
  secondOutput: string;
  disabled: boolean;
  returnType: string;
}

const Output = ({
  disabled,
  output,
  cardHeight,
  returnType,
  secondOutput,
}: Props) => {
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
        <pre className={`${disabled && "text-neutral-400"} `}>
          {disabled && returnType === "tw"
            ? outputExample
            : returnType === "tw"
              ? output
              : returnType === "css"
                ? secondOutput
                : secondOutputExample}
        </pre>
      </div>
    </Card>
  );
};

export default Output;
