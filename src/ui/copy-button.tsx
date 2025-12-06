import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  output: string;
}

const buttonCSS = `min-h-10.5 w-full transition-all duration-200 
hover:scale-[1.02] bg-white shadow-sm hover:bg-white
hover:shadow-md border`;

const iconStyle = {strokeWidth: 2.4, size: 22}

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
    <div className={`flex justify-end sticky bottom-0 z-4 right-0`}>
      <Button
        onClick={handleCopy}
        variant="secondary"
        className={`${buttonCSS} ${!output && "grayscale-100"}`}
      >
        <div className={`h-full min-w-max flex items-center 
          justify-center gap-3.5 ${!output && "text-gray-500"}`}>
          {copied ? (
            <>
              <Check {...iconStyle}/>
              Copiado!
            </>
          ) : (
            <>
              <Copy {...iconStyle}/>
              Copiar para área de transferência
            </>
          )}
        </div>
      </Button>
    </div>
  );
};

export default CopyButton;
