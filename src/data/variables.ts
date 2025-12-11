import { SizeHierarchy, Scale, CssValues } from "@/types";

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
  { tagName: ".small-text", pow: -1 },
  { tagName: ".smaller-text", pow: -2 },
];

export const defaultCssValues: CssValues[] = sizes.map((item) => {
  return {
    tagName: item.tagName,
    value: "",
  };
});

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

export const secondStyles = `@layer components {
  body {
    font-family: "Inter", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Merriweather", serif;
  }
  p {
    @apply max-w-[65ch] sm:max-w-[73ch] md:max-w-[75ch] 
    lg:max-w-[78ch] xl:max-w-[82ch] 2xl:max-w-[85ch];
  }

  /* ---------- Pesos ---------- */
  input::placeholder {
    @apply font-light;
  }

  p,
  li,
  input,
  select,
  option {
    @apply font-normal;
  }

  a,
  h6,
  h5,
  h4 {
    @apply font-medium;
  }

  h3,
  h2 {
    @apply font-semibold;
  }

  h1 {
    @apply font-bold;
  }

  .helper-text,
  .description-text {
    @apply font-light;
  }

  .normal-button,
  .small-button,
  .big-link,
  .small-link {
    @apply font-medium;
  }

  /* ---------- Line heights ---------- */
  .hero {
    @apply leading-[1.1];
  }
  h1 {
    @apply leading-[1.18];
  }
  h2 {
    @apply leading-[1.24];
  }
  h3 {
    @apply leading-[1.28];
  }
  h4 {
    @apply leading-[1.32];
  }
  h5 {
    @apply leading-[1.38];
  }
  h6 {
    @apply leading-[1.44];
  }
  p,
  li,
  input,
  select,
  option {
    @apply leading-[1.52];
  }

  label {
    @apply leading-[1.35];
  }

  button {
    @apply leading-[1.15];
  }

  /* corpo */
  .large-text {
    @apply leading-[1.68];
  }
  .normal-text {
    @apply leading-normal;
  }
  .small-text {
    @apply leading-[1.6];
  }
  .smaller-text {
    @apply leading-normal;
  }

  /* botões */
  .large-button {
    @apply leading-[1.20];
  }
  .small-button {
    @apply leading-[1.10];
  }
}`;
