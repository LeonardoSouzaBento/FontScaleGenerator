import { Button } from "../../ui/button";
import { StateSetter } from "@/types";

const options = [
  { name: "Gerar base responsiva", value: "body" },
  { name: "Gerar escala tipográfica", value: "hierarchy" },
];

const Options = ({
  option,
  setOption,
}: {
  option: string;
  setOption: StateSetter<string>;
}) => {
  return (
    <div className={`mb-5 flex flex-col gap-3 rounded-md`}>
      <h3 className={`font-medium text-card-foreground`}>Escolha</h3>
      <div className={`grid grid-cols-2 gap-3`}>
        {options.map((item) => (
          <Button
            key={item.value}
            variant={item.value === option ? "outline" : "secondary"}
            onClick={() => setOption(item.value)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Options;
