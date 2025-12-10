import { iconMd } from "@/lucide-icon-styles";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Eye } from "lucide-react";

const PersonalGuidelines = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orientações minhas</CardTitle>
      </CardHeader>
      <CardContent className={`space-y-4 pt-2 text-muted-foreground`}>
        <p>
          Coloque os estilos copiados em um arquivo separado que tenha apenas
          estilos para textos. Um nome como "text-styles.css" é conveniente.
          Lembre-se de importar o arquivo globals.css para usar as variaveis
          personalidas, se necessário.
        </p>
        <p className={`mb-5`}>
          Você precisará de mais estilos além do CSS de tamanho. Então, clique
          no botão abaixo se quiser mais.
        </p>
        <Button className={`w-full gap-2.5`}>
          <Eye {...iconMd} color="white" /> Ver mais estilos recomendados
        </Button>
      </CardContent>
    </Card>
  );
};

export default PersonalGuidelines;
