import { moreCSSStyles, moreTwStyles } from "@/data/moreStyles";
import { iconSm } from "@/lucide-icon-styles";
import { StateSetter } from "@/types";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Copy, X } from "lucide-react";
import { useEffect, useState } from "react";

const options = [
  { name: "Tailwind", value: "tw" },
  { name: "CSS", value: "CSS" },
];

const MoreStylesModal = ({
  setShowMoreStyles,
}: {
  setShowMoreStyles: StateSetter<boolean>;
}) => {
  const [selected, setSelected] = useState<string>("tw");

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
        rounded-lg pb-0 pt-0 overflow-y-scroll 
        `}
      >
        <CardHeader
          className={`w-full flex flex-row flex-nowrap 
          justify-between pt-6`}
        >
          <div>
            <CardTitle>Estilos adicionais</CardTitle>
            <CardDescription>
              Estilos para line-height, pesos e larguras máxima do corpo.
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

        <CardContent className={`flex flex-col pb-0`}>
          <div className={`sticky top-0 z-6 bg-white py-5`}>
            <div
              className={`h-max py-px flex gap-3 justify-start 
                flex-wrap`}
            >
              <CopyButton selected={selected} />
              {options.map((option) => (
                <Button
                  size="sm"
                  variant="outline"
                  key={option.value}
                  optionButton
                  isSelected={selected === option.value}
                  className={`rounded-full shadow-xs`}
                  onClick={() => {
                    setSelected(option.value);
                  }}
                >
                  {option.name}
                </Button>
              ))}
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

const CopyButton = ({ selected }: { selected: string }) => {
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

  return (
    <Button size="sm" className={`rounded-full`} onClick={copy}>
      <Copy {...iconSm} color="white" />
      {copied ? "Copiado!" : "Copiar estilos"}
    </Button>
  );
};
