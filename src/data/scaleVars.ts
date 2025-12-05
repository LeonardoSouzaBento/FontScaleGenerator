import { SizeHierarchy, Scale } from "@/types";

export const sizes: SizeHierarchy[] = [
  { tagName: "body", pow: 0 },
  { tagName: ".big-h1", pow: 7 },
  { tagName: "h1", pow: 6 },
  { tagName: "h2", pow: 5 },
  { tagName: "h3", pow: 4 },
  { tagName: "h4", pow: 3 },
  { tagName: "h5", pow: 2 },
  { tagName: "h6", pow: 1 },
  { tagName: ".big-p", pow: 1 },
  { tagName: ".normal-p", pow: 0 },
  { tagName: ".small-p", pow: -1 },
  { tagName: ".smaller-p", pow: -2 },
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
