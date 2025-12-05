const sectionsSizesMap = [
  { titles: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  { paragraphs: ["p", ".big-p", ".normal-p", ".small-p", ".smaller-p"] },
  { buttons: ["button"] },
];

const css = {
  wrapper: `mb-8 mx-auto w-[calc(100%-1.5rem)] max-w-2xl xl:max-w-7xl 
    space-y-5 bg-white p-6 rounded-lg shadow-lg 
    hover:shadow-xl transition-shadow duration-300`,
  section: `space-y-5 border rounded-lg p-5`,
};

const Prev = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.section}>
        <h1>Nome Marca</h1>
        <h1>Heading 1 - Título Principal</h1>
        <p>
          Bloco curto: Texto curto para testar espaçamento entre headings e
          blocos.
        </p>

        <h2>Heading 2 - Subtítulo Secundário</h2>
        <p>
          Bloco longo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam condimentum dolor sit amet elit tristique, vel dictum lacus
          tincidunt. Integer sit amet dignissim turpis. Sed vulputate neque quis
          magna blandit convallis. Pellentesque id nibh vehicula, pretium ipsum
          vel, dapibus mi.
        </p>

        <h3>Heading 3 - Seção</h3>
        <h4>Heading 4 - Sub-seção</h4>
        <h5>Heading 5 - Título Menor</h5>
        <h6>Heading 6 - Título Bem Pequeno</h6>
      </section>

      <section className={css.section}>
        <h2>Variações de Parágrafo</h2>
        <p className="p-lg">
          Parágrafo Grande — ideal para introduções, heros ou destaque moderado.
        </p>
        <p className="p-md">Parágrafo Padrão — usado para leitura contínua.</p>
        <p className="p-sm">
          Parágrafo Pequeno — usado para textos auxiliares, notas e descrições.
        </p>
        <p className="p-xs">
          Parágrafo Extra Pequeno — ideal para rótulos, avisos de rodapé e
          microtexto.
        </p>
      </section>

      <section className={css.section}>
        <h2>Botões em Escala</h2>
        <button className="btn-lg">Botão Grande</button>
        <button className="btn-md">Botão Médio</button>
        <button className="btn-sm">Botão Pequeno</button>
      </section>

      <section className={css.section}>
        <h2>Formulário de Teste</h2>
        <form>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" placeholder="Digite seu nome" />
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="email@exemplo.com" />
          <label htmlFor="assunto">Assunto</label>
          <select id="assunto">
            <option>Suporte</option>
            <option>Feedback</option>
            <option>Outros</option>
          </select>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows={4}
            placeholder="Digite sua mensagem"
          ></textarea>
          <button type="submit" className="btn-md">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Prev;
