import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Calculator } from "lucide-react";
import { toast } from "sonner";

export const DivisionCalculator = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");
  const [copied, setCopied] = useState(false);

  const handleDividir = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
      setResultado("Valor inválido");
      toast.error("Por favor, insira valores válidos");
      return;
    }

    const result = (num1 / num2).toFixed(6) + "em";
    setResultado(result);
    setValor1("");
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!resultado || resultado === "Valor inválido") return;
    try {
      await navigator.clipboard.writeText(resultado);
      setCopied(true);
      toast.success("Resultado copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleDividir();
    }
  };

  return (
    <Card className="w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Fazer Divisões
        </CardTitle>
        <CardDescription>
          Calcule divisões e obtenha o resultado em em
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Valor a dividir:
          </label>
          <Input
            type="number"
            step="any"
            value={valor1}
            onChange={(e) => setValor1(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Digite o valor"
            className="transition-all duration-200 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Divisor (persiste):
          </label>
          <Input
            type="number"
            step="any"
            value={valor2}
            onChange={(e) => setValor2(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Digite o divisor"
            className="transition-all duration-200 focus:scale-[1.02]"
          />
        </div>

        <Button 
          onClick={handleDividir} 
          className="w-full bg-linear-to-r from-primary to-end hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
        >
          Dividir
        </Button>

        {resultado && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="min-h-[3rem] flex items-center justify-center bg-muted rounded-lg border border-border p-4">
              <span className="text-lg font-semibold text-foreground">
                {resultado}
              </span>
            </div>

            {resultado !== "Valor inválido" && (
              <Button
                onClick={handleCopy}
                variant="outline"
                className="w-full transition-all duration-200 hover:scale-[1.02]"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar resultado
                  </>
                )}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
