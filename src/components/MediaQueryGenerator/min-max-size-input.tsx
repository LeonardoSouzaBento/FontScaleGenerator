import { deduceFontAt1530px } from "@/functions/deduceFontAt1530px";
import { Input } from "../../ui/input";
import { WrapperInput } from "../../ui/wrapper-input";

interface Props {
  minSize: number;
  setMinSize: (value: number) => void;
  maxSize: number;
  setMaxSize: (value: number) => void;
  title?: React.ReactNode;
  setFontAt1530px: (value: number) => void;
  htmlFor: string;
}

const MinMaxSizeInput = ({
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
  title,
  setFontAt1530px,
  htmlFor,
}: Props) => {
  return (
    <div>
      {title && (
        <p className={`text-md font-medium text-muted-foreground mb-1`}>
          {title}
        </p>
      )}
      <div className={`grid grid-cols-2 gap-4`}>
        <WrapperInput htmlFor={htmlFor} label="Max-width 640px">
          <Input
            type="number"
            step="0.01"
            value={minSize}
            onChange={(e) => {
              setMinSize(parseFloat(e.target.value));
              setFontAt1530px(deduceFontAt1530px(minSize, maxSize));
            }}
            placeholder="1.0"
            className={`transition-all duration-200 focus:scale-[1.02]`}
          />
        </WrapperInput>

        <WrapperInput label="Min-width 1280px" htmlFor={htmlFor}>
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
