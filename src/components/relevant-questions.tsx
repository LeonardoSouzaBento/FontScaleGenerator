import { useState } from "react";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: `Porque não usar clamps?`,
    answer: `Estamos usando funções clamp em todas as tags do componente de prévia. No entanto, funções clamp não funcionam sem o fornecimento de um valor absoluto dentro da função calc interna. Tente usar o clamp a seguir e veja o resultado: 'clamp(1rem, calc(0.999rem + 0.0651vw), 2rem)'. Não funciona. Precisa ter um valor em pixels dentro do calc: 'clamp(1rem, calc(15.98px + 0.0651vw), 2rem)'. Essa necessidade de ter valores em pixels é ruim para a acessibilidade.`,
  },
  {
    question: `Porque definir o mesmo tamanho de fonte até 640px?`,
    answer: `Primeiro, porque isso garante que a fonte fique bem legível em telefones pequenos. Depois, porque hoje em dia quase todos os smartphones modernos têm uma largura de tela maior que 375px. Além disso, assim precisamos de menos media queries — um detalhe com alguma importância.`,
  },
  {
    question: `Porque "rem" é a melhor medida?`,
    answer: `Por conta da necessidade de acessibilidade para grupos específicos (pessoas com baixa visão e idosos). Além disso, existe a facilidade de que se o fonte-size do elemento raiz (a tag html) for alterado, todos os outros elementos (títulos, margens, padding, etc.) se ajustarão automaticamente e de forma proporcional ao novo tamanho base definido, considerando que o tailwind define tudo utilizando rem por padrão.`,
  },
  {
    question: `Porque esse site é util?`,
    answer: `Ao gerar para você estilos padronizados para as principais tags textuais (como parágrafos e títulos de h1 a h6) e pegar a lista de demais estilos recomendados clicando em "ver mais estilos recomendados", você garante que seu projeto tenha uma base completa de estilização de tipografia, melhorando muito o design de interface da sua aplicação e a experiência do usuário e aumentando o valor do seu produto.`,
  },
];

const RelevantQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("");

  return (
    <Card className={`w-full max-h-max xl:max-h-none`}>
      <CardHeader className={`mb-2`}>
        <CardTitle>Perguntas pertinentes</CardTitle>
      </CardHeader>
      <CardContent>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`mb-3 space-y-2 last:mb-0!`}
            onClick={() =>
              setSelectedQuestion((prev) =>
                prev === item.question ? "" : item.question
              )
            }
          >
            <div
              className={`flex justify-between items-center gap-4`}
            >
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
