## 🛣️ Oque é e para que serve o Typographic Scale Generator

Typographic Scale Generator cria tamanhos de fonte responsivos de forma profissional para que voce.
Copie para área de transferência o CSS com tamanhos responsivos e tenha tags seguindo uma hierarquia de tamanho padronizada.

#### Exemplo de Saída -

```css
body {
  font-size: clamp(1.09375rem, calc(1.006875rem + 0.013574vw), 1.180625rem);
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
/*... e assim por diante*/
```

## 🧐 Processo de uso

1. Defina os tamanhos mínimo e máximo de fonte em pixels
2. Escolha a escala
3. Clique em gerar
4. Copie o código gerado

## 🧮 Principais processos do algoritmo

**Extrapolar para 1530px**
Se 1280 tem 100% da diferença entre os valores minimos e maximo, 1536 tem 120%.
```js
const font1536 = 1.2 * (font1280 - font640) + font640;
```

**Converter para em**

```js
const minEm = newMinBase / 16;
const maxEm = realMaxBase / 16;
```

3. **Receber os dados**

Usamos um objeto como esse:

```js
const item = { tagName: ".normal-p", minSize: 0, maxSize: 0, pow: 0 };
```

Pow é o fator de potencia:

```js
{ tagName: "h4", ... pow: 3 }, // tamanho base * escala * escala * escala
{ tagName: "h5", ... pow: 2 }, // tamanho base * escala * escala
{ tagName: "h6", ... pow: 1 }, // tamanho base * escala
{ tagName: ".normal-p", ... pow: 0, }, // tamanho base (recebido)
```

4. **Funções que cauculam os valores**

```js
// Gerar para o body
  const breakpoints: string[] = ["", "sm", "md", "lg", "xl", "2xl"];

  const calcFontSize = (index: number) => {
    // 0, 640, 768, 1024, 1280, 1536
    const proportions: number[] = [0, 0.5, 0.6, 0.8, 1, 1.2];
    const size = proportions[index] * (font1280 - minFontSize) + minFontSize;
    return `${size}`;
  };

// Gerar o clamp individual
const slope = (maxFont - minFont) / (maxWidth - minWidth);
  const yAxisIntersection = minFont - slope * minWidth;

  const slopeVw = slope * 100;
  const preferred = `calc(${yAxisIntersection.toFixed(
    6
  )}rem + ${slopeVw.toFixed(6)}vw)`;

  return `font-size: clamp(${minFont.toFixed(
    6
  )}rem, ${preferred}, ${maxFont.toFixed(6)}rem);`;
```

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

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 👨‍💻 Autor

**Leonardo Souza Bento**

- GitHub: [@LeonardoSouzaBento](https://github.com/LeonardoSouzaBento)

<div align="center">

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**

</div>
````
