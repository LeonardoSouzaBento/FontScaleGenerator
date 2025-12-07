import { useState } from "react";
import Header from "@/components/header-and-footer/header";
import HierarchyGenerator from "@/components/hierarchy-generator";
import Prev from "@/components/prev";
import { defaultCssValues } from "@/data/scaleVars";
import { CssValues } from "@/types";
import { Card, CardContent } from "@/ui/card";
import Output from "@/ui/output";
import { outputExample } from "@/data/outputExample";

const Index = () => {
  const [cssValues, setCssValues] = useState<CssValues[]>(defaultCssValues);
  const [output, setOutput] = useState<string>("");
  const [secondOutput, setSecondOutput] = useState<string>("");

  return (
    <div className={`min-h-screen py-8`}>
      <Header />

      <main
        className={`h-max pb-8 px-3 sm:px-6 max-w-2xl xl:max-h-96 xl:max-w-7xl mx-auto box-content  
          overflow-hidden grid grid-rows-[auto, auto] xl:grid-rows-1 
          xl:grid-cols-2 gap-8 relative`}
      >
        <Card
          className={`w-full h-max min-h-max pt-6 pb-0.5 mx-auto shadow-lg 
            hover:shadow-xl transition-shadow duration-300`}
        >
          <CardContent>
            <HierarchyGenerator
              setCssValues={setCssValues}
              setOutput={setOutput}
              setSecondOutput={setSecondOutput}
              cssValues={cssValues}
            />
          </CardContent>
        </Card>
        <Output
          output={output}
          secondOutput={secondOutput}
        />
      </main>

      <Prev />

      <footer
        className={`text-center  text-muted-foreground animate-in fade-in duration-1000`}
      >
        <p>Desenvolvido com React, TypeScript e Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;
