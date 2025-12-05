## 🛣️ Objetivo Typographic Scale Generator

Criar tamanhos de fonte responsivos de forma profissional, evitando que a diferença de tamanho das tags siga uma hierarquia despadronizada e que a versão de desktop do site tenha tamanhos de fonte muito pequenos.
.

## 🎯 O que ele oferece ?

- Oferece copiar para área de transferência o CSS com tamanhos responsivos para a maior parte das tags
  e seguindo a escala escolhida.

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

1. **Defina os tamanhos mínimo e máximo de fonte em pixels**

2. **Escolha a escala**

3. **Clique em gerar**

4. **Copie o código gerado**

## 🧮 Processo do algoritmo

1. **Extrapolar para 1530px**
   Os valores de entrada recebidos para min-width 640px e min-width 1280px são usadas para calcular os valor de min-width 1530px com a função `deduceFontAt1530px` que faz

```js
const slope = (font1280 - font640) / (midWidth - minWidth);
const font1530 = font640 + slope \* (targetWidth - minWidth);

return Number(font1530.toFixed(2));
```

2. **Converter para em e chamar scaleSizesAndReturn**

```js
const minEm = newMinBase / 16;
const maxEm = realMaxBase / 16;

const fullCss = scaleSizesAndReturn(minEm, maxEm, scaleValue);
setOutput(fullCss);
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

4. **Função final: scaleSizesAndReturn**

```js
// Gerar os valores escalados
const scaledList = sizes.map((item) => {
  return {
    ...item,
    minSize: Number((minSizeBody * Math.pow(scaleValue, item.pow)).toFixed(6)),
    maxSize: Number((maxSizeBody * Math.pow(scaleValue, item.pow)).toFixed(6)),
  };
});

// Formatar o CSS
const formattedCSS = scaledList
  .map(({ tagName, minSize, maxSize }) => {
    if (tagName === ".normal-p")
      return `${tagName} {\n  font-size: 1em;\n}`;
    else {
      const clamp = generateClampEm(minSize, maxSize);
      return `${tagName} {\n  ${clamp}\n}`;
    }
  })
  .join("\n\n");

return formattedCSS;
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
