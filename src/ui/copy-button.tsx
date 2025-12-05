import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  output: string;
}

const CopyButton = ({ output }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

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
    <Button
      onClick={handleCopy}
      variant="outline"
      className={`w-full transition-all duration-200 hover:scale-[1.02] ${
        !output && "hidden"
      }`}
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
  );
};

export default CopyButton;
