# Desafio Agtec: Homepage da Prefeitura de Palmas 

Este projeto é uma landing page desenvolvida como parte do desafio técnico da Agtec. O objetivo foi recriar a homepage da Prefeitura de Palmas com a maior fidelidade possível ao layout proposto, utilizando apenas **HTML**, **CSS** e **JavaScript** puros, e seguindo os padrões visuais e de acessibilidade comuns em sites governamentais (Gov.BR).

**🔗 Link para o site:** [https://keven-rdr.github.io/Desafio-Palmas-AGTEC/](https://keven-rdr.github.io/Desafio-Palmas-AGTEC/)

## 🚀 Tecnologias e Técnicas Utilizadas

Para construir esta página, foram empregadas diversas tecnologias e técnicas modernas de desenvolvimento web, com foco em performance, responsividade e acessibilidade.

### Estrutura e Semântica (HTML5)
* **HTML Semântico:** A estrutura da página foi construída com tags semânticas do HTML5, como `<header>`, `<footer>`, `<section>`, `<nav>` e `<article>`, para melhorar a organização do código, a indexação por buscadores (SEO) e a acessibilidade para leitores de tela.

### Estilização e Responsividade (CSS3)
* **Flexbox e CSS Grid:** Utilizados extensivamente para criar layouts complexos e responsivos de forma eficiente, como o grid de notícias, os cards de serviço e o posicionamento dos elementos no header e footer.
* **Design Responsivo:** Media queries (`@media`) foram implementadas para garantir que a página se adapte perfeitamente a diferentes tamanhos de tela, desde dispositivos móveis até desktops.
* **Estilização Avançada:** Foram usados pseudo-elementos (`::after`) para criar formas decorativas (como a onda na seção de serviços), gradientes (`linear-gradient`) e transições (`transition`) para adicionar micro-interações suaves.

### Interatividade e Funcionalidades (JavaScript)
O site é dinâmico e interativo graças ao uso de JavaScript puro (Vanilla JS), com foco nas seguintes funcionalidades:
* **Manipulação do DOM:** Para criar e modificar elementos da página dinamicamente.
* **Acessibilidade:**
    * **Controle de Fonte:** Botões `A-`, `A` e `A+` que permitem ao usuário diminuir, resetar e aumentar o tamanho da fonte do site.
    * **Alto Contraste:** Uma função para alternar um modo de alto contraste que melhora a legibilidade para pessoas com baixa visão.
* **Galeria de Imagens:** As miniaturas na galeria de fotos são clicáveis e alteram a imagem principal dinamicamente.
* **Lazy Loading de Imagens:** Usando a **Intersection Observer API**, as imagens só são carregadas quando se aproximam da área visível da tela, otimizando o tempo de carregamento inicial da página.
* **Service Worker:** Foi implementado o registro de um Service Worker, o que abre caminho para futuras funcionalidades de Progressive Web App (PWA), como cache e acesso offline.
* **Validação de Formulários:** Uma verificação simples garante que os campos obrigatórios em formulários sejam preenchidos antes do envio.

## 📁 Estrutura do Projeto

O projeto está organizado de forma clara e modular para facilitar a manutenção:

```
├── assets/
│   ├── fonts/
│   └── imagens/      # Todas as imagens e ícones do projeto
├── css/
│   └── style.css     # Folha de estilos principal
├── js/
│   └── script.js     # Todo o código JavaScript de interatividade
├── .gitignore        # Arquivos ignorados pelo Git
└── index.html        # Arquivo principal da página

```

## 🛠️ Como Executar

Por ser um projeto front-end estático, não há necessidade de um servidor complexo ou compilação.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/keven-rdr/Desafio-Palmas-AGTEC.git](https://github.com/keven-rdr/Desafio-Palmas-AGTEC.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Desafio-Palmas-AGTEC
    ```
3.  **Abra o arquivo `index.html`** diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).
