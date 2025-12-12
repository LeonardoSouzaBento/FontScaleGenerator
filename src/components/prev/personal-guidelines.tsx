import { iconMd } from "@/lucide-icon-styles";
import { StateSetter } from "@/types";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Eye } from "lucide-react";

const PersonalGuidelines = ({
  setShowMoreStyles,
}: {
  setShowMoreStyles: StateSetter<boolean>;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orientações minhas</CardTitle>
      </CardHeader>
      <CardContent className={`space-y-4`}>
        <p className={`text-muted-foreground`}>
          Coloque os estilos copiados em um <strong>arquivo separado</strong>{" "}
          que tenha apenas estilos para textos. Um nome como "text-styles.css" é
          conveniente. Lembre-se de importar o arquivo globals.css para usar as
          variaveis personalidas, se necessário.
        </p>
        <p className={`mb-5 text-muted-foreground`}>
          Você precisará de <strong>mais estilos</strong> além do CSS de
          tamanho. Então, clique no botão abaixo se quiser mais.
        </p>
        <Button
          variant="outline"
          className={`w-full gap-2.5 hover:shadow-xs`}
          onClick={() => setShowMoreStyles(true)}
        >
          <Eye {...iconMd} />
          Ver mais estilos recomendados
        </Button>
      </CardContent>
    </Card>
  );
};

export default PersonalGuidelines;
