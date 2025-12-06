import { useEffect, useRef, useState } from "react";
import TitlesSection from "./prev/titles-section";
import ParagraphsSection from "./prev/paragraphs-section";
import ButtonsSection from "./prev/buttons-section";
import FormsSection from "./prev/forms-section";
import { Button } from "@/ui/button";

const sectionsSizesMap = [
  { titles: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  { paragraphs: ["p", ".big-p", ".normal-p", ".small-p", ".smaller-p"] },
  { buttons: ["button"] },
  { forms: ["form"] },
];

const css = {
  wrapper: `mb-8 mx-auto w-[calc(100%-1.5rem)] max-w-2xl xl:max-w-7xl 
    bg-white p-6 rounded-lg shadow-lg 
    hover:shadow-xl transition-shadow duration-300`,
  section: `space-y-5 border border-border rounded-lg p-5`,
};

const Prev = () => {
  const [componentExamples, setComponentExamples] = useState<string[]>([
    "títulos",
    "paragráfos",
    "botões",
    "formulários",
  ]);
  const [selectedComponent, setSelectedComponent] = useState<string>("títulos");
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const [firstSectionHeight, setFirstSectionHeight] = useState<number>(0);

  useEffect(() => {
    if (firstSectionRef.current) {
      setFirstSectionHeight(firstSectionRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className={css.wrapper}>
      <h2 className={`text-muted-foreground leading-none mb-4`}>
        Prévia
      </h2>
      <nav className={`flex gap-3 mb-5`}>
        {componentExamples.map((item) => (
          <Button
            variant="outline"
            key={item}
            className={`capitalize ${selectedComponent === item && "ring ring-blue-400/66 shadow-xs"}`}
            onClick={() => setSelectedComponent(item)}
          >
            {item}
          </Button>
        ))}
      </nav>
      <section
        className={css.section}
        style={{ minHeight: firstSectionHeight || "auto" }}
      >
        {selectedComponent === "títulos" && (
          <TitlesSection ref={firstSectionRef} />
        )}
        {selectedComponent === "paragráfos" && <ParagraphsSection />}
        {selectedComponent === "botões" && <ButtonsSection />}
        {selectedComponent === "formulários" && <FormsSection />}
      </section>
    </div>
  );
};

export default Prev;
