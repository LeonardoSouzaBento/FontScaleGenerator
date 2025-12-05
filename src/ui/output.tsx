import { CardContent } from "./card";
import CopyButton from "./copy-button";

const css = {
  pre: `bg-gray-50 p-4 rounded-lg text-sm
  overflow-x-auto whitespace-pre-wrap wrap-break-word `,
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
  return (
    <div>
      <CardContent
        className={`h-95 bg-white pt-5 pr-2 space-y-3 animate-in fade-in
          slide-in-from-bottom-4 duration-300 rounded-lg shadow-lg hover:shadow-xl overflow-y-scroll
          max-h-full relative`}
      >
        <p className={`font-medium text-muted-foreground`}>Saída:</p>
        <pre className={`${css.pre} ${!output && "opacity-50"}`}>
          {output || outputExample}
        </pre>

        <pre className={`${css.pre}`}>{secondOutput}</pre>
        <CopyButton output={output} />
      </CardContent>
    </div>
  );
};

export default Output;
