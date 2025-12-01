import { CardDescription, CardHeader, CardTitle } from "../ui/card";

const TitleSubtitle = () => {
  return (
    <CardHeader>
      <CardTitle className={`text-2xl font-semibold`}>
        Gerador de font-sizes
      </CardTitle>
      <CardDescription>
        Gere classes TailwindCSS ou CSS de Styled Components
      </CardDescription>
    </CardHeader>
  );
};

export default TitleSubtitle;
