# 🏆 Portal História da Copa do Mundo FIFA (1930–2022)

> Portal esportivo moderno, responsivo e interativo que reúne toda a história da Copa do Mundo FIFA — das 13 seleções de 1930 ao tetra argentino em 2022.

Construído com **HTML5**, **CSS3** e **JavaScript puro (Vanilla JS)** — sem frameworks, sem bibliotecas externas e sem necessidade de servidor.

---

## 🚀 Funcionalidades

- **9 seções completas** — Início, História, Campeões, Finais, Estatísticas, Cartões, Troféus, Maiores Campeões e Linha do Tempo.
- **Dados de todas as 22 edições** — de 1930 (Uruguai) a 2022 (Catar), com sede, campeão, vice, placar, artilheiro e público.
- **Tabela de campeões com filtro dinâmico** — pesquise por país, ano ou sede em tempo real.
- **Gráficos interativos via Canvas API** — barras com tooltips customizados, sem Chart.js.
- **Contadores animados** — disparados via `IntersectionObserver` ao entrar na viewport.
- **Linha do tempo cronológica** com modal de detalhes por edição.
- **Hero com taça e logo FIFA** animados (efeito *floating*).
- **Design premium** — tema escuro com detalhes em ouro, menu fixo com *blur*, animações *fade-in* e efeitos *hover*.
- **100% responsivo** — Flexbox, CSS Grid e media queries para mobile, tablet e desktop.

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — Flexbox, Grid, animações, variáveis CSS
- **JavaScript (Vanilla)** — Canvas API, IntersectionObserver, filtros e modais

Sem React, sem build, sem dependências.

## 📁 Estrutura

```
public/copa/
├── index.html       # Estrutura das 9 seções
├── style.css        # Tema escuro + ouro, responsivo
├── script.js        # Dados das 22 copas, gráficos, filtros
├── taca-fifa.png    # Imagem da taça
└── logo-fifa.png    # Logo da FIFA
```

## 📥 Como executar

Basta abrir o arquivo no navegador:

```bash
# clone o repositório
git clone <url-do-repo>

# abra diretamente
open public/copa/index.html
```

Ou acesse pelo servidor de desenvolvimento em `/copa/`.

## 📝 Licença

MIT — livre para uso educacional e pessoal.

---
💛 Feito com paixão pelo futebol e pela história da Copa do Mundo.
