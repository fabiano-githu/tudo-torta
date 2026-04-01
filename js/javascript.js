







   // ============================
  //   MOVIMENTO BANNER PRINCIPAL
  // =============================
 new bootstrap.Carousel('#heroCarousel', {
    interval: 4000,
    ride: 'carousel',
    pause: false
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