




// =========================
// GARANTE QUE O HTML CARREGOU
// =========================
document.addEventListener("DOMContentLoaded", () => {

// =========================
// CONFIG
// =========================
const numeroWhatsApp = "5521968061820";

// =========================
// DADOS
// =========================
const fotosGaleria = [
  { imagem: "img/images.jpeg", alt: "Torta de Frango" },
  { imagem: "img/images.jpeg", alt: "Torta de Atum" },
  { imagem: "img/trabalho3.jpg", alt: "Torta de Pão de Forma" },
  { imagem: "img/trabalho5.jpg", alt: "Torta Especial" },
  { imagem: "img/trabalho6.jpg", alt: "Baguete Recheada" },
  { imagem: "img/trabalho7.jpg", alt: "Bolo de Chocolate" },
  { imagem: "img/trabalho8.jpg", alt: "Bolo de Morango" }
];

// =========================
// INSERIR SLIDES
// =========================
const wrapper = document.getElementById("swiper-wrapper");

if (!wrapper) {
  console.error("Elemento #swiper-wrapper não encontrado");
  return;
}

fotosGaleria.forEach(foto => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <div class="card galeria-card border-0 h-100 overflow-hidden position-relative">

      <div class="img-container">
        <img src="${foto.imagem}" class="card-img-top" alt="${foto.alt}">

        <!-- OVERLAY -->
        <div class="overlay">
          <button class="btn btn-warning btn-sm btn-detalhe"
            data-img="${foto.imagem}"
            data-nome="${foto.alt}">
            Ver detalhes
          </button>
        </div>
      </div>

      <div class="card-body text-center d-flex flex-column">
        <h6 class="fw-bold text-warning ">${foto.alt}</h6>

        <a href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("Olá, quero este: " + foto.alt)}"
          target="_blank"
          class="btn btn-success btn-sm mt-auto">
          Pedir no WhatsApp
        </a>
      </div>

    </div>
  `;

  wrapper.appendChild(slide);
});

// =========================
// INICIAR CARROSSEL
// =========================
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false // 🔥 resolve travar no hover
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  }
});


// =================================
// MODAL (CLIQUE) PÁGINA GALERIA 
// =================================
// =================================
// MODAL (CLIQUE) - ABRIR DIRETO
// =================================
document.addEventListener("click", function(e) {

  // Verifica se clicou em um botão de detalhe
  if (e.target.classList.contains("btn-detalhe")) {

    // Pega os dados do botão
    const img = e.target.getAttribute("data-img");
    const nome = e.target.getAttribute("data-nome");

    // Insere no modal
    document.getElementById("imagemModal").src = img;
    document.getElementById("tituloModal").innerText = nome;

    // Cria e abre o modal imediatamente
    const modal = new bootstrap.Modal(document.getElementById("modalImagem"));
    modal.show();
  }

});

});



// =================================
// TEXTO ANIMADO PÁGINA GALERIA 
// =================================
const frases = [
    "💬 Atendimento imediato no WhatsApp",
    "Veja nossos trabalhos incríveis 👇",
    "Qualidade que conquista clientes ✨",
    "Produções feitas com carinho ❤️",
    "Surpreenda-se com nossos resultados 🔥"
];

let i = 0;
const elemento = document.getElementById("texto-dinamico");

function trocarTexto() {
    elemento.style.opacity = 0;

    setTimeout(() => {
        elemento.innerText = frases[i];
        elemento.style.opacity = 1;
        i = (i + 1) % frases.length;
    }, 300);
}

setInterval(trocarTexto, 3000);
trocarTexto();






// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // 📅 ATUALIZA ANO DO FOOTER
  // =========================

  // Seleciona o elemento pelo ID
  const ano = document.getElementById("ano");

  // Verifica se o elemento existe (boa prática)
  if (ano) {
    // Pega o ano atual
    const anoAtual = new Date().getFullYear();

    // Insere no HTML
    ano.textContent = anoAtual;
  }

});


 // =========================
  //   BOTÃO VOLTA PARA TOPO
  // =========================
document.addEventListener("DOMContentLoaded", function () {
  const btnTopo = document.getElementById("btnTopo");

  // força aparecer
  btnTopo.classList.add("show");

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});