import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";

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

export default Output;