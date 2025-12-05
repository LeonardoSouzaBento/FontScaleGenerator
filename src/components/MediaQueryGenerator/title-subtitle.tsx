import { CardDescription, CardHeader, CardTitle } from "../../ui/card";

const TitleSubtitle = () => {
  return (
    <CardHeader>
      <CardTitle className={`text-2xl font-semibold`}>
        Gerador de escalas tipográficas
      </CardTitle>
      <CardDescription>
        Configure os tamanho de fonte do seu projeto
      </CardDescription>
    </CardHeader>
  );
};

export default TitleSubtitle;
