import Header from "@/components/header";
import HierarchyGenerator from "@/components/hierarchy-generator";
import { Card, CardContent } from "@/ui/card";
import Output from "@/ui/output";
import { useState } from "react";

const Index = () => {
  const [output, setOutput] = useState<string>("");
  const outputExample = "body { clamp ;}";

  return (
    <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8`}>
      <div className={`max-w-7xl mx-auto space-y-8`}>
        <Header />

        <main className={`max-h-136 grid grid-cols-1 xl:grid-cols-2 gap-5.5`}>
          <Card
            className={`w-full pt-6 max-w-2xl mx-auto shadow-lg hover:shadow-xl
             transition-shadow duration-300`}
          >
            <CardContent>
              <HierarchyGenerator output={output} setOutput={setOutput}/>
            </CardContent>
          </Card>
          <Output output={output} outputExample={outputExample} />
        </main>

        {/* Footer */}
        <footer
          className={`text-center text-sm text-muted-foreground pt-8 animate-in fade-in duration-1000`}
        >
          <p>Desenvolvido com React, TypeScript e Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
