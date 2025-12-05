import { Dispatch, SetStateAction } from "react";

export type BooleanSetter = Dispatch<SetStateAction<boolean>>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export interface SizeHierarchy {
  tagName: string;
  pow: number;
}

export interface Scale {
  name: string;
  value: number;
}
