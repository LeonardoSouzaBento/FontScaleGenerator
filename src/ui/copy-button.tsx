import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  output: string;
  disabled: boolean;
}

const buttonCSS = `min-h-10.5 w-full transition-all duration-200 
hover:scale-[1.02] bg-white shadow-xs hover:bg-white
hover:shadow-md border`;

const iconStyle = {strokeWidth: 2.3, size: "1.125rem"}

const CopyButton = ({ output, disabled }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (disabled) return;
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
        className={`${buttonCSS} ${disabled && "grayscale-100"}`}
      >
        <div className={`h-full min-w-max flex items-center 
          justify-center gap-2.5 ${disabled && "grayscale-100 opacity-40"}`}>
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