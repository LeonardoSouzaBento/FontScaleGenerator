import { moreCSSStyles, moreTwStyles } from "@/data/moreStyles";
import { iconSm, iconXs, primary } from "@/lucide-icon-styles";
import { StateSetter } from "@/types";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Copy, Eye, EyeClosed, X } from "lucide-react";
import { useEffect, useState } from "react";

const options = [
  { name: "Tailwind", value: "tw", icon: Eye },
  { name: "CSS", value: "CSS", icon: EyeClosed },
];

const MoreStylesModal = ({
  setShowMoreStyles,
}: {
  setShowMoreStyles: StateSetter<boolean>;
}) => {
  const [selected, setSelected] = useState<string>("tw");
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(
      selected === "tw" ? moreTwStyles : moreCSSStyles
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={() => setShowMoreStyles(false)}
      className={`fixed inset-0 z-12 w-full h-screen flex 
        items-center justify-center bg-black/7 rounded-none p-0 box-border`}
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-[calc(100vh-3rem)] max-w-xl shadow-xl 
        rounded-lg pb-0 overflow-y-scroll`}
      >
        <CardHeader
          className={`w-full flex flex-row flex-nowrap 
          justify-between mb-0`}
        >
          <div>
            <CardTitle>Estilos adicionais</CardTitle>
            <CardDescription>
              Larguras máxima do corpo, pesos e line-height
            </CardDescription>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className={`border-border rounded-full 
            -mr-2`}
            onClick={(e) => {
              e.stopPropagation();
              setShowMoreStyles(false);
            }}
          >
            <X {...iconSm} />
          </Button>
        </CardHeader>

        <CardContent className={`flex flex-col`}>
          <div className={`sticky top-0 z-6 bg-white py-5`}>
            <div
              className={`h-max py-px flex gap-3 justify-start 
                flex-wrap`}
            >
              <Button
                size="sm"
                className={`rounded-full pl-3.5 mb-px`}
                onClick={copy}
              >
                <Copy {...iconXs} color="white" />
                {copied ? "Copiado!" : "Copiar estilos"}
              </Button>
              
              {options.map((option) => {
                const isSelected = selected === option.value;
                return (
                  <Button
                    size="sm"
                    variant="outline"
                    key={option.value}
                    optionButton
                    isSelected={isSelected}
                    className={`rounded-full shadow-xs`}
                    onClick={() => {
                      setSelected(option.value);
                    }}
                  >
                    {isSelected ? (
                      <Eye {...iconXs} color={primary} className={`scale-102`} />
                    ) : (
                      <EyeClosed {...iconXs} className={`scale-93`} />
                    )}
                    {option.name}
                  </Button>
                );
              })}
            </div>
          </div>

          <pre
            className={`bg-background rounded-md max-h-none 
                overflow-y-visible mb-6`}
          >
            {selected === "tw" ? moreTwStyles : moreCSSStyles}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoreStylesModal;
