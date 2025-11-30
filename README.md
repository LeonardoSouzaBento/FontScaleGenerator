# 🎨 CSS Tools - Gerador de Font Sizes Responsivos

Uma aplicação web que facilita a criação de tamanhos de fonte responsivos para **Tailwind CSS** e **Styled Components**.

**CSS Tools** é uma ferramenta desenvolvida para simplificar o processo de criação de tipografia responsiva. Ao invés de definir manualmente media queries para cada breakpoint, esta aplicação gera automaticamente o código necessário com base em valores mínimos e máximos de tamanho de fonte.

## ✨ Funcionalidade

Gera classes de tamanho de fonte responsivas com interpolação linear entre breakpoints.

**Características:**

- Entrada de tamanhos mínimo e máximo em pixels
- Configuração de bases personalizadas para diferentes breakpoints
- Geração para Tailwind CSS (classes utilitárias)
- Geração para Styled Components (media queries CSS)
- Cópia para área de transferência com um clique

## 🛠️ Tecnologias Utilizadas

### Core

- **[React](https://react.dev/)** `18.3.1` - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** `5.8.3` - Superset tipado de JavaScript
- **[Vite](https://vitejs.dev/)** `5.4.19` - Build tool e dev server ultrarrápido

### Estilização

- **[Tailwind CSS](https://tailwindcss.com/)** `4.1.17` - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e sem estilo
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

### UI Components

- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis construídos com Radix UI
- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast elegantes

### Roteamento e Estado

- **[React Router DOM](https://reactrouter.com/)** `6.30.1` - Roteamento declarativo
- **[TanStack Query](https://tanstack.com/query)** `5.83.0` - Gerenciamento de estado assíncrono

### Processo de uso

1. **Defina os tamanhos em pixels:**

   - **Tamanho mínimo**: O tamanho da fonte em telas pequenas (ex: 17.5px)
   - **Tamanho máximo**: O tamanho da fonte em telas grandes (ex: 18.5px)

2. **Configure as bases:**

   - **Base mínima**: Tamanho base da fonte em telas pequenas (padrão: 17.5)
   - **Base máxima**: Tamanho base da fonte em telas grandes (padrão: 18.5)

3. **Escolha o formato de saída:**

   - **Tailwind**: Gera classes utilitárias do Tailwind CSS
   - **Styled Components**: Gera media queries CSS

4. **Copie o código gerado**

#### Exemplo de Saída - Tailwind CSS

```html
text-[0.94595em] sm:text-[0.97297em] md:text-[0.98649em] lg:text-[0.99324em]
xl:text-[1.00000em] 2xl:text-[1.01351em]
```

#### Exemplo de Saída - Styled Components

```css
@media screen and (max-width: 375px) {
  font-size: 0.94595em;
}
@media screen and (min-width: 375px) and (max-width: 576px) {
  font-size: 0.97297em;
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  font-size: 0.98649em;
}
@media screen and (min-width: 769px) and (max-width: 992px) {
  font-size: 0.99324em;
}
@media screen and (min-width: 993px) and (max-width: 1200px) {
  font-size: 1em;
}
@media screen and (min-width: 1201px) {
  font-size: 1em;
}
```

## 📁 Estrutura do Projeto

```
css-tools/
├── public/                      # Arquivos estáticos
│   ├── favicon.ico
│   ├── placeholder.svg
│   ├── robots.txt
│   └── _redirects
├── src/
│   ├── components/              # Componentes React
│   │   ├── ui/                  # Componentes shadcn/ui
│   │   ├── MediaQueryGenerator.tsx  # Gerador principal
│   │   ├── DivisionCalculator.tsx   # Calculadora
│   │   └── NavLink.tsx          # Componente de navegação
│   ├── functions/               # Funções utilitárias
│   │   ├── gerarStyledComponents.ts # Gera CSS para Styled Components
│   │   └── gerarTailwind.ts     # Gera classes Tailwind
│   ├── hooks/                   # Custom React Hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                     # Bibliotecas e utilitários
│   │   └── utils.ts
│   ├── pages/                   # Páginas da aplicação
│   │   ├── Index.tsx            # Página principal
│   │   └── NotFound.tsx         # Página 404
│   ├── App.tsx                  # Componente raiz
│   ├── main.tsx                 # Ponto de entrada
│   └── index.css                # Estilos globais e tema
├── index.html                   # HTML principal
├── vite.config.ts              # Configuração do Vite
├── tsconfig.json               # Configuração do TypeScript
├── components.json             # Configuração do shadcn/ui
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo
```

## 🧮 Algoritmo de Geração

### Tailwind CSS

O algoritmo para Tailwind CSS funciona da seguinte forma:

1. **Conversão para EM**: Os valores em pixels são convertidos para `em` usando as bases fornecidas
2. **Interpolação Linear**: Para cada breakpoint intermediário, calcula-se o tamanho usando interpolação linear
3. **Extrapolação para 2xl**: O breakpoint `2xl` continua o crescimento linear além do `xl`

**Breakpoints utilizados:**

- Base: `375px`
- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`
- `2xl`: `1536px`

### Styled Components

O algoritmo para Styled Components:

1. **Conversão para EM**: Similar ao Tailwind, converte px para em
2. **Conversão para PX**: Converte em para px (usando 16px como base) para interpolação
3. **Interpolação Linear**: Calcula tamanhos intermediários
4. **Clamping**: Garante que os valores fiquem entre min e max
5. **Media Queries**: Gera media queries para cada faixa de breakpoint

**Breakpoints utilizados:**

- Até `375px`: Tamanho mínimo
- `375px - 576px`: Interpolação
- `577px - 768px`: Interpolação
- `769px - 992px`: Interpolação
- `993px - 1200px`: Interpolação
- Acima de `1201px`: Tamanho máximo

---

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

---

## 👨‍💻 Autor

**Leonardo Souza Bento**

- GitHub: [@LeonardoSouzaBento](https://github.com/LeonardoSouzaBento)

<div align="center">

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
