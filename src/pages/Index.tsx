import Footer from "@/components/footer";
import Header from "@/components/header";
import HierarchyGenerator from "@/components/hierarchy-generator";
import Prev from "@/components/prev";
import PersonalGuidelines from "@/components/prev/personal-guidelines";
import RelevantQuestions from "@/components/relevant-questions";
import { useResizeWatcher } from "@/hooks/useResizeWatcher";
import { ClampValue } from "@/types";
import { Card, CardContent } from "@/ui/card";
import Output from "@/ui/output";
import { useEffect, useRef, useState } from "react";

const mainCss = `h-max px-3 sm:px-6 max-w-2xl xl:max-w-7xl mx-auto box-content`;

const Index = () => {
  const [clampValues, setClampValues] = useState<ClampValue>({});
  const [output, setOutput] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
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
          pb-7 overflow-hidden grid grid-rows-2 xl:grid-rows-1 
          xl:grid-cols-2 gap-7 relative`}
      >
        <Card ref={cardRef} className={`w-full h-max min-h-max mx-auto`}>
          <CardContent>
            <HierarchyGenerator
              output={output}
              setOutput={setOutput}
              setClampValues={setClampValues}
              disabled={disabled}
              setDisabled={setDisabled}
            />
          </CardContent>
        </Card>
        <Output cardHeight={cardHeight} output={output} disabled={disabled}/>
      </main>

      <div className={`${mainCss} mb-8`}>
        <Prev clampValues={clampValues} />
        <div className={`flex flex-col xl:grid xl:grid-rows-1 xl:grid-cols-2 gap-7`}>
          <PersonalGuidelines />
          <RelevantQuestions />
        </div>
      </div>

     <Footer />
    </div>
  );
};

export default Index;
