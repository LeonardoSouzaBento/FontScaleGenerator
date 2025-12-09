import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: `Porque não usar clamps?`,
    answer: `Estamos usando funções clamp em todas as tags do componente de prévia. No entanto, funções clamps não funcionam sem fornecer um valor absoluto dentro da função calc interna. Tente usar o clamp a seguir e veja o resultado: "clamp(1rem, calc(0.999349rem + 0.065147vw), 2rem)". Não funciona. Esse outro clamp funciona porque tem um valor em px dentro do calc: "clamp(1.125rem, calc(13.685393px + 0.674157vw), 1.5rem)". Essa necessidade de ter valores em pixels é ruim para a acessibilidade.`,
  },
  {
    question: `Porque definir o mesmo tamanho de fonte até 640px?`,
    answer: `Primeiro, porque definir a mesma fonte para até 640px garante que a fonte fique bem legível em telefones pequenos. Depois, porque hoje em dia quase todos os smartphones modernos têm uma largura de tela maior que 375px. Além disso, assim precisa de menos media queries — um detalhe com alguma importância.`,
  },
  {
    question: `Porque "em" é a melhor medida?`,
    answer: `Por conta da necessidade de acessibilidade para grupos específicos (pessoas com baixa visão e idosos). Além disso, existe a facilidade de a alteração do fonte-size do elemento raiz (a tag html) fazer todos os outros elementos (títulos, margens, padding, etc.) se ajustarem automaticamente e de forma proporcional ao novo tamanho base definido, isso considerando que o tailwind define tudo com rem por padrão.`,
  },
];

const RelevantQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("");

  return (
    <Card className={`w-full xl:max-w-[calc(50%-1.1rem)]`}>
      <CardHeader>
        <CardTitle>Dúvidas pertinentes</CardTitle>
      </CardHeader>
      <CardContent>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`mb-3 space-y-3 last:mb-0!`}
            onClick={() =>
              setSelectedQuestion((prev) =>
                prev === item.question ? "" : item.question
              )
            }
          >
            <div className={`flex justify-between items-center gap-4`}>
              <p className={`leading-none large-text`}>{item.question}</p>
              <Button className={`rounded-full`} variant="ghost" size="icon">
                <ChevronDown
                  className={
                    selectedQuestion === item.question ? "rotate-180" : ""
                  }
                />
              </Button>
            </div>

            {selectedQuestion === item.question && (
              <p className={`text-muted-foreground`}>{item.answer}</p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RelevantQuestions;
