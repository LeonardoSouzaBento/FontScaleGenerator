import { Button } from "../ui/button";

interface LocalButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  styles: string;
}

const LocalButton = ({
  children,
  onClick,
  styles,
}: LocalButtonProps) => {
  return (
    <Button
      variant="link"
      className={`text-primary! border ${styles}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const MeasurementDefiner = ({
  measurement,
  setMeasurement,
}: {
  measurement: "px" | "em";
  setMeasurement: (measurement: "px" | "em") => void;
}) => {
  return (
    <div className={`grid grid-cols-2 gap-3`}>
      <LocalButton
        onClick={() => setMeasurement("px")}
        styles={measurement === "px" && "border-primary"}
      >
        Gerar em <strong>px</strong>
      </LocalButton>
      <LocalButton
        onClick={() => setMeasurement("em")}
        styles={measurement === "em" && "border-primary"}
      >
        Gerar em <strong>em</strong>
      </LocalButton>
    </div>
  );
};

export default MeasurementDefiner;
