import { MediaQueryGenerator } from "@/components/MediaQueryGenerator";
import { DivisionCalculator } from "@/components/DivisionCalculator";
import { Code2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-3 animate-in fade-in slide-in-from-top duration-500">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-3 bg-linear-to-br from-primary to-end rounded-xl shadow-lg">
              <Code2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-primary to-end bg-clip-text text-transparent">
            Dev Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas essenciais para desenvolvimento web
          </p>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Media Query Generator - Takes 2 columns */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left duration-700">
            <MediaQueryGenerator />
          </div>

          {/* Division Calculator - Takes 1 column */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <DivisionCalculator />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 animate-in fade-in duration-1000">
          <p>Desenvolvido com React, TypeScript e Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
