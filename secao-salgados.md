# 🍽️ Seção de Salgados

Implementação de uma seção dinâmica de produtos (salgados) com foco em **experiência do usuário (UX)**, **responsividade** e **conversão de vendas**.

---

## 🚀 Visão Geral

A seção foi desenvolvida utilizando **JavaScript + Bootstrap**, com renderização dinâmica dos produtos a partir de um array, permitindo fácil manutenção e escalabilidade.

---

## ⚙️ Funcionalidades

- Criação dinâmica de cards via JavaScript  
- Exibição de produtos com:
  - Imagem  
  - Nome  
  - Descrição  
  - Preço  
- Modal de detalhes com:
  - Imagem ampliada  
  - Título centralizado  
  - Descrição com quebra de linha  
- Botão **Comprar** com redirecionamento para o WhatsApp  
- Botão **Detalhes** para abrir o modal  
- Layout totalmente responsivo com Bootstrap  
- Animações e efeitos visuais (hover e transições)

---

## 🧠 Estrutura dos Dados

Os produtos são controlados por um array em JavaScript:

```javascript
const produtos = [
  {
    nome: "Coxinha de Frango",
    preco: 1.50,
    descricao: "Coxinha recheada com frango temperado\n(40 gramas)",
    imagem: "img/images.jpeg"
  },
  {
    nome: "Kibe",
    preco: 1.50,
    descricao: "Kibe crocante por fora e macio por dentro\n(40 gramas)",
    imagem: "img/kibe.jpeg"
  }
];