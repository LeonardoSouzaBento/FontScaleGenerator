import { Code2 } from "lucide-react";

const Header = () => {
  return (
    <header
      className={`w-full mx-auto max-w-2xl px-4 sm:px-0 sm:w-[calc(100%-3rem)] text-center animate-in fade-in 
        slide-in-from-top duration-500 mb-8 sm:flex gap-4 justify-center sm:justify-start
        xl:max-w-7xl`}
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
          className={`h-auto big-h1 font-extrabold bg-linear-to-r from-primary
             to-end bg-clip-text pb-2 mb-0 text-transparent capitalize sm:text-left`}
        >
          typographic scale generator
        </h1>
        <p
          className={` text-muted-foreground max-w-2xl 
            mx-auto px-3 sm:text-left sm:pl-1.5 text-lg`}
        >
          Gere o CSS de escala tipográfica do seu projeto
        </p>
      </div>
    </header>
  );
};

export default Header;
