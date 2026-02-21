# Labotur - Site Institucional

## Proposito
Este projeto representa a presenca digital institucional da Labotur, Empresa Junior de Turismo da Universidade Federal do Maranhao (UFMA), fundada em 1992 e reconhecida como a primeira EJ de Turismo do Brasil.

O site foi concebido para:
- apresentar a identidade e credibilidade da Labotur;
- comunicar servicos e metodologia de trabalho;
- facilitar contato e solicitacao de orcamento;
- disponibilizar uma pagina de links oficiais (LinkBio) para canais de entrada e materiais.

## Sobre o Projeto
A aplicacao prioriza clareza de informacao, linguagem institucional e experiencia visual moderna, com foco em:
- navegacao objetiva por secoes;
- destaque para servicos e processo de atendimento;
- narrativa de autoridade (historia, base academica e impacto);
- consistencia visual entre home e LinkBio.

## Arquitetura
O projeto utiliza arquitetura baseada em componentes, com separacao por responsabilidade:

- `src/app/`
: rotas e estrutura principal com App Router.
- `src/app/(home)/page.tsx`
: composicao da pagina inicial por secoes.
- `src/app/linkbio/page.tsx`
: pagina dedicada de links institucionais.
- `src/components/layout/`
: elementos globais (Header e Footer).
- `src/components/sections/`
: secoes de negocio da home (Hero, Stats, Services, How It Works, About, Contact).
- `src/components/ui/`
: componentes reutilizaveis de interface (cards, wrappers e animacoes).
- `src/styles/globals.css`
: tokens visuais e estilos globais.
- `public/`
: assets de marca (icones e logotipo) e arquivos estaticos.

## Tecnologias e Base Tecnica
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion (animacoes de entrada, hover e scroll progressivo)
- Lucide React (iconografia)
- Biome (padronizacao de codigo e formatacao)

## Estrutura de Conteudo
O site esta organizado em duas superficies principais:
- Home institucional: proposta de valor, servicos, processo, credenciais e contato.
- LinkBio: atalhos rapidos para formularios, edital e site oficial.

## Identidade e Diretrizes de Design
O design segue direcao institucional com:
- hierarquia tipografica clara;
- contraste adequado para leitura;
- componentes com acabamento profissional (bordas, sombras sutis e espacamento consistente);
- microinteracoes em hover/scroll para reforcar fluxo e continuidade;
- adaptabilidade para desktop e mobile.

## Direitos e Creditos
- Conteudo institucional, marca Labotur e elementos de identificacao pertencem a Labotur/UFMA.
- Este repositorio representa uma implementacao de interface e estrutura digital da entidade.
- Desenvolvimento e refinamento visual por **Marcos Reis**: https://marcosreis.vercel.app/

