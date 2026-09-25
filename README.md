# Precificador Chaos — Chaos Decos Labs

App de página única para **precificar peças impressas em 3D**, testar negociações, calcular a **comissão da Maria Luiza** e gerar o **card de orçamento** no layout da marca.

- Funciona no **celular e no PC**, direto no navegador.
- **Sem servidor e sem cadastro.** Peças salvas, margens e parâmetros ficam no próprio aparelho (localStorage).
- **Abre sem internet** depois da primeira visita (service worker).
- Instala como app: ícone com o logo **CHAOS Autoral colorido (Vol.02)**.

---

## O que ele faz

| Bloco | Para quê |
|---|---|
| **A peça** | Gramas, purga, tempo de preparação e tempo do modelo, copiados do Bambu Studio (`15,58 g`, `6m33s`) |
| **Resumo** | Margem de lucro selecionável (0–85%) → custo da peça, preço direto, lucro por peça e kit 4 |
| **O que a peça custa** | Custo item por item, avulso e kits 2 · 4 · 6 (preparação e purga contam 1× por placa) |
| **Preço por canal** | Direto, site, TikTok Shop, Mercado Livre e Shopee, com gross-up da taxa |
| **Vitrine** | Preços redondos em 9,90 |
| **Quero cobrar X** | Quantidade, peças por placa, valor e canal → margem e sobra; soma a entrega de moto em Campo Grande |
| **Venda fechada** | Base da comissão (Cl. 3.2) e os 3% da Maria Luiza |
| **Card de orçamento** | PNG 1080×1350 pro WhatsApp, com as duas fotos, tarjas e valor |
| **Parâmetros** | R$/kg, energia, DAS, frete de moto, taxas de canal e embalagem |

**Fórmula:**
```
custo ajustado = filamento + energia + máquina + mão de obra + consumíveis
               + parafuso + embalagem + DAS rateado + provisão de falha
preço          = custo ajustado ÷ (1 − margem) ÷ (1 − taxa do canal)
```
Falha pelo tempo da placa: ≤4 h 6% · 4–10 h 12% · >10 h 15% (só sobre filamento, energia, máquina e mão de obra da placa).

---

## 🚀 Colocar no ar (GitHub Pages)

1. No repositório, **apague** os arquivos antigos (`index.html`, `manifest.webmanifest` e os ícones).
2. **Add file → Upload files** → arraste **todos** os arquivos desta pasta → **Commit**.
3. **Settings → Pages** → Source: branch `main`, pasta `/ (root)`. Salve.
4. Em ~1 minuto o endereço aparece no topo (ex.: `https://SEU-USUARIO.github.io/estoque-3d/`).

| Arquivo | Função |
|---|---|
| `index.html` | O app inteiro (HTML, CSS, JS e o logo do card embutido) |
| `manifest.webmanifest` | Faz o navegador reconhecer como app instalável |
| `sw.js` | Guarda o app para abrir sem internet |
| `icon-180.png` | Ícone do iPhone/iPad |
| `icon-192.png` · `icon-512.png` · `icon-512-maskable.png` | Ícones do Android |
| `favicon-32.png` | Ícone da aba do navegador |

> Ao atualizar o `index.html`, aumente o número em `precificador-v2` (v3, v4…) no `sw.js` — assim o celular baixa a versão nova.

---

## 📲 Instalar como app no celular

**iPhone (Safari)** — abra o link → Compartilhar → **Adicionar à Tela de Início**. Tem que ser pelo Safari.

**Android (Chrome)** — abra o link → menu ⋮ → **Instalar aplicativo**.

---

## 🔒 Privacidade
Nada é enviado a terceiros. Os dados vivem no navegador de cada aparelho — celular e PC não se sincronizam sozinhos.
