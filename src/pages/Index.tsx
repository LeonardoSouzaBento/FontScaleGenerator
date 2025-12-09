import Header from "@/components/header-and-footer/header";
import HierarchyGenerator from "@/components/hierarchy-generator";
import Prev from "@/components/prev";
import RelevantQuestions from "@/components/RelevantQuestions";
import { useResizeWatcher } from "@/hooks/useResizeWatcher";
import { ClampValue } from "@/types";
import { Card, CardContent } from "@/ui/card";
import Output from "@/ui/output";
import { useEffect, useRef, useState } from "react";

const mainCss = `h-max pb-8 px-3 sm:px-6 max-w-2xl xl:max-w-7xl mx-auto box-content`;

const Index = () => {
  const [clampValues, setClampValues] = useState<ClampValue>({});
  const [output, setOutput] = useState<string>("");
  const [cardHeight, setCardHeight] = useState<number>(0);
  const [wasResize, setWasResize] = useState<number>();
  const cardRef = useRef<HTMLDivElement>(null);
  useResizeWatcher(setWasResize);

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (wasResize && cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [wasResize]);

  return (
    <div className={`min-h-screen py-8`}>
      <Header />

      <main
        className={`${mainCss}
          overflow-hidden grid grid-rows-2 xl:grid-rows-1 
          xl:grid-cols-2 gap-8 relative`}
      >
        <Card ref={cardRef} className={`w-full h-max min-h-max mx-auto`}>
          <CardContent>
            <HierarchyGenerator
              setOutput={setOutput}
              setClampValues={setClampValues}
            />
          </CardContent>
        </Card>
        <Output cardHeight={cardHeight} output={output} />
      </main>

      <div className={`${mainCss}`}>
        <Prev clampValues={clampValues} />
        <RelevantQuestions />
      </div>

      <footer
        className={`text-center  text-muted-foreground animate-in fade-in duration-1000`}
      >
        <p>Desenvolvido com React, TypeScript e Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;
