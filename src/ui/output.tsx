import { CardContent } from "./card";

const Output = ({
  output,
  outputExample,
}: {
  output: string;
  outputExample: string;
}) => {
  return (
    <CardContent
      className={`h-96 bg-white pt-5 pr-2 space-y-3 animate-in fade-in 
        slide-in-from-bottom-4 duration-300 rounded-lg shadow-md overflow-y-scroll 
        max-h-128`}
    >
      <pre
        className={`bg-gray-50 p-4 rounded-lg text-sm 
          overflow-x-auto whitespace-pre-wrap wrap-break-word ${!output && "opacity-50"}`}
      >
        {output || outputExample}
      </pre>
    </CardContent>
  );
};

export default Output;
