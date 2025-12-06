const FormsSection = () => {
  return (
    <>
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
    </>
  );
};

export default FormsSection;
