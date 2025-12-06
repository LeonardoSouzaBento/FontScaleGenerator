import { useState } from "react";

const css = {
  h1: ``,
  p: ``,
  h2: ``,
  h3: ``,
  h4: ``,
  h5: ``,
  h6: ``,
};

type CssValues = {
  h1: string;
  p: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
};

const TitlesSection = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
  const [styles, setStyles] = useState<CssValues>(css);

  return (
    <div ref={ref}>
      <h1 className={styles.h1}>Nome Marca</h1>
      <h1 className={styles.h1}>Heading 1 - Título Principal</h1>
      <p className={styles.p}>
        Bloco curto: Texto curto para testar espaçamento entre headings e
        blocos.
      </p>

      <h2 className={styles.h2}>Heading 2 - Subtítulo Secundário</h2>
      <p className={styles.p}>
        Bloco longo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam condimentum dolor sit amet elit tristique, vel dictum lacus
        tincidunt. Integer sit amet dignissim turpis. Sed vulputate neque quis
        magna blandit convallis. Pellentesque id nibh vehicula, pretium ipsum
        vel, dapibus mi.
      </p>

      <h3 className={styles.h3}>Heading 3 - Seção</h3>
      <h4 className={styles.h4}>Heading 4 - Sub-seção</h4>
      <h5 className={styles.h5}>Heading 5 - Título Menor</h5>
      <h6 className={styles.h6}>Heading 6 - Título Bem Pequeno</h6>
    </div>
  );
};

export default TitlesSection;
