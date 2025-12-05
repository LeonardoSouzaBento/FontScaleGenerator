import { Dispatch, SetStateAction } from "react";

export type BooleanSetter = Dispatch<SetStateAction<boolean>>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export interface MinMaxValues {
  name: string;
  minValue: number;
  maxValue: number;
  pow: number;
}

export interface Scale {
  name: string;
  value: number;
}

export type OptionTool = "body" | "hierarchy" | "tags";