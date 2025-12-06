import { Dispatch, SetStateAction } from "react";

export type BooleanSetter = Dispatch<SetStateAction<boolean>>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export interface SizeHierarchy {
  tagName: string;
  pow: number;
}

export interface ScaledList {
  tagName: string;
  minSize: number;
  maxSize: number;
}

export interface CssValues {
  tagName: string;
  value: string;
}

export interface Scale {
  name: string;
  value: number;
}
