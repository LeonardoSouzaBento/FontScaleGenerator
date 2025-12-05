import { StateSetter } from "@/types";
import { Input } from "@/ui/input";
import { WrapperInput } from "@/ui/wrapper-input";
import { deduceFontAt1530px } from "@/functions/deduceFontAt1530px";

const Inputs = ({
  newMinBase,
  setnewMinBase,
  newMaxBase,
  setnewMaxBase,
  setRealMaxBase,
}: {
  newMinBase: number | null;
  setnewMinBase: StateSetter<number | null>;
  newMaxBase: number;
  setnewMaxBase: StateSetter<number | null>;
  setRealMaxBase: StateSetter<number | null>;
}) => {
  return (
    <div className={`py-1 grid grid-cols-2 gap-4`}>
      <WrapperInput htmlFor="minBase" label="em max-width 640px">
        <Input
          type="number"
          id="minBase"
          placeholder="17.5"
          required
          value={newMinBase || ""}
          onChange={(e) => setnewMinBase(Number(e.target.value))}
        />
      </WrapperInput>

      <WrapperInput htmlFor="maxBase" label="em min-width 1280px">
        <Input
          type="number"
          id="maxBase"
          placeholder="18.5"
          required
          value={newMaxBase || ""}
          onChange={(e) => {
            setnewMaxBase(Number(e.target.value));
            setRealMaxBase(
              deduceFontAt1530px(newMinBase, Number(e.target.value))
            );
          }}
        />
      </WrapperInput>
    </div>
  );
};

export default Inputs;
