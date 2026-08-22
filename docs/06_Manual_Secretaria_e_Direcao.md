# Manual de Uso do Sanity Studio — Secretaria e Direção

> Este é o manual previsto no requisito **RF27** do Documento de Requisitos. Ele existe para que qualquer pessoa da equipe do Colégio consiga **publicar e atualizar o site sozinha, sem depender de programador** (RNF06). Guarde este arquivo — e considere imprimir ou exportar em PDF para a sessão de treinamento presencial.

---

## Antes de começar: 3 regras de ouro

1. **Nunca publique foto de aluno menor de idade sem autorização de imagem assinada.** Na dúvida, não publique (Regra de Negócio RN01 do Documento de Requisitos). Os formulários de Notícia e Galeria do Mês têm uma caixinha de checklist para isso — só marque se realmente já conferiu.
2. **Textos marcados `[EXEMPLO]` não são reais.** Foram deixados de propósito no lugar de números e fatos inventados, para servir de lembrete. Sempre que você encontrar um texto começando com `[EXEMPLO]`, é um sinal de "preencha isto com a informação verdadeira".
3. **Toda alteração publicada ("Publish") aparece no site em até 1 minuto**, sem precisar avisar ninguém.

---

## 1. Como entrar no painel

1. Acesse `/studio` no endereço do site (ex.: `https://[dominio-do-site]/studio`).
2. Entre com o e-mail e senha cadastrados no Sanity (veja a seção "Como pedir acesso" no fim deste documento).
3. Você verá um menu à esquerda com uma lista de tipos de conteúdo — é por ali que tudo é editado.

---

## 2. Tarefas do dia a dia (as mais frequentes)

### Publicar uma Notícia
1. Menu lateral → **Notícia / Aconteceu no Sagrado** → botão **"+ Criar"**.
2. Preencha: Título, Slug (clique em "Generate"), Data, Categoria, Resumo, Imagem de Capa (com Alt obrigatório), Conteúdo Completo.
3. Marque o checklist de autorização de imagem.
4. Clique em **Publish**.

### Adicionar fotos do mês em "Aconteceu no Sagrado"
1. Menu lateral → **Galeria do Mês** → **"+ Criar"**.
2. Preencha Título, Mês, Ano, Descrição.
3. No campo Fotos, clique em "Add item" para cada foto — cada uma precisa de um Alt (texto alternativo).
4. Marque o checklist de autorização de imagem e clique em **Publish**.

### Editar o aviso/campanha que aparece no topo da Home
1. Menu lateral → **Configurações da Home** (`homeBlocks`).

> ⚠️ **Atenção:** este bloco existe no Sanity mas **hoje não está conectado ao site** — o aviso da Home vem de um texto fixo no código. Se quiser reativar esse controle, peça para a desenvolvedora reconectar (é uma alteração pequena). Enquanto isso, para mudar o aviso da Home, é preciso pedir uma alteração de código.

---

## 3. Conteúdo institucional (muda com menos frequência)

| O que editar | Onde no Studio |
|---|---|
| Nossa História (texto, missão, visão, valores, princípios, fotos) | **Página: Nossa História** |
| Linha do tempo dos 70 anos | **Item da Linha do Tempo** (um documento por marco histórico) |
| Curiosidades e programação dos 70 anos | **Página: 70 Anos** |
| Depoimentos dos 70 anos | **Depoimento 70 Anos** |
| Modalidades de Ensino (Infantil, Fundamental I/II, Médio, Recreação) | **Modalidade de Ensino** |
| Diferenciais (os cartões da Home e da página Diferenciais) | **Diferencial Pedagógico** |
| Ambientes da Estrutura Física | **Ambiente da Estrutura Física** |
| Espaços para Locação (Ginásio, Auditório) | **Espaço para Locação** |
| Plataformas de Tecnologia (Diário Escola, Iônica) | **Página: Tecnologia Educacional** |
| Passos, documentos e FAQ de Matrículas | **Página: Matrículas** |
| Introdução e pilares de Vivencie o Sagrado | **Página: Vivencie o Sagrado** |
| Empresas Parceiras | **Empresa Parceira** |
| Telefones, e-mails, endereço, redes sociais | **Configurações Globais do Site** (`siteSettings`) |

Todos seguem o mesmo padrão: **abrir o documento → editar os campos → clicar em Publish**. Nenhum requer conhecimento técnico.

---

## 4. Como conceder acesso a uma nova pessoa

1. Acesse [manage.sanity.io](https://manage.sanity.io) e entre com a conta que já tem acesso ao projeto.
2. Selecione o projeto do Colégio Sagrado Coração de Jesus.
3. Aba **Members** → **Invite Members**.
4. Digite o e-mail da pessoa e escolha o papel:
   - **Editor** — cria, edita e publica conteúdo. É o papel certo para a secretaria/comunicação.
   - **Administrator** — acesso total, incluindo gerenciar quem tem acesso. Reservar para a Direção/TI.

---

## 5. Se algo der errado

- **Publiquei algo errado:** volte no documento, corrija o campo e clique em Publish de novo — a correção substitui o que estava no ar em até 1 minuto.
- **Não sei onde editar algo:** procure pelo nome mais parecido no menu lateral, ou peça para a desenvolvedora indicar (é uma pergunta rápida, não uma alteração de código).
- **O site não atualizou depois que eu publiquei:** espere 1 minuto e atualize a página (a Home tem um cache curto de 60 segundos, as demais páginas atualizam na hora).
- **Esqueci a senha:** use "Esqueci minha senha" na tela de login do Sanity, ou peça para um Administrador reenviar o convite.
