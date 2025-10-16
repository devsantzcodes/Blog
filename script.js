/*
  Arquivo: script.js
  Projeto: O Blog do Macho (Versão Acadêmica)
  Descrição: Este arquivo contém toda a lógica de programação e interatividade
             do blog. Ele é responsável por manipular o DOM, responder a eventos
             do usuário e adicionar funcionalidades dinâmicas à página.
*/

// ===================================================================================
// INICIALIZAÇÃO
// Garante que o script só será executado após o carregamento completo do HTML.
// ===================================================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado. Iniciando scripts do Blog do Macho.");

  // ===================================================================================
  // SELETORES DE ELEMENTOS
  // Armazena os elementos do DOM em variáveis para fácil acesso e melhor performance.
  // ===================================================================================
  const newsletterForm = document.querySelector(".widget form");
  const newsletterNameInput = document.getElementById("nome");
  const newsletterEmailInput = document.getElementById("email");
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-form input");
  const readMoreLinks = document.querySelectorAll(".ler-mais");
  const galleryItems = document.querySelectorAll(".galeria-item img");
  const posts = document.querySelectorAll(".post");
  const footerCopyright = document.querySelector("footer .container p");

  // ===================================================================================
  // FUNCIONALIDADES BASE (EXEMPLOS DA AULA)
  // ===================================================================================

  // 1. Botão "Voltar ao Topo" Dinâmico
  // Cria e gerencia um botão que aparece quando o usuário rola a página.
  // -----------------------------------------------------------------------------------
  function setupBackToTopButton() {
    // Cria o botão dinamicamente
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑";
    backToTopButton.id = "back-to-top";
    document.body.appendChild(backToTopButton);

    // Adiciona o estilo para o botão
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.backgroundColor = "#0066cc";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "50%";
    backToTopButton.style.width = "50px";
    backToTopButton.style.height = "50px";
    backToTopButton.style.fontSize = "24px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none"; // Começa oculto
    backToTopButton.style.zIndex = "1000";
    backToTopButton.style.transition = "opacity 0.3s, visibility 0.3s";

    // Lógica para mostrar/ocultar o botão
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        // Mostra após rolar 300px
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // Lógica para rolar suavemente para o topo
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    console.log("Funcionalidade 'Voltar ao Topo' iniciada.");
  }

  // Smooth Scrolling for Navigation Links
  // -----------------------------------------------------------------------------------
  function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
          event.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
    console.log("Funcionalidade 'Smooth Scrolling' iniciada.");
  }

  // 2. Modo Escuro (Dark Mode)
  // Adiciona um botão para alternar entre os temas claro e escuro.
  // -----------------------------------------------------------------------------------
  function setupDarkModeToggle() {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙";
    toggleButton.id = "dark-mode-toggle";
    document.querySelector("header .containers").appendChild(toggleButton); // Adiciona ao header

    // Estilos do botão de toggle
    toggleButton.style.position = "absolute";
    toggleButton.style.top = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.backgroundColor = "#f5f5f5";
    toggleButton.style.color = "#222";
    toggleButton.style.border = "1px solid #ddd";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.width = "40px";
    toggleButton.style.height = "40px";
    toggleButton.style.fontSize = "20px";
    toggleButton.style.cursor = "pointer";

    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Atualiza o ícone do botão
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.innerText = "☀️";
        toggleButton.style.backgroundColor = "#333";
        toggleButton.style.color = "#fff";
      } else {
        toggleButton.innerText = "🌙";
        toggleButton.style.backgroundColor = "#f5f5f5";
        toggleButton.style.color = "#222";
      }
      console.log("Modo Escuro alternado.");
    });
    console.log("Funcionalidade 'Modo Escuro' iniciada.");
  }

  // 3. Validação do Formulário de Newsletter
  // Verifica se os campos de nome e e-mail estão preenchidos corretamente.
  // -----------------------------------------------------------------------------------
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio real do formulário
      let isValid = true;

      // Limpa estilos de erro anteriores
      newsletterNameInput.style.border = "1px solid #ccc";
      newsletterEmailInput.style.border = "1px solid #ccc";

      // Validação do nome
      if (newsletterNameInput.value.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        newsletterNameInput.style.border = "2px solid red";
        isValid = false;
      }
      // Validação do e-mail
      else if (
        !newsletterEmailInput.value.includes("@") ||
        newsletterEmailInput.value.trim().length < 5
      ) {
        alert("Por favor, insira um e-mail válido.");
        newsletterEmailInput.style.border = "2px solid red";
        isValid = false;
      }

      // Se tudo estiver válido, exibe uma mensagem de sucesso
      if (isValid) {
        if (
          confirm(
            `Obrigado, ${newsletterNameInput.value}! Deseja confirmar a inscrição com o e-mail ${newsletterEmailInput.value}?`
          )
        ) {
          alert("Inscrição realizada com sucesso!");
          console.log(
            `Inscrição na newsletter: ${newsletterNameInput.value}, ${newsletterEmailInput.value}`
          );
          newsletterForm.reset(); // Limpa o formulário
        } else {
          console.log("Inscrição cancelada pelo usuário.");
        }
      } else {
        console.error("Falha na validação da newsletter.");
      }
    });
    console.log("Funcionalidade 'Validação de Newsletter' iniciada.");
  }

  // 4. Galeria de Imagens Interativa (Modal)
  // Abre uma imagem da galeria em um modal ao ser clicada.
  // -----------------------------------------------------------------------------------
  function setupImageModal() {
    // Cria a estrutura do modal dinamicamente
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.innerHTML = `
      <span class="close-modal-btn">&times;</span>
      <img class="modal-content" id="modal-img">
    `;
    document.body.appendChild(modal);

    // Estilos do Modal
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "2000";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.85)";
    modal.style.overflow = "auto";
    modal.style.textAlign = "center";

    const modalImg = document.getElementById("modal-img");
    const closeBtn = modal.querySelector(".close-modal-btn");

    // Estilos do conteúdo do modal e botão de fechar
    modalImg.style.margin = "auto";
    modalImg.style.display = "block";
    modalImg.style.maxWidth = "80%";
    modalImg.style.maxHeight = "80%";
    modalImg.style.marginTop = "5%";

    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "35px";
    closeBtn.style.color = "#f1f1f1";
    closeBtn.style.fontSize = "40px";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.cursor = "pointer";

    galleryItems.forEach((img) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log(`Imagem aberta no modal: ${this.src}`);
      });
    });

    // Função para fechar o modal
    const closeModal = () => {
      modal.style.display = "none";
      console.log("Modal de imagem fechado.");
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        // Fecha se clicar no fundo
        closeModal();
      }
    });

    console.log("Funcionalidade 'Galeria Modal' iniciada.");
  }

  // 5. Atualização Dinâmica do Ano no Rodapé
  // Garante que o ano no copyright seja sempre o ano atual.
  // -----------------------------------------------------------------------------------
  if (footerCopyright) {
    footerCopyright.textContent = footerCopyright.textContent.replace(
      "2025",
      new Date().getFullYear()
    );
    console.log("Ano do rodapé atualizado para o ano corrente.");
  }

  // ===================================================================================
  // FUNCIONALIDADES EXTRAS
  // ===================================================================================

  // 6. Manipulador para a Barra de Pesquisa
  // Exibe um alerta com o termo pesquisado.
  // -----------------------------------------------------------------------------------
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        alert(
          `Você buscou por: "${searchTerm}"\n(Funcionalidade de busca em desenvolvimento)`
        );
        console.log(`Busca realizada pelo termo: ${searchTerm}`);
      } else {
        alert("Por favor, digite um termo para buscar.");
        console.warn("Tentativa de busca com campo vazio.");
      }
    });
    console.log("Funcionalidade 'Barra de Pesquisa' iniciada.");
  }

  // 7. Alerta para Links "Ler mais..."
  // Simula uma funcionalidade em desenvolvimento ao clicar nos links.
  // -----------------------------------------------------------------------------------
  readMoreLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert(
        "A página completa deste artigo ainda está em construção. Volte em breve!"
      );
      console.log("Link 'Ler mais' clicado.");
    });
  });

  // 8. Efeito de "Sticky Header" ao Rolar
  // Adiciona uma sombra ao header quando o usuário rola a página.
  // -----------------------------------------------------------------------------------
  function setupStickyHeader() {
    const header = document.querySelector("header");
    header.style.transition = "box-shadow 0.3s ease";
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
      } else {
        header.style.boxShadow = "none";
      }
    });
    console.log("Funcionalidade 'Sticky Header' iniciada.");
  }

  // 9. Cálculo do Tempo de Leitura dos Artigos
  // Adiciona dinamicamente uma estimativa de tempo de leitura para cada post.
  // -----------------------------------------------------------------------------------
  function calculateReadingTime() {
    const wordsPerMinute = 200; // Média de palavras lidas por minuto
    posts.forEach((post) => {
      const text = post.querySelector("p:not(.meta)").textContent;
      const wordCount = text.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);

      const readingTimeElement = document.createElement("p");
      readingTimeElement.className = "reading-time";
      readingTimeElement.innerHTML = `<strong>Tempo de leitura:</strong> ${readingTime} min`;
      readingTimeElement.style.fontSize = "0.8rem";
      readingTimeElement.style.color = "#555";
      readingTimeElement.style.marginTop = "10px";

      post.querySelector(".ler-mais").before(readingTimeElement);
    });
    console.log("Funcionalidade 'Tempo de Leitura' iniciada.");
  }

  // 10. Efeito de Digitação no Título do Blog (Typewriter)
  // Anima o título principal do blog como se estivesse sendo digitado.
  // -----------------------------------------------------------------------------------
  function typewriterEffect() {
    const titleElement = document.querySelector("header h1");
    const originalTitle = titleElement.textContent;
    let i = 0;
    titleElement.textContent = "";

    function type() {
      if (i < originalTitle.length) {
        titleElement.textContent += originalTitle.charAt(i);
        i++;
        setTimeout(type, 150); // Velocidade da digitação
      }
    }
    type();
    console.log("Funcionalidade 'Efeito de Digitação' iniciada.");
  }

  // ===================================================================================
  // CHAMADA DAS FUNÇÕES
  // Executa todas as funções de inicialização.
  // ===================================================================================
  setupBackToTopButton();
  setupSmoothScrolling();
  setupDarkModeToggle();
  setupImageModal();
  setupStickyHeader();
  calculateReadingTime();
  typewriterEffect();
}); // Fim do 'DOMContentLoaded'

// Fim do arquivo script.js
