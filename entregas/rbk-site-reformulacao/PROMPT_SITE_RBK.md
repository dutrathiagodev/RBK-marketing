# Prompt para criacao do site RBK Marketing Digital em React + Vite

Voce e um desenvolvedor frontend senior. Crie uma reformulacao completa do site da RBK Marketing Digital, usando React com Vite, com base no site atual `https://agenciarbk.com.br/` e nas capturas de referencia anexadas no pacote `rbk-site-screenshots.zip`.

## Objetivo

Construir um site institucional e comercial para uma agencia de marketing digital de alta performance. O visual deve manter a identidade agressiva, premium e orientada a resultado da RBK: fundo preto, contraste forte, detalhes em laranja vibrante, tipografia pesada em caixa alta, cards escuros com bordas laranja, elementos circulares decorativos e chamadas diretas para orcamento/contato.

O resultado deve ser um site real e navegavel, nao uma landing page generica. A primeira tela deve mostrar a experiencia final do site, com navegacao, hero, CTA e visual forte. A direcao geral deve ser minimalista, bonita e premium: poucos elementos por tela, muito contraste, respiro generoso, tipografia impactante e animacoes suaves que valorizem a experiencia sem poluir.

## Referencia adicional de inspiracao

Use tambem como referencia de qualidade visual o site `https://www.next4.com.br/`, sem copiar a identidade dele. A ideia e aproveitar alguns padroes que funcionam bem e traduzi-los para o universo RBK:

- Hero com fotografia grande em largura total, texto forte sobre a imagem e overlay escuro para legibilidade.
- Forma geometrica grande sobreposta na imagem, como seta, faixa diagonal ou bloco angular. Na RBK, usar laranja/vermelho em vez de verde/turquesa.
- Logo e header com aparencia muito limpa, mas preservar o header preto agressivo da RBK.
- Prova social logo apos o hero: faixa com logos/clientes/cases ou numeros de impacto.
- Cards de cases com imagem em preto e branco ou baixa saturacao, overlay laranja geometrico em diagonal e metrica de resultado em destaque.
- Secao de diferenciais com bloco grande de numeros de um lado e texto institucional do outro.
- CTAs finais em cards grandes contrastantes, com textos curtos e botoes arredondados ou retangulares premium.
- Manter bastante respiro entre secoes, mas sem perder a intensidade visual da RBK.

Importante: a Next4 e mais clara, branca e turquesa. A RBK deve continuar escura, preta, laranja e mais combativa. Use a Next4 como inspiracao de acabamento, ritmo visual e tratamento de imagens, nao como copia de cores, textos ou layout.

## Stack obrigatoria

- React + Vite
- React Router para paginas
- CSS puro, CSS Modules ou SCSS, mantendo organizacao clara
- GSAP com ScrollTrigger para animacoes de entrada e scroll reveal
- CSS nativo para microinteracoes de hover/focus
- Lottie apenas se houver assets vetoriais leves e realmente uteis; caso contrario, usar CSS/SVG/HTML
- `lucide-react` para icones
- Layout responsivo desktop, tablet e mobile
- Sem backend obrigatorio. O formulario pode simular envio com estado visual de sucesso.

## Estrutura sugerida

Crie uma estrutura parecida com:

```txt
src/
  assets/
  components/
    Header.jsx
    Footer.jsx
    WhatsAppButton.jsx
    SectionTitle.jsx
    ServiceCard.jsx
    CaseCard.jsx
    TrainingCard.jsx
    ContactForm.jsx
    Reveal.jsx
  data/
    services.js
    cases.js
    trainings.js
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
    global.css
    tokens.css
    animations.css
  utils/
    animationConfig.js
  App.jsx
  main.jsx
```

## Identidade visual

- Fundo principal: preto quase absoluto `#030303` e paineis `#141414` ou `#191919`
- Cor primaria: laranja/vermelho RBK `#f24a2e` ou `#ff4b2b`
- Texto principal: branco `#ffffff`
- Texto secundario: cinza claro `#c9ced6`
- Bordas: laranja com baixa opacidade quando secundarias
- Usar linhas finas laranja separando secoes
- Usar circulos grandes em outline laranja escuro como decoracao de fundo
- Usar cards com borda laranja, fundo escuro, cantos levemente arredondados, sem parecer cartoon
- Botoes principais em laranja solido com texto branco
- Botoes secundarios com fundo transparente e borda branca ou laranja
- Tipografia: usar uma fonte forte e moderna. Sugestao: `Inter`, `Montserrat`, `Archivo Black` ou `Anton` para titulos. Titulos sempre em caixa alta.
- Evitar gradientes chamativos demais. O site deve ser escuro, limpo, robusto e comercial.
- Minimalismo obrigatorio: usar menos decoracoes, menos cards simultaneos na primeira dobra e mais espaco negativo. Cada secao deve ter um foco claro.
- As animacoes devem parecer sofisticadas e discretas, nao chamativas. Priorizar fade, translateY curto, scale leve e parallax muito sutil.

## Header

Header fixo ou sticky no topo, com fundo preto, blur sutil e linha inferior laranja.

Logo textual:

```txt
RBK MARKETING DIGITAL
```

O `RBK` deve aparecer em laranja e o restante em branco.

Menu:

- Home
- Servicos
- Portfolio
- Treinamentos
- Sobre
- Contato

CTA no canto direito:

```txt
ORCAMENTO
```

No mobile, trocar menu por botao hamburguer com drawer ou menu vertical. O CTA deve continuar acessivel.

## Elementos globais

- Botao flutuante de WhatsApp no canto inferior direito em todas as paginas.
- Footer completo com logo, navegacao, contatos e redes sociais.
- Links devem ter estados de hover claros.
- Adicionar foco visivel para acessibilidade.
- Usar `aria-label` nos botoes apenas com icone.

## Pagina Home

### Hero

Inspirar-se em `01-home-hero.png`.

Conteudo:

```txt
MARKETING DE ALTA PERFORMANCE
DOMINE O MUNDO DIGITAL
ESTRATEGIAS IMPLACAVEIS, DADOS PRECISOS E CRESCIMENTO EXPLOSIVO PARA MARCAS AMBICIOSAS.
```

CTAs:

- `COMEÇAR AGORA`
- `VER CASES`

No lado direito, usar imagem circular de executivo/CEO ou placeholder profissional, com moldura laranja e aneis circulares decorativos.

### Secao de autoridade

Inspirar-se em `02-home-forca-crescimento-metricas.png`.

Titulo:

```txt
A FORCA POR TRAS DO SEU CRESCIMENTO
```

Texto:

```txt
NAO SOMOS APENAS UMA AGENCIA. SOMOS SEU PARCEIRO ESTRATEGICO FOCADO OBSESSIVAMENTE EM ESCALAR SEU NEGOCIO ATRAVES DE INTELIGENCIA DIGITAL E PERFORMANCE SOLIDA.
```

Cards de metricas:

- `R$ 1M+` - Investido em trafego
- `240+` - Projetos ativos
- `94%` - Retencao
- `2.8M` - Leads gerados

### Nosso arsenal

Inspirar-se em `03-home-arsenal-servicos.png`.

Titulo:

```txt
NOSSO ARSENAL
```

Na Home, mostrar apenas 3 cards principais para manter o visual minimalista. A pagina de Servicos deve listar todos os 6.

Cards em destaque na Home:

- Gestao de redes sociais
- Gestao de trafego pago
- Construcao de site

Cada card deve ter icone circular laranja, titulo branco, descricao em cinza e detalhe circular ou geometrico muito sutil no canto inferior. Os cards devem aparecer com stagger quando a secao entrar na viewport.

### Resultados

Inspirar-se em `04-home-resultados-cases.png`.

Titulo:

```txt
NOSSOS RESULTADOS
CASOS DE SUCESSO DE EMPRESAS QUE EXIGEM PERFORMANCE E ESCALA.
```

Cards de depoimentos/cases:

- Edluma - Industria de biscoito - Resultado: dobrou a producao
- Centro Medico - Clinica de ultrassom - Resultado: satisfacao total
- Gordo Auto Pecas - Auto pecas de caminhao - Resultado: resultados acertivos

### CTA final

Inspirar-se em `05-home-cta-footer.png`.

Bloco laranja grande:

```txt
O PROXIMO NIVEL EXIGE ACAO
A COMPETICAO NAO DORME. SUA MARCA TAMBEM NAO DEVERIA.
```

Botao:

```txt
INICIAR PROJETO
```

## Pagina Servicos

Inspirar-se em `07-servicos-hero-cards.png` e `08-servicos-footer.png`.

Hero:

```txt
NOSSO ARSENAL
TATICAS COMPROVADAS E EXECUCAO IMPECAVEL PARA CADA FRONTEIRA DO CAMPO DE BATALHA DIGITAL.
```

Grid de servicos com 6 cards:

1. Gestao de redes sociais - Construcao de comunidade, autoridade de marca e engajamento real atraves de estrategias vetoriais.
2. Gestao de trafego pago - Aquisicao cirurgica de clientes com campanhas de alta conversao para quem ja busca seu produto.
3. Construcao de site - Desenvolvimento de plataformas velozes, modernas e otimizadas para transformar visitantes em clientes.
4. Automacao de IA - Implementacao de inteligencia artificial para escalar atendimento, vendas e processos internos.
5. Consultoria de marketing - Diagnostico profundo e plano de acao tatico para reestruturar e ampliar a presenca digital da empresa.
6. Eventos e palestras - Treinamentos, mentorias e imersoes para capacitar equipes e lideres no ecossistema do marketing digital.

## Pagina Portfolio

Inspirar-se em `09-portfolio-hero-cards-top.png`, `10-portfolio-grid.png` e `11-portfolio-footer.png`.

Hero:

```txt
CAMPO DE BATALHA
NUMEROS NAO MENTEM. VEJA COMO ESCALAMOS OPERACOES REAIS NO AMBIENTE DIGITAL.
```

Grid de cases com imagens, titulo, descricao e metrica final:

- Boutique Elegance - +187% vendas online
- Tech Solutions BR - -38% custo por lead
- Cafe Aroma - +312% engajamento
- Finance Prime - 427 leads qualificados
- Fitness Pro - 218 novas matriculas
- Horizonte Imoveis - +156% agendamentos

Os cards devem ter imagem no topo, fundo escuro, borda sutil laranja e metrica em laranja.

## Pagina Treinamentos

Inspirar-se em `12-treinamentos-cards-top.png`, `13-treinamentos-cards-bottom.png`, `14-treinamentos-agenda-hero.png`, `15-treinamentos-agenda-lista.png` e `16-treinamentos-cta-footer.png`.

Hero:

```txt
AGENDA OFICIAL DE TREINAMENTOS
AS VAGAS SAO ESTRITAMENTE LIMITADAS PARA GARANTIR O ALTO NIVEL DE NETWORKING E ENTREGA DE CONTEUDO. GARANTA SEU LUGAR NA MESA.
```

Criar uma secao de cards de treinamentos:

- Como vender mais usando IA - 01/06
- Redes sociais para negocios - 08/06
- Workshop empresario de sucesso - 15/06
- Imersao de trafego pago - 22/06
- Masterclass de vendas no digital - 29/06

Cada card deve ter imagem, selo de data, titulo, descricao e botao `INSCREVER-SE`.

Criar tambem lista de agenda em formato horizontal, com status:

- Vagas abertas
- Ultimas vagas
- Lista de espera

CTA final:

```txt
PRONTO PARA EVOLUIR?
SOLICITE INFORMACOES SOBRE TREINAMENTOS IN COMPANY PERSONALIZADOS PARA A REALIDADE DA SUA EQUIPE COMERCIAL.
FALAR COM CONSULTOR
```

## Pagina Sobre

Inspirar-se em `17-sobre-hero-manifesto.png`, `18-sobre-manifesto.png` e `19-sobre-equipe.png`.

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

Usar cards com foto circular em preto e branco, moldura laranja e nome em destaque.

## Pagina Contato

Inspirar-se em `20-contato-hero-form-top.png`, `21-contato-form-coordenadas.png` e `22-contato-footer.png`.

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
- Botao `ENVIAR MENSAGEM`

Servicos do select:

- Gestao de redes sociais
- Gestao de trafego pago
- Construcao de site
- Automacao de IA
- Consultoria de marketing
- Eventos e palestras
- Treinamentos

Coordenadas oficiais:

- E-mail direto: `diretoria@rbkagencia.com.br`
- Setor comercial: `(43) 9 9649-6660`
- Setor de RH: `(43) 9 9967-3044`
- Direto com o CEO: `Ramiro Bilek: (43) 9 9818-3835`
- Instagram agencia: `@rbkagenciademkt`
- Instagram CEO: `@ramirobilek.mkt`
- Base de operacoes: `Rua 24 de Maio, Nº 334, Centro, Santo Antonio da Platina-PR`

Adicionar card laranja:

```txt
O QUE ESPERAR?
APOS O ENVIO, NOSSO TIME ANALISARA SUA PRESENCA ATUAL EM ATE 24H UTEIS. ENTRAREMOS EM CONTATO APENAS SE IDENTIFICARMOS UM POTENCIAL REAL DE ESCALA PARA SEU NEGOCIO.
```

## Footer

Inspirar-se em `06-footer-detalhado.png`, `08-servicos-footer.png`, `11-portfolio-footer.png` e `22-contato-footer.png`.

Colunas:

1. Logo e texto:
   `TRANSFORMANDO NEGOCIOS ATRAVES DE ESTRATEGIAS DIGITAIS DE ALTA PERFORMANCE E RESULTADOS REAIS.`
2. Navegacao:
   Home, Servicos, Portfolio, Sobre, Contato
3. Contato:
   Email, comercial, RH, CEO, endereco
4. Redes sociais:
   `@rbkagenciademkt`
   `@ramirobilek.mkt`

Rodape:

```txt
© 2026 RBK AGENCIA DE MARKETING. TODOS OS DIREITOS RESERVADOS.
PRIVACIDADE
TERMOS
```

## Responsividade

- Construir mobile-first.
- Desktop: container maximo entre 1180px e 1280px.
- Tablet: grids viram 2 colunas.
- Mobile: hero em coluna unica, menu hamburguer, cards em 1 coluna, botoes com largura total quando fizer sentido.
- Garantir que nenhum texto quebre de forma ruim dentro de botoes.
- Titulos devem reduzir de tamanho no mobile sem usar `vw` diretamente.
- Reduzir ou remover decoracoes de fundo no mobile para manter leveza, legibilidade e performance.

## Animacoes

Criar animacoes minimalistas, fluidas e de alta performance. Usar GSAP para animacoes de carregamento e scroll, e CSS nativo para microinteracoes.

### Hero

- O titulo principal `<h1>` deve fazer fade-in suave ao carregar a pagina, subindo `20px` no eixo Y.
- Duracao: `0.8s`.
- Easing: `power2.out` no GSAP, equivalente a `ease-out`.
- Animar somente `opacity` e `transform`.
- Aplicar uma entrada secundaria no subtitulo e CTAs com atraso pequeno, sem exagero.

### Scroll reveal

- Criar um componente ou hook reutilizavel para revelar secoes ao entrar na viewport.
- Usar `GSAP ScrollTrigger` para cards, metricas, cases, treinamentos e blocos de contato.
- Em grids, usar staggering em cascata: cada card entra um pouco depois do anterior.
- Exemplo de logica: `delay = index * 0.08`, onde cada indice aumenta levemente o atraso para criar ritmo visual.
- Cards devem iniciar com `opacity: 0` e `transform: translateY(24px)` e finalizar com `opacity: 1` e `transform: translateY(0)`.
- Nao usar animacoes que movam demais o conteudo; o site deve continuar elegante e minimalista.

### Microinteracoes

- Todos os botoes principais devem ter hover com `transform: scale(1.05)` e mudanca suave de background em `0.3s`.
- Cards podem ter hover com `transform: translateY(-4px)` e borda laranja levemente mais forte.
- Links do menu devem ter hover discreto, usando `opacity`, `color` ou pseudo-elemento animado com `transform: scaleX`.
- O botao flutuante de WhatsApp pode ter pulso muito sutil, desativado em `prefers-reduced-motion`.

### Regras obrigatorias de performance

- Animar estritamente `transform` e `opacity`.
- Nao animar `margin`, `padding`, `top`, `left`, `width`, `height`, `border-width` ou qualquer propriedade que cause recalculo de layout.
- Usar `will-change: transform, opacity` apenas nos elementos animados, sem aplicar globalmente.
- Evitar blur pesado, sombras animadas grandes e parallax intenso.
- As animacoes precisam manter sensacao de 60 FPS.

### Acessibilidade de movimento

- Incluir `@media (prefers-reduced-motion: reduce)` no CSS para desativar animacoes, transicoes longas e scroll suave.
- No JavaScript, verificar `window.matchMedia('(prefers-reduced-motion: reduce)').matches` antes de registrar GSAP/ScrollTrigger.
- Se movimento reduzido estiver ativo, renderizar tudo visivel imediatamente, sem fade, stagger ou translate.

### Comentarios no codigo

Adicionar comentarios curtos explicando a logica das animacoes, especialmente:

- Por que `transform` e `opacity` foram escolhidos.
- Como o stagger calcula o atraso com base no indice do card.
- Como `prefers-reduced-motion` protege usuarios sensiveis a movimento.

## Qualidade tecnica

- Criar dados em arrays e renderizar cards dinamicamente.
- Componentizar secoes repetidas.
- Usar CSS variables para cores, espacamentos e sombras.
- Otimizar imagens com `loading="lazy"` nos cards.
- Usar tags semanticas: `header`, `main`, `section`, `footer`, `nav`.
- Garantir contraste acessivel.
- Instalar e configurar `gsap` apenas para animacoes que realmente precisam de timeline/scroll trigger.
- Separar configuracoes de animacao em hook, componente ou utilitario para evitar codigo repetido.
- Nao deixar animacoes bloquearem interacao, carregamento ou leitura do conteudo.
- Rodar `npm run build` antes de finalizar.

## Resultado esperado

Entregar um projeto React + Vite pronto para rodar com:

```bash
npm install
npm run dev
```

Como a base e React + Vite, a saida deve vir dividida em arquivos do projeto, por exemplo:

- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/pages/*.jsx`
- `src/components/*.jsx`
- `src/hooks/useGsapReveal.js`
- `src/hooks/useReducedMotion.js`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/styles/animations.css`
- `src/data/*.js`

O site deve parecer uma evolucao profissional do site atual da RBK Marketing Digital, preservando a personalidade visual das referencias, mas com acabamento moderno, responsivo e pronto para conversao.
