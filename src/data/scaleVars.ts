import { MinMaxValues, Scale } from "@/types";

export const sizes: MinMaxValues[]= [
  { name: ".big-h1", minValue: 0, maxValue: 0, pow: 7 },
  { name: "h1", minValue: 0, maxValue: 0, pow: 6 },
  { name: "h2", minValue: 0, maxValue: 0, pow: 5 },
  { name: "h3", minValue: 0, maxValue: 0, pow: 4 },
  { name: "h4", minValue: 0, maxValue: 0, pow: 3 },
  { name: "h5", minValue: 0, maxValue: 0, pow: 2 },
  { name: "h6", minValue: 0, maxValue: 0, pow: 1 },
  { name: ".big-p", minValue: 0, maxValue: 0, pow: 1 },
  { name: ".normal-p", minValue: 0, maxValue: 0, pow: 0 },
  { name: ".small-p", minValue: 0, maxValue: 0, pow: -1 },
  { name: ".smaller-p", minValue: 0, maxValue: 0, pow: -2 },
];

export const scales: Scale[] = [
  { name: "minor-second", value: 1.067 },
  { name: "major-second", value: 1.125 },
  { name: "minor-third", value: 1.2 },
  { name: "major-third", value: 1.25 },
  { name: "perfect-fourth", value: 1.333 },
  { name: "augmented-fourth", value: 1.414 },
  { name: "perfect-fifth", value: 1.5 },
  { name: "golden-ratio", value: 1.618 },
];