# Portfolio

Portfolio pessoal em Next.js (App Router) com layout em secoes, conteudo centralizado em um unico arquivo de dados e suporte a PT/EN.

## Recursos

- Secoes de hero, sobre, formacao, habilidades, projetos e contato
- Conteudo editavel por idioma em [src/data/portfolio.ts](src/data/portfolio.ts)
- Alternancia de idioma com rotas /pt e /en
- Animacoes suaves e botao de voltar ao topo
- Estilos com Tailwind CSS v4 e tipografia via `next/font`

## Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Rotas e idiomas

- Rotas: /pt e /en (middleware redireciona com base no Accept-Language)
- Idioma padrao: pt
- Seletor de idioma no header
- Configuracao em [src/i18n/config.ts](src/i18n/config.ts)
- Metadados e textos por idioma em [src/data/portfolio.ts](src/data/portfolio.ts)

## Estrutura do projeto

- [src/app/[locale]/page.tsx](src/app/%5Blocale%5D/page.tsx): organiza as secoes da home por idioma
- [middleware.ts](middleware.ts): redireciona e injeta header de locale
- [src/components/sections](src/components/sections): componentes das secoes
- [src/components/SectionHeader.tsx](src/components/SectionHeader.tsx): cabecalhos reutilizaveis
- [src/data/portfolio.ts](src/data/portfolio.ts): dados de perfil, textos e metadados por idioma
- [src/i18n/config.ts](src/i18n/config.ts): definicao de locales
- [public/avatar.jpg](public/avatar.jpg): foto principal
- [public/cv.pdf](public/cv.pdf): curriculo para download

## Personalizacao rapida

1. Edite textos PT/EN em [src/data/portfolio.ts](src/data/portfolio.ts)
2. Troque a foto em [public/avatar.jpg](public/avatar.jpg)
3. Substitua o CV em [public/cv.pdf](public/cv.pdf)
4. Ajuste cores e tema em [src/app/globals.css](src/app/globals.css)
5. Atualize metadados por idioma em [src/data/portfolio.ts](src/data/portfolio.ts)

## Como rodar

1. Instale dependencias: `npm install`
2. Inicie o servidor: `npm run dev`
3. Abra http://localhost:3000/pt ou http://localhost:3000/en

## Variaveis de ambiente

Copie [.env.example](.env.example) para `.env.local` e preencha:

- RESEND_API_KEY
- CONTACT_RECEIVER
- CONTACT_SENDER
- NEXT_PUBLIC_TURNSTILE_SITE_KEY
- TURNSTILE_SECRET_KEY

## Formulario de contato

O endpoint do formulario esta em [src/app/api/contact/route.ts](src/app/api/contact/route.ts) e envia emails via Resend.
O formulario usa Cloudflare Turnstile como protecao anti-spam. Para trocar de dominio, atualize os Allowed hostnames no painel do Turnstile.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de producao
- `npm run start`: inicia o servidor de producao
- `npm run lint`: lint do projeto

## Observacoes

- O formulario envia emails via Resend quando as variaveis de ambiente estao configuradas.
