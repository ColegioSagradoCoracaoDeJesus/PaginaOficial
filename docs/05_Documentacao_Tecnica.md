# Documentação Técnica — Site Institucional Colégio Sagrado Coração de Jesus

> Este documento explica **o que foi construído, como foi construído e como testar** — é a referência técnica completa do projeto. Complementa (não substitui) o `01_Documento_de_Requisitos`: aqui você encontra, para cada requisito, onde ele vive no código e o que falta, se faltar algo.

---

## 1. Stack e por quê

Conforme a **Decisão Técnica nº 1** do Documento de Requisitos (Caminho A, recomendado):

| Camada | Tecnologia | Papel |
|---|---|---|
| Framework | **Next.js 16 (App Router)** | Renderização no servidor, rotas, SEO, formulários |
| Linguagem | **TypeScript** | Tipagem em todo o projeto |
| Estilo | **Tailwind CSS v4** | Design system utilitário |
| CMS | **Sanity** (plano gratuito) | Painel de conteúdo para a secretaria (RF22–RF27) |
| E-mail dos formulários | **Resend** | Envio dos e-mails de "Agende uma Visita" e "Orçamento de Locação" |
| Ícones | **lucide-react** | Ícones vetoriais em todo o site |
| Hospedagem recomendada | **Vercel** (plano gratuito) | Deploy automático a cada `git push` |

Isso cumpre a recomendação da seção 7 do Documento de Requisitos e a Restrição RE01/RE02 (tecnologias fixadas, preferência por planos gratuitos).

---

## 2. Estrutura de pastas

```
src/
  app/
    (site)/              → todas as páginas públicas (rotas)
      page.tsx            → Home
      nossa-historia/      ensino/      nossa-estrutura/
      vivencie-o-sagrado/  70-anos/     tecnologia-educacional/
      matriculas/          contato/     locacao-de-espacos/
      noticias/            aconteceu-no-sagrado/
      diferenciais/        escola-em-rio-grande-rs/
      politica-de-privacidade/
    api/
      agendar-visita/route.ts       → RF16
      orcamento-locacao/route.ts    → RF20
    studio/[[...tool]]/  → Sanity Studio embutido em /studio (RF22–RF26)
    layout.tsx            → <head> global: SEO, Schema.org, Analytics, cookies
    sitemap.ts / robots.ts → RNF05
  components/
    layout/   → Header, Footer, AvisoCookies, BotaoWhatsApp
    conteudo/ → cartões, carrosséis, formulários, galeria com lightbox
    ui/       → Botao, Etiqueta, CampoFormulario (peças reutilizáveis)
  lib/
    sanity/   → client.ts, image.ts, queries.ts (toda a leitura de conteúdo)
    email/    → sanitize.ts, rateLimit.ts
    validation/ → validação dos formulários
sanity/
  schemas/    → um arquivo por tipo de conteúdo editável no Studio
  sanity.config.ts
```

**Padrão de dados:** toda função `getX()` em `src/lib/sanity/queries.ts` busca o conteúdo real no Sanity; se o Sanity ainda não tiver nenhum documento daquele tipo, ela cai automaticamem para um conteúdo padrão (`DEFAULT_X`) — assim o site nunca fica com uma seção vazia (RF02). **Importante:** quando existe pelo menos 1 documento real no Sanity, ele sempre tem prioridade sobre o `DEFAULT_X` do código — editar o `DEFAULT_X` no código não muda o que aparece no site se já existir conteúdo real no Sanity. Para mudar o que está no ar, edite no Sanity Studio (`/studio`).

---

## 3. Requisitos funcionais × implementação

| RF | Onde está | Status |
|---|---|---|
| RF01 | `src/app/(site)/page.tsx` — banner + 4 botões | ✅ |
| RF02 | Home busca notícias/diferenciais/modalidades/depoimentos/parceiros via `Promise.all`; cada bloco só renderiza se houver dados | ✅ |
| RF03 | `nossa-historia/page.tsx` + schema `paginaHistoria` + `linhaDoTempoItem` | ✅ (linha do tempo tem 1 marco `[EXEMPLO]` aguardando fato real — ver seção 8) |
| RF04 | `ensino/page.tsx` + schema `modalidadeEnsino` (5 modalidades: Infantil, Fund. I, Fund. II, Médio, Recreação) | ✅ |
| RF05 | `vivencie-o-sagrado/page.tsx` + schema `paginaVivencie` | ✅ |
| RF06 | `diferenciais/page.tsx` + schema `diferencial` | ✅ |
| RF07 | `nossa-estrutura/page.tsx` + schema `paginaEstrutura` | ✅ |
| RF08 | `70-anos/page.tsx` + schema `paginaSetentaAnos` + `depoimento70anos` — direciona para Secretaria/WhatsApp, **não processa pagamento** | ✅ |
| RF09 | `tecnologia-educacional/page.tsx` + schema `paginaTecnologia` (Diário Escola + Plataforma Iônica, com links de Web/App Store/Play Store) | ✅ |
| RF10 | `noticias/` (lista) e `noticias/[slug]/` (individual) + schema `noticia` | ✅ |
| RF11 | `aconteceu-no-sagrado/page.tsx` + schema `galeriaMes` | ✅ |
| RF12 | `GaleriaComLightbox.tsx` — lightbox com Esc e navegação | ✅ |
| RF13 | `next/image` com lazy loading nativo | ✅ |
| RF14 | `matriculas/page.tsx` + schema `paginaMatriculas` | ✅ |
| RF15 | `contato/page.tsx` + `siteSettings` | ✅ |
| RF16 | `FormVisitaModal.tsx` → `api/agendar-visita/route.ts` (Resend) | ⚠️ funciona, mas **precisa de domínio verificado no Resend antes do lançamento** — ver `07_Proximos_Passos_Deploy` |
| RF17 | `BotaoWhatsApp.tsx`, fixo em todas as páginas via `(site)/layout.tsx` | ✅ |
| RF18 | `src/lib/validation/` + `CampoFormulario.tsx` (honeypot, não reCAPTCHA — decisão já tomada) | ✅ |
| RF19–RF21 | `LocacaoDeEspacosForm.tsx` + `espacoLocacao` + `api/orcamento-locacao/route.ts` | ✅ (condições gerais de locação ainda `[EXEMPLO]`, ver seção 8) |
| RF22–RF26 | Sanity Studio embutido em `/studio`; papéis de usuário (Editor/Administrator) são geridos no [manage.sanity.io](https://manage.sanity.io), não no código | ✅ |
| RF25 | Resolvido automaticamente pelo pipeline de imagens do Sanity (`urlForImage`, recorte/hotspot) | ✅ |
| RF27 | Manual ilustrado — ver `06_Manual_Secretaria_e_Direcao.md` | ✅ (falta a sessão de treinamento presencial, que é um evento, não código) |
| RF28 | `Header.tsx` (menu sanduíche no celular) | ✅ |
| RF29 | `Footer.tsx` | ✅ |
| RF30 | `not-found.tsx` | ✅ |
| RF31 | `AvisoCookies.tsx` + `politica-de-privacidade/page.tsx` | ✅ |
| RF32 | Google Analytics 4 — script em `layout.tsx`, ativa sozinho quando `NEXT_PUBLIC_GA_ID` for um ID real | ⚠️ código pronto, **falta o ID real** — ver `07_Proximos_Passos_Deploy` |
| RF33, RF34 | Busca interna e calendário escolar | ❌ não implementados (prioridade "Poderia"/v2, conforme o próprio documento de requisitos) |

---

## 4. Requisitos não funcionais — o que foi feito e o que falta medir

| RNF | O que já existe no código | O que ainda precisa ser verificado/feito |
|---|---|---|
| RNF01 Responsividade | Tailwind mobile-first em todas as páginas | Testar visualmente em iPhone/Android reais antes do aceite final |
| RNF02 Desempenho | `next/image`, fontes com `display: swap`, revalidação de cache | **Nunca foi medido com o Google PageSpeed Insights** — fazer isso após o deploy oficial |
| RNF03 Acessibilidade | `alt` obrigatório nas imagens no schema do Sanity, HTML semântico | **Nunca foi auditado com WCAG/axe** — recomendo rodar o [axe DevTools](https://www.deque.com/axe/devtools/) depois do deploy |
| RNF04 Compatibilidade | CSS padrão, sem APIs experimentais | Testar em Safari (iOS) especificamente, que costuma divergir |
| RNF05 SEO | `sitemap.ts`, `robots.ts`, Open Graph, Schema.org/School em `layout.tsx`, título/descrição por página | Falta registrar o site no Google Search Console (ver doc 07) |
| RNF06 Manutenibilidade | Todo conteúdo editável vive no Sanity, sem precisar mexer em código | **Só é validado de verdade quando alguém da secretaria publicar uma notícia sozinha** (o próprio critério de aceite do documento) |
| RNF07 Segurança | HTTPS automático na Vercel; honeypot anti-spam; rate limiting em `src/lib/email/rateLimit.ts`; sanitização de HTML em `src/lib/email/sanitize.ts` | Senha do Sanity com 12+ caracteres é responsabilidade de quem cria a conta |
| RNF08 Disponibilidade | — | Configurar o UptimeRobot (passo a passo no `06_Manual...` e no `README.md`) |
| RNF09 Backup | Código no GitHub | Sanity tem exportação de dataset própria — agendar isso periodicamente (ver doc 07) |
| RNF10 Privacidade/LGPD | Aviso de cookies com Consent Mode (analytics só roda se a pessoa aceitar), Política de Privacidade, checklist de autorização de imagem em `noticia` e `galeriaMes` | Confirmar que o texto da Política de Privacidade foi revisado por quem entende de LGPD no Colégio |
| RNF11 Identidade visual | Cores/tipografia em `globals.css` (Tailwind `@theme`) | Confirmar com a Direção se batem com o documento `02_Identidade_Visual_e_Design_System` |

---

## 5. Variáveis de ambiente (`.env.local`)

```
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_TOKEN=            # só necessário para scripts/automação — nunca commitar

# E-mail dos formulários (Resend)
RESEND_API_KEY=
RESEND_FROM_EMAIL=           # remetente — precisa de domínio verificado no Resend
EMAIL_DESTINO_VISITAS=
EMAIL_DESTINO_LOCACAO=

# Google Analytics 4
NEXT_PUBLIC_GA_ID=           # formato G-XXXXXXXXXX — deixe vazio para desativar
```

Nenhuma dessas variáveis pode ir para o Git (o `.gitignore` já bloqueia todo `.env*`). Elas precisam ser cadastradas de novo direto no painel da Vercel na hora do deploy — ver `07_Proximos_Passos_Deploy_Francine.md`.

---

## 6. Como rodar e testar localmente

```bash
npm install
npm run dev        # http://localhost:3000  e  http://localhost:3000/studio
```

**Antes de qualquer commit ou deploy, rodar sempre os dois comandos abaixo — nenhuma alteração deve ser enviada se algum deles falhar:**

```bash
npx tsc --noEmit    # confere que não há erro de tipo em todo o projeto
npm run build       # gera a build de produção real (o mesmo processo que a Vercel roda)
```

Testes manuais recomendados a cada alteração relevante:
- Preencher e enviar os dois formulários (Agende uma Visita, Orçamento de Locação) e conferir que o e-mail chega.
- Abrir o menu mobile no celular (ou DevTools em modo responsivo) e conferir que ele fecha ao navegar.
- Publicar um documento de teste no `/studio` e ver se aparece no site (lembrando do cache de 60s configurado no `revalidate` da Home).

---

## 7. O que foi corrigido nesta rodada (histórico resumido)

Uma auditoria completa encontrou e corrigiu, entre outras coisas:
- Bug real: fotos de parceiros, notícias, modalidades e galerias não apareciam por um erro na consulta ao Sanity (`asset->{_ref}` em vez de `asset->{url}`).
- Bug real: a página de Tecnologia Educacional estava quebrada — o schema não batia com os dados já cadastrados no Sanity.
- Conteúdo inventado (datas, números, depoimentos fictícios, nomes de espaços) identificado e substituído por fatos reais (confirmados em documento histórico oficial e posts do Instagram @colegiosagradorg) ou marcado como `[EXEMPLO]` até ter uma fonte real.
- 3 imagens de banco (Unsplash) que retornavam erro 404 foram trocadas.

---

## 8. Pendências conhecidas de conteúdo

Estes campos estão marcados `[EXEMPLO]` no Sanity porque nenhuma fonte confirmou o conteúdo real ainda — não são bugs, são lembretes para a secretaria/direção preencher:
- Um marco da linha do tempo institucional (entre 2008 e 2026).
- Uma curiosidade histórica dos 70 anos.
- Um depoimento (dos 3 slots, 2 já têm relatos reais).
- Capacidade e itens disponíveis do Ginásio e do Auditório (página de Locação de Espaços).
- Descrição da Sala de Arte.
- Missão, Visão e lista de Valores institucionais.
- Pilar "Rotina e Conforto" em Vivencie o Sagrado.
- Fotos de capa das 2 notícias criadas a partir de posts do Instagram (Oficina de Culinária, Campanha do Agasalho).
