






// =========================
  // JS SEÇÃO GALERIA
  // =========================
// Número do WhatsApp
const numeroWhatsApp = "5521968061820"; // Coloque o seu número

// Array de fotos da galeria
const fotosGaleria = [
  { imagem: "img/images.jpeg", alt: "Trabalho 1" },
  { imagem: "img/images.jpeg", alt: "Trabalho 2" },
  { imagem: "img/trabalho3.jpg", alt: "Trabalho 3" },
  { imagem: "img/images.jpeg", alt: "Trabalho 4" },
  { imagem: "img/trabalho5.jpg", alt: "Trabalho 5" },
  { imagem: "img/trabalho6.jpg", alt: "Trabalho 6" },
  { imagem: "img/trabalho7.jpg", alt: "Trabalho 7" },
  { imagem: "img/trabalho8.jpg", alt: "Trabalho 8" },
  { imagem: "img/trabalho9.jpg", alt: "Trabalho 9" },
];

// Seleciona o container
const galeriaContainer = document.getElementById("galeria-container");

// Cria os cards dinamicamente
fotosGaleria.forEach(foto => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4";

  col.innerHTML = `
    <div class="card galeria-card border border-warning p-1 shadow-sm">
      <img src="${foto.imagem}" class="card-img-top" alt="${foto.alt}">
      <div class="card-body text-center">
        <a href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("Olá, quero este trabalho: " + foto.alt)}"
           target="_blank" class="btn btn-success btn-sm mt-2">Pedir no WhatsApp</a>
      </div>
    </div>
  `;

  galeriaContainer.appendChild(col);
});





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