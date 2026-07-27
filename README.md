# Estoque 3D — Inventário, Custo e Lucro

App de página única para **controlar o estoque de peças impressas em 3D, calcular o custo/preço de cada peça e gerar relatório de vendas, perdas e lucro**.

Identidade visual **Deco Chaos**: preto `#1D1D1B`, vermelho `#E42230`, cinza `#6C6C6B` sobre fundo claro, tipografia condensada (Oswald) nos títulos e números.

- Funciona no **celular e no PC** (basta abrir no navegador).
- **Sem servidor e sem Supabase.** Os dados ficam salvos no próprio aparelho (localStorage).
- **Backup em arquivo** (exportar/importar `.json`).
- **Sincronização opcional entre aparelhos** via GitHub Gist privado (grátis).
- Cálculo alinhado à planilha *Custo de Energia — Ender 3 V3 SE*: **Energia = Potência/1000 × horas × tarifa**.

---

## 🚀 Como colocar no ar (GitHub Pages)

1. Crie um repositório no GitHub (ex.: `estoque-3d`).
2. Envie **todos os arquivos desta pasta** (não só o `index.html` — os ícones e o manifest são o que fazem virar app no celular).
3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, escolha a branch `main` e a pasta `/ (root)`. Salve.
5. Aguarde ~1 minuto. O endereço aparece no topo da página (ex.: `https://SEU-USUARIO.github.io/estoque-3d/`).

> Enviar pelo site do GitHub: no repositório → **Add file → Upload files** → arraste os arquivos → **Commit**.

### Arquivos do repositório

| Arquivo | Função |
|---|---|
| `index.html` | O app inteiro (HTML, CSS, JS e a logo vetorial) |
| `manifest.webmanifest` | Faz o navegador reconhecer como aplicativo instalável |
| `icon-180.png` | Ícone do iPhone/iPad |
| `icon-192.png` · `icon-512.png` · `icon-512-maskable.png` | Ícones do Android |
| `README.md` · `.gitignore` | Documentação e ignorados do Git |

---

## 📲 Instalar como app no celular

**iPhone / iPad (Safari)** — abra o link → botão Compartilhar → **Adicionar à Tela de Início** → Adicionar.
Precisa ser pelo **Safari**; Chrome e Instagram não instalam.

**Android (Chrome)** — abra o link → menu ⋮ → **Instalar aplicativo** (ou "Adicionar à tela inicial").

Depois disso ele abre em tela cheia, com o ícone da chama e sem a barra do navegador — igual a um app instalado.

---

## 📱 Como usar

**Inventário** — cadastre cada peça (nome, material, peso em g, tempo em h, margem). O app calcula custo, preço de venda e lucro, e controla a quantidade em estoque (`＋1` / `−1`).

**Calcular** — calculadora rápida: preencha os dados e veja o custo detalhado (filamento, energia, máquina, mão de obra, extra) e o preço sugerido. Pode salvar direto no inventário.

**Vendas** — registre uma **venda** (baixa do estoque, entra como receita/lucro) ou uma **perda** (falha de impressão, entra como prejuízo do material). Tudo pode ser **excluído**.

**Relatório** — receita, custo, perdas e **lucro líquido** por período, gráfico por mês e ranking de peças mais vendidas. Também tem os botões de backup e sincronização.

### Materiais e parâmetros
Em **Inventário → 🧵 Materiais** você ajusta: potência de cada material (PLA 100 W, PETG 150 W, ABS 190 W), preço do kg do filamento, **tarifa de energia** (MS ≈ 0,98 R$/kWh), custo da máquina por hora, mão de obra por hora e margem padrão.

**Fórmula do custo:**
```
Custo = (peso_g/1000 × preço_kg)          ← filamento
      + (potência_W/1000 × horas × tarifa) ← energia
      + (horas × custo_máquina_hora)        ← desgaste da máquina
      + (mão_de_obra_h × custo_hora)         ← trabalho
      + custo_extra                          ← pintura, cola, frete...
Preço de venda = Custo × (1 + margem%/100)
```

---

## ☁️ Sincronizar entre celular e PC (opcional, sem Supabase)

Usa um **Gist privado** do GitHub como "nuvem":

1. No GitHub: **Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token**.
2. Marque **apenas** o escopo **`gist`**. Gere e copie o token (`ghp_...`).
3. No app: **Relatório → ☁️ Sincronizar** → cole o token → **Enviar p/ nuvem**. Ele cria o Gist e mostra o **Gist ID**.
4. No outro aparelho: abra o app, cole o **mesmo token e o mesmo Gist ID** → **Baixar da nuvem**.
5. Marque *"Enviar automaticamente ao salvar"* para manter atualizado.

> O token fica salvo só no seu navegador. Se preferir não usar nuvem, use **Exportar/Importar backup** para passar os dados manualmente.

---

## 🔒 Privacidade
Nenhum dado é enviado a terceiros. Sem cadastro, sem servidor. Os dados vivem no seu navegador (e, se você ativar, no seu Gist privado do GitHub).
