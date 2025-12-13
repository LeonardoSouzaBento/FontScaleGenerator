import { SizeHierarchy, Scale, CssValues } from "@/data/types";

export const sizes: SizeHierarchy[] = [
  { tagName: "body", pow: 0 },

  { tagName: ".big-h1", pow: 7 },
  { tagName: "h1", pow: 6 },
  { tagName: "h2", pow: 5 },
  { tagName: "h3", pow: 4 },
  { tagName: "h4", pow: 3 },
  { tagName: "h5", pow: 2 },
  { tagName: "h6", pow: 1 },

  { tagName: ".large-text", pow: 1 },
  { tagName: ".normal-text", pow: 0 },
  { tagName: ".small-text, label", pow: -1 },
  { tagName: ".smaller-text", pow: -2 },

  { tagName: "button", ratio: 0.94 },
  { tagName: ".small-button", ratio: 0.88 },
  { tagName: ".large-button", ratio: 1.0 },
];

export const defaultCssValues: CssValues[] = sizes.map((item) => {
  return {
    tagName: item.tagName,
    value: "",
  };
});

export const twTextVariables = [
  { varName: "--text-xs", className: ".smaller-text" },
  { varName: "--text-base", className: "" },
  { varName: "--text-sm", className: ".small-text, label" },
  { varName: "--text-lg", className: ".large-text" },
];

export const textClasses = twTextVariables.map((item) => item.className);

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

export const buttonSizes = {
  small: "0.88em",
  normal: "1.00em",
  large: "1.12em",
};
