# Portfolio

Portfolio pessoal em Next.js (App Router) com layout em secoes e conteudo centralizado em um unico arquivo de dados.

## Recursos

- Secoes de hero, sobre, formacao, habilidades, projetos e contato
- Conteudo editavel via [src/data/portfolio.ts](src/data/portfolio.ts)
- Animacoes suaves e botao de voltar ao topo
- Estilos com Tailwind CSS v4 e tipografia via `next/font`

## Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Estrutura do projeto

- [src/app/page.tsx](src/app/page.tsx): organiza as secoes da home
- [src/components/sections](src/components/sections): componentes das secoes
- [src/components/SectionHeader.tsx](src/components/SectionHeader.tsx): cabecalhos reutilizaveis
- [src/data/portfolio.ts](src/data/portfolio.ts): dados de perfil e conteudo
- [public/avatar.jpg](public/avatar.jpg): foto principal
- [public/cv.pdf](public/cv.pdf): curriculo para download

## Personalizacao rapida

1. Edite dados e textos em [src/data/portfolio.ts](src/data/portfolio.ts)
2. Troque a foto em [public/avatar.jpg](public/avatar.jpg)
3. Substitua o CV em [public/cv.pdf](public/cv.pdf)
4. Ajuste cores e tema em [src/app/globals.css](src/app/globals.css)
5. Atualize metadados em [src/app/layout.tsx](src/app/layout.tsx)

## Como rodar

1. Instale dependencias: `npm install`
2. Inicie o servidor: `npm run dev`
3. Abra o app no navegador.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de producao
- `npm run start`: inicia o servidor de producao
- `npm run lint`: lint do projeto

## Observacoes

- O formulario de contato e demonstrativo; conecte a um backend ou servico quando desejar.
