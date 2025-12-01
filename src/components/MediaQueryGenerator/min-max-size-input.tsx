import { Input } from "../ui/input";

const WrapperInput = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <label className={`size-auto text-sm font-medium text-muted-foreground`}>
        {label}
      </label>
      {children}
    </div>
  );
};

interface Props {
  minSize: number;
  setMinSize: (value: number) => void;
  maxSize: number;
  setMaxSize: (value: number) => void;
  title: React.ReactNode;
}

const MinMaxSizeInput = ({
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
  title,
}: Props) => {
  return (
    <div>
      <p className={`text-md font-medium text-muted-foreground mb-1`}>
        {title}
      </p>
      <div className={`grid grid-cols-2 gap-4`}>
        <WrapperInput label="Até 640px">
          <Input
            type="number"
            step="0.01"
            value={minSize}
            onChange={(e) => setMinSize(parseFloat(e.target.value))}
            placeholder="1.0"
            className={`transition-all duration-200 focus:scale-[1.02]`}
          />
        </WrapperInput>

        <WrapperInput label="Min-width 1280px">
          <Input
            type="number"
            step="0.01"
            value={maxSize}
            onChange={(e) => setMaxSize(parseFloat(e.target.value))}
            placeholder="1.0"
            className={`transition-all duration-200 focus:scale-[1.02]`}
          />
        </WrapperInput>
      </div>
    </div>
  );
};

export default MinMaxSizeInput;
