import { useResizeWatcher } from "@/hooks/useResizeWatcher";
import { ClampValue } from "@/types";
import { Card } from "@/ui/card";
import { useEffect, useRef, useState } from "react";
import ButtonsSection from "./prev/buttons-section";
import FormsSection from "./prev/forms-section";
import Nav from "./prev/nav";
import ParagraphsSection from "./prev/paragraphs-section";
import TitlesSection from "./prev/titles-section";

const css = {
  wrapper: `w-full mb-7 mx-auto`,
  section: `min-h-max space-y-5 border-t rounded-none py-4 box-content`,
};

export const componentExamples = [
  "títulos",
  "parágrafos",
  "botões",
  "formulários",
];

const Prev = ({ clampValues }: { clampValues: ClampValue }) => {
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
        <h3 className={`text-primary leading-none`}>Prévia:</h3>
        <Nav
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </div>
      <section
        className={css.section}
        style={{ height: firstSectionHeight || "auto" }}
      >
        {selectedComponent === "títulos" && (
          <TitlesSection
            props={{ ref: firstSectionRef }}
            clampValues={clampValues}
          />
        )}
        {selectedComponent === "parágrafos" && (
          <ParagraphsSection clampValues={clampValues} />
        )}
        {selectedComponent === "botões" && (
          <ButtonsSection clampValues={clampValues} />
        )}
        {selectedComponent === "formulários" && (
          <FormsSection clampValues={clampValues} />
        )}
      </section>
    </Card>
  );
};

export default Prev;
