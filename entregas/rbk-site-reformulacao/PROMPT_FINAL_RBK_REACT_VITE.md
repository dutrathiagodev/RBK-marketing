# Prompt final - Site RBK Marketing Digital em React + Vite

Atue como um Desenvolvedor Front-end Senior especialista em UI/UX, React, Vite, design responsivo e animacoes web de alta performance.

## Contexto do projeto

Quero reformular o site da RBK Marketing Digital, atualmente em:

`https://agenciarbk.com.br/`

Use como referencia visual principal as capturas anexadas no arquivo:

`rbk-site-screenshots.zip`

Use tambem como referencia de acabamento, ritmo visual e tratamento de imagens o site:

`https://www.next4.com.br/`

Importante: nao copie a identidade da Next4. Ela serve apenas como referencia de qualidade visual, uso de hero fotografico, composicao limpa, prova social, cards com imagem e geometria sobreposta. A RBK deve continuar com personalidade propria: preta, laranja, forte, premium, objetiva e focada em performance.

## Objetivo

Criar um site institucional/comercial moderno para a RBK Marketing Digital usando React + Vite.

O site deve parecer uma evolucao profissional do site atual: mais minimalista, mais bonito, mais fluido e mais sofisticado, mas mantendo a energia agressiva e orientada a resultado da marca.

O visual deve comunicar:

- Marketing de alta performance
- Crescimento e escala
- Autoridade tecnica
- Dados, ROI e resultados reais
- Agencia premium, moderna e confiavel

O resultado nao deve parecer template generico. Deve ter cara de marca forte.

## Direcao criativa

Crie uma experiencia minimalista premium:

- Fundo preto ou quase preto.
- Laranja/vermelho RBK como cor de acento.
- Muito contraste.
- Tipografia grande, forte e em caixa alta.
- Poucos elementos por tela.
- Muito espaco negativo.
- Cards bem alinhados, com bordas finas e acabamento limpo.
- Imagens com tratamento escuro, preto e branco ou baixa saturacao.
- Geometrias discretas em laranja, como linhas, circulos, diagonais ou setas.
- Animacoes suaves e elegantes, sem exagero.

Evite:

- Visual poluido.
- Excesso de cards na primeira dobra.
- Gradientes chamativos.
- Animacoes pesadas.
- Elementos decorativos demais.
- Layout com cara de landing page barata.

## Stack obrigatoria

Use:

- React + Vite
- React Router DOM
- CSS puro, CSS Modules ou SCSS
- GSAP com ScrollTrigger para animacoes de entrada e scroll reveal
- CSS nativo para microinteracoes
- `lucide-react` para icones
- Lottie somente se existir uma animacao vetorial leve e realmente util

Instalar dependencias sugeridas:

```bash
npm install react-router-dom gsap lucide-react
```

## Estrutura esperada

Organize o projeto de forma limpa:

```txt
src/
  assets/
    images/
    logos/
  components/
    Header.jsx
    Footer.jsx
    WhatsAppButton.jsx
    SectionTitle.jsx
    Reveal.jsx
    ServiceCard.jsx
    CaseCard.jsx
    TrainingCard.jsx
    MetricCard.jsx
    ContactForm.jsx
  data/
    services.js
    cases.js
    trainings.js
    metrics.js
    contacts.js
  hooks/
    useReducedMotion.js
    useGsapReveal.js
  pages/
    Home.jsx
    Services.jsx
    Portfolio.jsx
    Trainings.jsx
    About.jsx
    Contact.jsx
  styles/
    tokens.css
    global.css
    animations.css
  utils/
    animationConfig.js
  App.jsx
  main.jsx
```

Use dados em arrays e renderize cards dinamicamente. Evite duplicacao de markup.

## Paleta e tokens

Crie CSS variables:

```css
:root {
  --color-bg: #030303;
  --color-surface: #111111;
  --color-surface-2: #181818;
  --color-text: #ffffff;
  --color-muted: #c9ced6;
  --color-border: rgba(242, 74, 46, 0.36);
  --color-primary: #f24a2e;
  --color-primary-strong: #ff4b2b;
  --color-line: rgba(242, 74, 46, 0.22);
}
```

Use uma fonte forte e moderna. Sugestoes:

- `Inter`
- `Montserrat`
- `Archivo`
- `Archivo Black`

Titulos principais devem ser em caixa alta, com peso alto e excelente legibilidade.

## Header

Header sticky no topo, preto, com leve blur e linha inferior laranja.

Logo textual:

`RBK MARKETING DIGITAL`

`RBK` em laranja. O restante em branco.

Menu:

- Home
- Servicos
- Portfolio
- Treinamentos
- Sobre
- Contato

CTA:

`ORCAMENTO`

No mobile, usar menu hamburguer com navegacao vertical limpa. O menu deve abrir e fechar com animacao suave usando `transform` e `opacity`.

## Paginas obrigatorias

Crie estas rotas:

- `/`
- `/servicos`
- `/portfolio`
- `/treinamentos`
- `/sobre`
- `/contato`

## Home

### Hero

Inspiracao principal: `01-home-hero.png` + acabamento visual da Next4.

Criar hero full-width com fundo escuro, texto grande e imagem profissional do lado direito ou como background tratado.

Texto:

```txt
MARKETING DE ALTA PERFORMANCE
DOMINE O MUNDO DIGITAL
ESTRATEGIAS IMPLACAVEIS, DADOS PRECISOS E CRESCIMENTO EXPLOSIVO PARA MARCAS AMBICIOSAS.
```

CTAs:

- `COMEÇAR AGORA`
- `VER CASES`

Visual:

- Usar foto de executivo/equipe ou imagem corporativa com overlay escuro.
- Adicionar geometria laranja discreta: circulo, diagonal, seta ou moldura.
- Evitar excesso de elementos. A primeira dobra precisa respirar.

### Prova social / autoridade

Logo apos o hero, criar uma faixa minimalista com metricas ou logos/cases.

Metricas:

- `R$ 1M+` - Investido em trafego
- `240+` - Projetos ativos
- `94%` - Retencao
- `2.8M` - Leads gerados

### Servicos em destaque

Na Home, exibir apenas 3 cards para manter minimalismo:

- Gestao de redes sociais
- Gestao de trafego pago
- Construcao de site

Cada card:

- Fundo escuro
- Borda laranja fina
- Icone lucide dentro de circulo
- Titulo forte
- Descricao curta
- Hover com elevacao sutil

Na pagina de Servicos, exibir todos os servicos.

### Resultados

Criar secao de cases com visual mais premium.

Use tratamento inspirado na Next4:

- Imagem com baixa saturacao ou preto e branco
- Overlay geometrico laranja em diagonal ou seta
- Metrica de resultado em destaque

Cases:

- Edluma - Dobrou a producao
- Centro Medico - Satisfacao total
- Gordo Auto Pecas - Resultados acertivos

### CTA final

Bloco laranja minimalista:

```txt
O PROXIMO NIVEL EXIGE ACAO
A COMPETICAO NAO DORME. SUA MARCA TAMBEM NAO DEVERIA.
```

Botao:

`INICIAR PROJETO`

## Pagina Servicos

Hero:

```txt
NOSSO ARSENAL
TATICAS COMPROVADAS E EXECUCAO IMPECAVEL PARA CADA FRONTEIRA DO CAMPO DE BATALHA DIGITAL.
```

Grid com 6 cards:

1. Gestao de redes sociais
2. Gestao de trafego pago
3. Construcao de site
4. Automacao de IA
5. Consultoria de marketing
6. Eventos e palestras

O layout deve ser limpo. Desktop com 3 colunas, tablet com 2, mobile com 1.

## Pagina Portfolio

Hero:

```txt
CAMPO DE BATALHA
NUMEROS NAO MENTEM. VEJA COMO ESCALAMOS OPERACOES REAIS NO AMBIENTE DIGITAL.
```

Cases:

- Boutique Elegance - `+187% vendas online`
- Tech Solutions BR - `-38% custo por lead`
- Cafe Aroma - `+312% engajamento`
- Finance Prime - `427 leads qualificados`
- Fitness Pro - `218 novas matriculas`
- Horizonte Imoveis - `+156% agendamentos`

Cada card deve ter imagem, overlay geometrico laranja, descricao curta e metrica final.

## Pagina Treinamentos

Hero:

```txt
AGENDA OFICIAL DE TREINAMENTOS
AS VAGAS SAO ESTRITAMENTE LIMITADAS PARA GARANTIR O ALTO NIVEL DE NETWORKING E ENTREGA DE CONTEUDO.
```

Treinamentos:

- Como vender mais usando IA - 01/06
- Redes sociais para negocios - 08/06
- Workshop empresario de sucesso - 15/06
- Imersao de trafego pago - 22/06
- Masterclass de vendas no digital - 29/06

Cada card deve ter imagem, data, titulo, descricao e botao:

`INSCREVER-SE`

CTA final:

```txt
PRONTO PARA EVOLUIR?
SOLICITE INFORMACOES SOBRE TREINAMENTOS IN COMPANY PERSONALIZADOS PARA A REALIDADE DA SUA EQUIPE COMERCIAL.
FALAR COM CONSULTOR
```

## Pagina Sobre

Hero:

```txt
CULTURA IMPLACAVEL
NAO ACREDITAMOS EM FORMULAS MAGICAS. ACREDITAMOS EM DADOS, TRABALHO DURO E EXECUCAO MAGISTRAL.
```

Manifesto:

```txt
O MANIFESTO RBK

A RBK MARKETING DIGITAL NAO NASCEU PARA SER MAIS UMA AGENCIA. NASCEMOS DA INCONFORMACAO COM O STATUS QUO DO MERCADO BRASILEIRO, ONDE PROMESSAS VAZIAS E METRICAS DE VAIDADE SUBSTITUIAM O RESULTADO REAL.

DESDE 2018, ASSUMIMOS UMA POSTURA DE PARCEIROS ESTRATEGICOS. SE UM PROJETO NAO TEM POTENCIAL DE ESCALA, NOS NAO ENTRAMOS. NOSSA ENERGIA E RESERVADA PARA MARCAS QUE QUEREM DOMINAR SEUS SEGMENTOS.

HOJE, APOS 240+ OPERACOES ESCALADAS E MAIS DE 1 MILHAO INVESTIDO EM TRAFEGO, NOSSO COMPROMISSO PERMANECE INTACTO: TRANSPARENCIA BRUTAL, EXCELENCIA TECNICA E OBSESSAO POR ROI.
```

Equipe:

- Ramiro Bilek - CEO & Estrategista Chefe
- Crislaine Cristina - Gerente Financeiro

Cards da equipe com foto circular, moldura laranja e visual premium.

## Pagina Contato

Hero:

```txt
INICIE A ESCALA
ESTAMOS PRONTOS PARA ANALISAR SUA OPERACAO. PREENCHA O FORMULARIO OU ACESSE NOSSOS CANAIS DIRETOS.
```

Formulario:

- Nome completo
- Email
- Telefone
- Servico de interesse
- Mensagem

Botao:

`ENVIAR MENSAGEM`

Coordenadas:

- E-mail direto: `diretoria@rbkagencia.com.br`
- Setor comercial: `(43) 9 9649-6660`
- Setor de RH: `(43) 9 9967-3044`
- Direto com o CEO: `Ramiro Bilek: (43) 9 9818-3835`
- Instagram agencia: `@rbkagenciademkt`
- Instagram CEO: `@ramirobilek.mkt`
- Base de operacoes: `Rua 24 de Maio, Nº 334, Centro, Santo Antonio da Platina-PR`

Card laranja:

```txt
O QUE ESPERAR?
APOS O ENVIO, NOSSO TIME ANALISARA SUA PRESENCA ATUAL EM ATE 24H UTEIS. ENTRAREMOS EM CONTATO APENAS SE IDENTIFICARMOS UM POTENCIAL REAL DE ESCALA PARA SEU NEGOCIO.
```

## Footer

Footer completo com 4 colunas:

1. Logo e texto institucional
2. Navegacao
3. Contato
4. Redes sociais

Texto institucional:

```txt
TRANSFORMANDO NEGOCIOS ATRAVES DE ESTRATEGIAS DIGITAIS DE ALTA PERFORMANCE E RESULTADOS REAIS.
```

Rodape:

```txt
© 2026 RBK AGENCIA DE MARKETING. TODOS OS DIREITOS RESERVADOS.
PRIVACIDADE
TERMOS
```

## Botao flutuante de WhatsApp

Adicionar botao fixo no canto inferior direito.

Regras:

- Cor laranja RBK.
- Icone claro.
- Hover com `scale(1.05)`.
- Pulso muito sutil opcional.
- Desativar pulso em `prefers-reduced-motion`.

## Animacoes obrigatorias

As animacoes devem ser bonitas, minimalistas e performaticas.

### Hero on load

O `<h1>` do hero deve:

- Iniciar com `opacity: 0`
- Iniciar com `transform: translateY(20px)`
- Animar para `opacity: 1`
- Animar para `transform: translateY(0)`
- Duracao: `0.8s`
- Easing: `power2.out`

Subtitulo e botoes devem entrar logo depois, com atraso leve.

### Scroll reveal com GSAP

Use GSAP + ScrollTrigger para revelar secoes ao entrar na viewport.

Cards devem usar stagger:

```js
delay = index * 0.08
```

Explique em comentario que o atraso cresce com o indice para criar efeito cascata sem pesar a animacao.

Estado inicial dos cards:

```css
opacity: 0;
transform: translateY(24px);
```

Estado final:

```css
opacity: 1;
transform: translateY(0);
```

### Microinteracoes

Todos os botoes principais:

```css
transition: transform 0.3s ease, background-color 0.3s ease;
```

Hover:

```css
transform: scale(1.05);
```

Cards:

```css
transform: translateY(-4px);
```

Links:

- Hover discreto com cor ou underline animado usando `transform: scaleX`.

## Performance obrigatoria

Anime somente:

- `transform`
- `opacity`

Nao anime:

- `margin`
- `padding`
- `top`
- `left`
- `width`
- `height`
- `border-width`

Use `will-change: transform, opacity` apenas nos elementos que realmente serao animados.

Evite sombras animadas grandes, blur pesado e parallax intenso.

O site deve parecer fluido a 60 FPS.

## Acessibilidade

Incluir:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

No JavaScript, antes de registrar GSAP/ScrollTrigger:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

Se for `true`, nao executar animacoes e deixar os elementos visiveis.

Tambem garantir:

- Contraste alto.
- Foco visivel em links, botoes e campos.
- `aria-label` em botoes somente com icone.
- HTML semantico com `header`, `main`, `section`, `nav`, `footer`.

## Responsividade

Construir mobile-first.

Breakpoints sugeridos:

- Mobile: ate 767px
- Tablet: 768px a 1023px
- Desktop: 1024px+

Regras:

- Mobile com uma coluna.
- Tablet com duas colunas.
- Desktop com ate tres colunas.
- Hero em coluna unica no mobile.
- Menu mobile com drawer limpo.
- Textos nao podem estourar botoes/cards.
- Reduzir decoracoes no mobile para manter leveza.

## Qualidade do codigo

Obrigatorio:

- Componentizar tudo que se repete.
- Usar dados em arrays.
- Criar hooks para animacoes.
- Separar CSS de tokens, global e animacoes.
- Evitar codigo duplicado.
- Comentar apenas o que ajuda a entender a logica.
- Rodar build no final.

## Entregaveis

Entregar o projeto React + Vite completo, com arquivos organizados.

Comandos esperados:

```bash
npm install
npm run dev
npm run build
```

O resultado final deve ser um site minimalista, bonito, responsivo, animado de forma elegante e com forte potencial de conversao para a RBK Marketing Digital.

## Criterios de aceite

O site sera considerado pronto quando:

- Todas as paginas existirem e navegarem corretamente.
- O visual seguir a identidade preta e laranja da RBK.
- A Home estiver limpa, com poucos elementos e impacto forte.
- As animacoes estiverem suaves e sem exagero.
- `prefers-reduced-motion` estiver implementado.
- Os cards usarem stagger no scroll.
- Os botoes tiverem microinteracao com escala.
- O layout estiver responsivo em mobile, tablet e desktop.
- `npm run build` passar sem erros.
