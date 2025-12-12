import { StateSetter } from "@/types";
import { Input } from "@/ui/input";
import { WrapperInput } from "@/components/inputs-card/wrapper-input";
import { useEffect } from "react";

// function deduceFontAt1536px(
//   font640: number,
//   font1280: number
// ): number {
//   const font1536 = 1.20 * (font1280 - font640) + font640;

//   return Number(font1536.toFixed(2));
// }

interface Props {
  newMinBase: number | null;
  setnewMinBase: StateSetter<number | null>;
  newMaxBase: number;
  setnewMaxBase: StateSetter<number | null>;
  setCanGenerate: StateSetter<number>;
}

const Inputs = ({
  newMinBase,
  setnewMinBase,
  newMaxBase,
  setnewMaxBase,
  setCanGenerate,
}: Props) => {
  useEffect(() => {
    if (newMinBase && newMaxBase.toString().length > 1) {
      setCanGenerate((prev) => prev + 1);
    }
  }, [newMaxBase]);

  return (
    <div className={`grid grid-cols-2 gap-4 -mb-px`}>
      <WrapperInput htmlFor="minBase" label="até 640px">
        <Input
          type="number"
          id="minBase"
          placeholder="17.5"
          required
          value={newMinBase || ""}
          onChange={(e) => setnewMinBase(Number(e.target.value))}
        />
      </WrapperInput>

      <WrapperInput htmlFor="maxBase" label="em 1280px">
        <Input
          type="number"
          id="maxBase"
          placeholder="18.5"
          required
          value={newMaxBase || ""}
          onChange={(e) => {
            setnewMaxBase(Number(e.target.value));
          }}
        />
      </WrapperInput>
    </div>
  );
};

export default Inputs;
