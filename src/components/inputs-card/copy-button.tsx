import { Check, Copy } from "lucide-react";
import { Button } from "../../ui/button";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  output: string;
  secondOutput: string;
  disabled: boolean;
  returnType: string;
}

const css = {
  button: `min-h-10.5 w-full transition-all duration-200 
hover:scale-[1.02] relative`,
  disabled: `bg-gray-200! text-foreground hover:bg-gray-200! hover:text-foreground`,
  warn: `size-full absolute top-0 left-0 z-2 border-destructive-foreground
  text-destructive text-center bg-destructive-foreground flex items-center justify-center
  normal-case rounded-md small-text`,
};

const iconStyle = { strokeWidth: 2.3, size: "1.125rem" };

const CopyButton = ({ output, secondOutput, disabled, returnType }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [warn, setWarn] = useState("");
  const timeOutRef = useRef<number>(0);
  const outputToCopy = returnType === "tw" ? output : secondOutput;

  const handleCopy = async () => {
    if (disabled) {
      setWarn("Preencha todos os campos.");
      clearTimeout(timeOutRef.current);
      timeOutRef.current = window.setTimeout(() => setWarn(""), 2100);
      return;
    }
    try {
      await navigator.clipboard.writeText(outputToCopy);
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
      className={`${css.button} ${disabled && css.disabled}`}
    >
      {warn && (
        <div className={css.warn}>
          <p>{warn}</p>
        </div>
      )}

      <div
        className={`h-full min-w-max flex items-center 
          justify-center gap-2.5 ${disabled && "grayscale-100 opacity-33"}`}
      >
        {copied ? (
          <>
            <Check {...iconStyle} />
            Copiado!
          </>
        ) : (
          <>
            <Copy {...iconStyle} />
            {warn || "Copiar os estilos gerados"}
          </>
        )}
      </div>
    </Button>
  );
};

export default CopyButton;
