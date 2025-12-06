import { useState } from "react";
import Header from "@/components/header";
import HierarchyGenerator from "@/components/hierarchy-generator";
import Prev from "@/components/prev";
import { defaultCssValues } from "@/data/scaleVars";
import { CssValues } from "@/types";
import { Card, CardContent } from "@/ui/card";
import Output from "@/ui/output";

const outputExample = `body {
  font-size: clamp(1.093750em, calc(1.006875em + 0.013574vw), 1.180625em);
}

.big-h1 {
  font-size: clamp(1.722142em, calc(1.585355em + 0.021373vw), 1.858929em);
}

h1 {
  font-size: clamp(1.614004em, calc(1.485806em + 0.020031vw), 1.742202em);
}

h2 {
  font-size: clamp(1.512656em, calc(1.392508em + 0.018773vw), 1.632804em);
}

h3 {
  font-size: clamp(1.417672em, calc(1.305068em + 0.017594vw), 1.530276em);
}

h4 {
  font-size: clamp(1.328652em, calc(1.223119em + 0.016490vw), 1.434185em);
}

h5 {
  font-size: clamp(1.245222em, calc(1.146315em + 0.015454vw), 1.344129em);
}

h6 {
  font-size: clamp(1.167031em, calc(1.074335em + 0.014484vw), 1.259727em);
}

.big-p {
  font-size: clamp(1.167031em, calc(1.074335em + 0.014484vw), 1.259727em);
}

.normal-p {
  font-size: 1.00em;
}

.small-p {
  font-size: clamp(1.025070em, calc(0.943650em + 0.012722vw), 1.106490em);
}

.smaller-p {
  font-size: clamp(0.960703em, calc(0.884396em + 0.011923vw), 1.037010em);
}`;

const Index = () => {
  const [cssValues, setCssValues] = useState<CssValues[]>(defaultCssValues);
  const [output, setOutput] = useState<string>("");

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
            />
          </CardContent>
        </Card>
        <Output
          output={output}
          secondOutput={""}
          outputExample={outputExample}
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
