# 🛍️ B8One Storefront

Aplicação desenvolvida como desafio técnico para vaga de Front-end Júnior, com foco em boas práticas de engenharia, componentização e simulação de um fluxo real de desenvolvimento de produto.

---

## 🚀 Tecnologias

* React
* TypeScript
* Vite
* CSS puro
* ESLint + Prettier

---

## 📐 Arquitetura

O projeto segue uma abordagem orientada a componentes, com separação clara entre:

* componentes reutilizáveis
* dados (data)
* tipagens (types)

Essa estrutura foi escolhida para garantir simplicidade, escalabilidade e facilidade de manutenção no contexto do projeto.

---

## ▶️ Como rodar

```bash
npm install
npm run dev
```

---

## 📌 Funcionalidades

### 🟣 Página de Ofertas

* Estrutura base da página `/offers`
* Layout responsivo
* Container centralizado

---

### 🟣 Banner

* Componente reutilizável
* CTA com scroll suave
* Microinterações
* Ajustes de z-index

---

### 🟣 ProductsSection

* Grid responsivo:

  * Mobile → 1 coluna
  * Tablet → 2 colunas
  * Desktop → 3 colunas
* Consumo de API externa
* Fallback com mock local
* Skeleton loading
* Validação de dados

---

### 🟣 ProductCard

* Componente reutilizável
* Tipagem forte com TypeScript
* Acessibilidade (aria-label)
* Microinterações (hover)

---

### 🟣 ProductCarouselSection

* Carrossel custom (sem uso de libs)
* Navegação com setas
* Paginação com dots
* Transição suave com `translateX`
* Responsividade:

  * Mobile → 1 item
  * Desktop → 4 itens
* Controle de estado (`currentIndex`)

---

### 🟣 NewsletterSection

* Formulário com nome e email
* Validação de campos obrigatórios
* Feedback visual de erro
* Modal de sucesso (simulado)
* Animação no ícone de confirmação
* Reset de formulário ao fechar modal

---

### 🟣 Footer

* Estrutura em colunas:

  * Atendimento
  * Políticas
  * Institucional
  * Dúvidas
  * Formas de pagamento
* Grid responsivo
* Componente reutilizável para métodos de pagamento
* Renderização dinâmica via map
* Integração visual com Newsletter

---

## 🌐 API

Endpoint utilizado:

```bash
https://api.escuelajs.co/api/v1/products
```

### Comportamento

* Filtro de produtos
* Randomização a cada carregamento
* Limite de itens exibidos
* Fallback resiliente com mock local

---

## 🔁 Git Flow

Fluxo de versionamento aplicado:

```text
feature → develop → release → main → develop
hotfix → develop → main → develop
```

### ✔ Práticas adotadas

* Commits semânticos
* Pull Requests obrigatórios
* Versionamento semântico
* Changelog estruturado

---

## 📦 Versionamento

* 0.1.0 → Setup inicial
* 0.2.0 → Products Section
* 0.3.0 → ProductCard
* 0.4.0 → API + Skeleton + Fallback
* 0.5.0 → ProductCarouselSection
* 0.6.0 → NewsletterSection
* 0.7.0 → Footer

---

## 🌐 Deploy

A aplicação está disponível em:

👉 https://b8one-storefront.vercel.app

---

## 🧠 Diferenciais

* Integração com API real
* Fallback resiliente para falhas
* Skeleton loading
* Carrossel custom sem bibliotecas externas
* Controle fino de responsividade
* Componentização reutilizável
* Organização de dados e tipagens
* Fluxo profissional com Git Flow
* Changelog organizado
* Deploy contínuo com Vercel

---

## 📁 Estrutura de pastas

```text
src/
  assets/
  components/
    Banner/
    Footer/
    FooterPayments/
    Icons/
    NewsletterSection/
    OffersPage/
    ProductCard/
    ProductCarouselSection/
    ProductsSection/
  data/
    PaymentData.ts
    productsData.json
  types/
    product.types.ts
```

---

## 🏁 Status do projeto

✅ Concluído — pronto para avaliação técnica

---

## 📌 Considerações finais

Este projeto foi desenvolvido com foco em:

* Qualidade de código
* Escalabilidade
* Boas práticas de mercado
* Simulação de um fluxo real de desenvolvimento

---
