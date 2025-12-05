import { Code2 } from "lucide-react";

const Header = () => {
  return (
    <header
      className={`w-full mx-auto px-4 text-center space-y-3 animate-in fade-in 
        slide-in-from-top duration-500 mb-8 sm:flex gap-5 justify-center xl:justify-start
        xl:pl-0 max-w-7xl`}
    >
      <div className={`flex items-center justify-center gap-3 mb-2 sm:mb-0`}>
        <div
          className={`p-3 bg-linear-to-br from-primary to-end rounded-xl shadow-lg`}
        >
          <Code2 className={`h-8 w-8 text-white`} />
        </div>
      </div>

      <div>
        <h1
          className={`text-3xl h-auto sm:text-4xl font-bold bg-linear-to-r from-primary
             to-end bg-clip-text pb-3 mb-0 text-transparent capitalize sm:text-left`}
        >
          typographic scale generator
        </h1>
        <p
          className={`text-lg text-muted-foreground max-w-2xl 
            mx-auto px-3 sm:text-left sm:pl-2`}
        >
          Gere o CSS de escala tipográfica do seu projeto
        </p>
      </div>
    </header>
  );
};

export default Header;
