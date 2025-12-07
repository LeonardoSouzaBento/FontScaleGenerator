import { useResizeWatcher } from "@/hooks/useResizeWatcher";
import { Card } from "@/ui/card";
import { useEffect, useRef, useState } from "react";
import ButtonsSection from "./prev/buttons-section";
import FormsSection from "./prev/forms-section";
import Nav from "./prev/nav";
import ParagraphsSection from "./prev/paragraphs-section";
import TitlesSection from "./prev/titles-section";

const sectionsSizesMap = [
  { titles: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  { paragraphs: ["p", ".big-p", ".normal-p", ".small-p", ".smaller-p"] },
  { buttons: ["button"] },
  { forms: ["form"] },
];

const css = {
  wrapper: `mb-8 mx-auto w-[calc(100%-1.5rem)] max-w-2xl xl:max-w-7xl`,
  section: `space-y-5 border-t rounded-none py-4 box-content`,
};

const Prev = () => {
  const [componentExamples, setComponentExamples] = useState<string[]>([
    "títulos",
    "parágrafos",
    "botões",
    "formulários",
  ]);
  const [selectedComponent, setSelectedComponent] = useState<string>("títulos");
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const [firstSectionHeight, setFirstSectionHeight] = useState<number>(0);
  const [wasResize, setWasResize] = useState<number>();
  useResizeWatcher(setWasResize);

  useEffect(() => {
    if (firstSectionRef.current) {
      setFirstSectionHeight(firstSectionRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (wasResize) {
      setFirstSectionHeight(firstSectionRef.current.offsetHeight);
    }
  }, [wasResize]);

  return (
    <Card className={css.wrapper}>
      <div className={`space-y-4 pb-5`}>
        <h3 className={`text-muted-foreground leading-none`}>Prévia:</h3>
        <Nav
          componentExamples={componentExamples}
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </div>
      <section
        className={css.section}
        style={{ height: firstSectionHeight || "auto" }}
      >
        {selectedComponent === "títulos" && (
          <TitlesSection props={{ ref: firstSectionRef }} />
        )}
        {selectedComponent === "parágrafos" && <ParagraphsSection />}
        {selectedComponent === "botões" && <ButtonsSection />}
        {selectedComponent === "formulários" && <FormsSection />}
      </section>
    </Card>
  );
};

export default Prev;
