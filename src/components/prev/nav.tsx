import { Button } from "@/ui/button";
import { componentExamples } from "../prev";

const css = {
  button: `rounded-full`,
  selectedButton: `ring ring-ring shadow-xs`,
};

const Nav = ({
  selectedComponent,
  setSelectedComponent,
}: {
  selectedComponent: string;
  setSelectedComponent: (value: string) => void;
}) => {
  return (
    <nav className={`flex gap-3`}>
      {componentExamples.map((item) => {
        const selected = selectedComponent === item;
        return (
          <Button
            variant="outline"
            size="sm"
            key={item}
            className={`${css.button} ${selected && css.selectedButton}`}
            onClick={() => setSelectedComponent(item)}
          >
            {item}
          </Button>
        );
      })}
    </nav>
  );
};

export default Nav;
