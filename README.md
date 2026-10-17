# GRBZ Advogadas Associadas — site institucional

Site institucional do escritório **GRBZ Advogadas Associadas** (Guerino Rodrigues Breda Zuccolotto), de Aracruz - ES.

## Sumário

1. [Sobre o projeto](#sobre-o-projeto)
2. [Tecnologias](#tecnologias)
3. [Como rodar localmente](#como-rodar-localmente)
4. [Scripts disponíveis](#scripts-disponíveis)
5. [Estrutura do projeto](#estrutura-do-projeto)
6. [Como alterar o conteúdo](#como-alterar-o-conteúdo)
7. [Identidade visual](#identidade-visual)
8. [Convenções de código](#convenções-de-código)
9. [Publicação e CI/CD](#publicação-e-cicd)
10. [Notas para quem for dar suporte](#notas-para-quem-for-dar-suporte)
11. [Pendências conhecidas](#pendências-conhecidas)

## Sobre o projeto

É um site **estático** (sem backend, sem banco de dados e sem painel administrativo), de página única, cujo objetivo é
apresentar o escritório e facilitar o contato de novos clientes, principalmente pelo WhatsApp.

Seções da página:

| Seção | Descrição |
|---|---|
| Barra superior | Logo, menu de navegação, botão do Instagram e botão "Fale conosco" (WhatsApp). Fixa no topo; no celular vira menu hambúrguer. |
| Carrossel | Destaques em tela cheia, com troca automática (pausa ao passar o mouse ou focar) e controles. |
| Advogadas | Foto, nome e cargo das sócias. |
| Áreas de atuação | Cartões das áreas; ao clicar abre um diálogo com a descrição, exemplos e botão de WhatsApp com mensagem pronta. |
| Localização | Endereço e mapa do Google. |
| Contato | WhatsApp, telefone, e-mail e Instagram. |
| Rodapé | Logo e aviso legal (publicidade na advocacia, OAB). |

Há ainda um botão flutuante de WhatsApp, visível em toda a página.

## Tecnologias

- [Angular 19](https://angular.dev) (componentes standalone, signals, controle de fluxo `@if`/`@for`, `OnPush`)
- TypeScript em modo estrito e SCSS
- Fontes **Lora** e **Roboto**, instaladas via npm (`@fontsource`) e servidas pelo próprio site, sem depender do Google Fonts
- Ícones em um sprite SVG próprio (`public/icons/sprite.svg`), sem biblioteca de ícones
- Testes com Karma + Jasmine
- GitHub Actions (CI/CD) e Cloudflare Pages (hospedagem)

## Como rodar localmente

### Pré-requisitos

- [Node.js 22](https://nodejs.org) (a versão está em `.nvmrc`; com `nvm`, basta rodar `nvm use`)
- npm (já vem com o Node)
- Google Chrome, apenas para rodar os testes

### Passo a passo

```bash
# 1. clonar o repositório
git clone https://github.com/captainitsolution/grbz-front.git
cd grbz-front

# 2. instalar as dependências
npm ci

# 3. subir o servidor de desenvolvimento
npm start
```

Abra <http://localhost:4200>. A página recarrega sozinha a cada alteração nos arquivos.

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm start` | Servidor de desenvolvimento em `http://localhost:4200`. |
| `npm run build` | Build de produção em `dist/grbz-front/browser`. |
| `npm run watch` | Build de desenvolvimento que recompila a cada alteração. |
| `npm test` | Testes unitários em modo watch (abre o Chrome). |
| `npm run test:ci` | Testes uma única vez, em Chrome headless. É o que o CI executa. |

Antes de abrir um pull request, rode `npm run test:ci` e `npm run build`: são exatamente as verificações do CI.

## Estrutura do projeto

```
src/
  index.html               título, descrição, ícones e metadados para redes sociais
  styles.scss              variáveis de design (cores, fontes, espaçamentos), base e botões
  app/
    app.component.*        monta a página juntando as seções
    components/            uma pasta por seção (header, hero-carousel, team, practice-areas, location,
                           contact, footer, whatsapp-button)
    shared/                peças reutilizáveis (ícone, cabeçalho de seção)
    data/                  conteúdo do site (textos, contatos, advogadas, áreas, slides, menu)
    models/                interfaces TypeScript do conteúdo
    utils/                 funções puras (ex.: montagem dos links de WhatsApp)
public/
  images/brand/            logos (versões marrom e creme), ícone/favicon e imagem de compartilhamento
  images/hero/             fotos do carrossel (WebP otimizado)
  images/team/             fotos das advogadas
  images/areas/            ilustrações das áreas de atuação (SVG)
  icons/sprite.svg         ícones da interface
  _headers                 cabeçalhos HTTP de segurança e cache (Cloudflare Pages)
  robots.txt
.github/workflows/         pipeline de CI/CD
```

## Como alterar o conteúdo

O conteúdo fica separado da apresentação, em `src/app/data/`. Na maioria dos casos **não é preciso mexer nos componentes**.

| O que mudar | Onde |
|---|---|
| Nome, telefone, e-mail, Instagram e endereço | `src/app/data/site.config.ts` |
| Advogadas (nome, cargo, foto) | `src/app/data/lawyers.ts` e fotos em `public/images/team/` |
| Áreas de atuação e textos do detalhe | `src/app/data/practice-areas.ts` |
| Slides do carrossel | `src/app/data/hero-slides.ts` e imagens em `public/images/hero/` |
| Itens do menu | `src/app/data/navigation.ts` |
| Canais da seção de contato | `src/app/data/contact-channels.ts` |

Orientações:

- **Telefone:** em `site.config.ts` há o número para exibição (`display`) e o número só com dígitos e DDI (`digits`),
  usado nos links de WhatsApp e telefone. Altere os dois.
- **Endereço:** o mapa e o botão "Como chegar" são gerados a partir do endereço, então basta atualizar o `site.config.ts`.
- **Fotos das advogadas:** use imagens de preferência quadradas ou retrato, de até cerca de 1000 px de lado. Elas são
  exibidas em formato quadrado, com o enquadramento ajustado ao rosto.
- **Fotos do carrossel:** prefira imagens largas (cerca de 2200 px) em WebP e abaixo de 300 KB, para não pesar a página.
- **Textos jurídicos:** a publicidade na advocacia é regulada pela OAB (Provimento nº 205/2021). Evite promessas de
  resultado, captação de clientela e preços; mantenha o tom informativo.

## Identidade visual

Segue o manual de identidade da marca GRBZ:

| Elemento | Valor |
|---|---|
| Marrom principal | `#56160d` |
| Marrom escuro | `#38130f` |
| Marrom claro (ilustrações) | `#731d12` |
| Creme | `#f5f5da` |
| Fonte de títulos | Lora |
| Fonte de textos | Roboto |

As cores e fontes estão como variáveis CSS (`--color-*`, `--font-*`) no início de `src/styles.scss`. Para mudar a paleta,
altere ali. As logos estão em SVG em `public/images/brand/`, em duas versões: `-marrom` (para fundos claros) e
`-creme` (para fundos escuros).

## Convenções de código

- Componentes **standalone** com `ChangeDetectionStrategy.OnPush` e estado com **signals**.
- Um componente por pasta, com `.ts`, `.html` e `.scss` separados; componentes pequenos e com uma única responsabilidade.
- Conteúdo em `data/` e tipos em `models/`: nenhum texto de negócio fixo dentro dos templates, exceto textos de interface.
- Estilos em **BEM** simplificado (`bloco__elemento--modificador`), usando as variáveis de `styles.scss` em vez de valores soltos.
- Acessibilidade: HTML semântico, `alt` nas imagens, rótulos nos botões de ícone, foco visível, respeito a
  `prefers-reduced-motion` e uso do `<dialog>` nativo no diálogo das áreas.
- Todo código novo deve passar em `npm run test:ci` e `npm run build` sem avisos.

## Publicação e CI/CD

A pipeline fica em `.github/workflows/ci-cd.yml`:

- **Em todo pull request e push na `master`:** instala as dependências, roda os testes e faz o build de produção.
- **Em push na `master`:** publica o resultado no **Cloudflare Pages** (job `deploy`, ambiente `production`).

Ou seja, **todo merge na `master` publica o site automaticamente**.

### Configuração única (já feita?)

Se for a primeira publicação, siga os passos:

1. Crie uma conta na Cloudflare e, em **Workers & Pages → Create → Pages → Direct Upload**, crie um projeto
   (ex.: `grbz-advogadas`).
2. Em **My Profile → API Tokens**, crie um token com a permissão *Cloudflare Pages: Edit*.
3. No GitHub, em **Settings → Secrets and variables → Actions**, cadastre:
   - Secrets: `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`
   - Variable: `CLOUDFLARE_PAGES_PROJECT` (nome do projeto criado no passo 1)
4. Em **Settings → Environments**, crie o ambiente `production` (opcionalmente exigindo aprovação antes do deploy).
5. **Domínio `.com.br`:** registre no [Registro.br](https://registro.br) (em nome da titular do escritório), adicione o
   domínio na Cloudflare (plano Free), troque os servidores DNS no Registro.br pelos indicados pela Cloudflare e, no
   projeto do Pages, vá em **Custom domains** para associá-lo. O HTTPS é emitido automaticamente.

### Publicação manual (emergência)

```bash
npm ci && npm run build
npx wrangler pages deploy dist/grbz-front/browser --project-name=<nome-do-projeto> --branch=master
```

É necessário estar autenticado na Cloudflare (`npx wrangler login`).

## Notas para quem for dar suporte

- **Não há servidor nem banco de dados.** O site é um conjunto de arquivos estáticos; se ele está no ar, não há o que
  "reiniciar". Problemas costumam ser de DNS, domínio expirado ou deploy que falhou.
- **Site fora do ar ou com conteúdo antigo:** veja a aba *Actions* do repositório (o último deploy passou?) e o painel do
  Cloudflare Pages. Se o conteúdo não mudou, force a atualização do navegador (Ctrl + Shift + R).
- **Domínio:** o `.com.br` é renovado anualmente no Registro.br. A renovação vencida derruba o site; mantenha um e-mail
  de contato válido no cadastro e, de preferência, ative a renovação automática.
- **Contatos exibidos** (WhatsApp, telefone, e-mail, Instagram, endereço) vêm de `site.config.ts`. Se um contato mudar,
  é só ali; o botão flutuante, o menu, as áreas e o rodapé se atualizam juntos.
- **Mapa:** é um embed do Google Maps montado a partir do endereço, sem chave de API. Se o endereço mudar, o mapa muda junto.
- **Fotos grandes:** não coloque imagens originais de câmera (vários MB) em `public/`. Reduza e converta antes (WebP/JPG).
- **Build quebrado após atualização de dependências:** o projeto usa Angular 19; atualizações maiores devem ser feitas
  com `ng update` e testadas localmente antes de subir.
- **Testes falhando só no CI:** o CI roda em Chrome headless sem sandbox (`ChromeHeadlessCI`, definido em `karma.conf.js`).
- **Segurança:** não há formulários nem coleta de dados no site; os cabeçalhos de segurança estão em `public/_headers`.
  Nunca versione tokens ou senhas: use os *secrets* do GitHub.

## Pendências conhecidas

- Depois que o domínio estiver definido: adicionar `<link rel="canonical">`, `og:url`, `og:image` (com URL absoluta;
  a imagem já existe em `public/images/brand/og-image.jpg`) e um `sitemap.xml` ao `index.html`/`public/`, e cadastrar
  o site no Google Search Console.
- Confirmar o enquadramento das fotos das advogadas em telas muito pequenas.
