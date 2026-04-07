// =========================
// SEÇÃO TORTA SALGADAS
// =========================

const tortas = [
  { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 100.00, descricao: " Cobertura Purê de Batata (20x40cm)\nServe até 10 pessoas", imagem: "img/WhatsApp_Image_2024-01-13_at_15.32.02__1_-removebg-preview.png" },
  { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 200.00, descricao: "Cobertura Purê de Batata (30x40cm)\nServe até 30 pessoas", imagem: "img/WhatsApp Image 2024-03-24 at 20.37.17 (2).jpeg" },
  { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 250.00, descricao: "Cobertura Purê de Batata (20x40cm)\nServe até 40 pessoas", imagem: "img/IMG_20230507_081014742.jpg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 100.00, descricao: " Cobertura Purê de Batata (25cm)\nServe até 12 pessoas", imagem: "img/IMG_20220921_162929284.jpg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 150.00, descricao: "Cobertura Purê de Batata (35cm)\nServe até 20 pessoas", imagem: "img/IMG-20210720-WA0070.jpg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 180.00, descricao: "Cobertura Purê de Batata (45cm)\nServe até 30 pessoas", imagem: "img/WhatsApp Image 2023-10-21 at 17.13.07 (1).jpeg" },
];

function renderTortas(tipoSelecionado = "todos") {
    const container = document.getElementById("container-tortas");
    container.innerHTML = "";

    tortas.forEach((torta, index) => {
        if (tipoSelecionado === "todos" || torta.tipo === tipoSelecionado) {

            const col = document.createElement("div");
            col.className = "col-md-4";

            col.innerHTML = `
                <div class="card torta-card shadow-lg border-3 border-warning">
                    <img src="${torta.imagem}" class="card-img-top" style="height:300px; object-fit:cover;">
                    
                    <div class="card-body text-center">
                        <h5 class="card-title text-warning">${torta.nome}</h5>
                        <p class="card-text text-white">${torta.descricao.replace(/\n/g,"<br>")}</p>
                        <h4 class="text-warning fw-bold">R$ ${torta.preco.toFixed(2)}</h4>

                        <button class="btn btn-warning mt-2" onclick="abrirModalTorta(${index})">
                            Ver Detalhes
                        </button>

                        <a href="https://web.whatsapp.com/ ${torta.nome}" class="btn btn-success mt-2">
                            Pedir no WhatsApp
                        </a>
                    </div>
                </div>
            `;

            container.appendChild(col);
        }
    });
}

// ✅ MODAL TORTA
function abrirModalTorta(index) {
    const torta = tortas[index];

    document.getElementById("modalTituloTorta").innerText = torta.nome;
    document.getElementById("modalImgTorta").src = torta.imagem;
    document.getElementById("modalDescTorta").innerHTML = torta.descricao.replace(/\n/g,"<br>");
    document.getElementById("modalPrecoTorta").innerText = "R$ " + torta.preco.toFixed(2);

    new bootstrap.Modal(document.getElementById("modalTorta")).show();
}



// =========================
// JS FILTRAR TORTAS 
// =========================
function filtrarTortas(tipo) {
    renderTortas(tipo); // reaproveita sua função principal

    // scroll suave até a seção (opcional, mas você já usa)
    const secao = document.getElementById("secao-torta-salgada");

    if (secao) {
       const offset = 100; // maior que navbar
        const pos = secao.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
}





// =========================
// SALGADOS
// =========================
const numeroWhatsApp = "5521968061820";

const produtos = [
  { nome: "Coxinha", preco: 2.00, descricao: "Carne seca temperado\n(Unid 30g)", imagem: "img/coxinha.webp" },
  { nome: "Coxinha", preco: 1.50, descricao: "Frango temperado\n(Unid 30g)", imagem: "img/coxinha-de-frango-jpeg.webp" },
  { nome: "Bolinha", preco: 1.50, descricao: "Queijo\n(Unid 30g)", imagem: "img/01-Bolinho-de-queijo.jpg" },
  { nome: "Pastel de Forno", preco: 2.50, descricao: "Frango\n(Unid 40g)", imagem: "img/maxresdefault-2022-10-03T105917.680.jpg" },
  { nome: "Pastel de Forno", preco: 2.50, descricao: "Carne seca\n(Unid 40g)", imagem: "img/Pastel-assado-de-carne-seca.jpg" },
  { nome: "Esfirra", preco: 2.50, descricao: "Carne moída\n(Unid 40g)", imagem: "img/Esfirra-de-carne-moida.jpg" },
  { nome: "Esfirra", preco: 1.50, descricao: "Frango\n(Unid 40g)", imagem: "img/hq720.jpg" },
  { nome: "Joelho", preco: 1.50, descricao: "Queijo e presunto\n(Unid 40g)", imagem: "img/71929-original.webp" }
];

function renderizarCards() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  produtos.forEach((produto, index) => {

    const mensagem = `Olá, quero comprar: ${produto.nome}`;
    const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-custom">
          <img src="${produto.imagem}" class="card-img-top">

          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-warning text-center">${produto.nome}</h5>
            <p class="card-text text-white text-center">${produto.descricao}</p>

            <h6 class="text-warning mb-3 text-center ">
              R$ ${produto.preco.toFixed(2)}
            </h6>

            <div class="mt-auto d-flex gap-2">
              <a href="${linkZap}" target="_blank" class="btn btn-whatsapp w-50">
                Comprar
              </a>

              <button class="btn btn-outline-warning w-50" onclick="abrirModalSalgados(${index})">
                Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}



// ✅ MODAL SALGADOS
function abrirModalSalgados(index) {
  const produto = produtos[index];

  document.getElementById("modalTituloSalgado").innerText = produto.nome;
  document.getElementById("modalImagemSalgado").src = produto.imagem;
  document.getElementById("modalDescricaoSalgado").innerText = produto.descricao;
  document.getElementById("modalPrecoSalgado").innerText = `R$ ${produto.preco.toFixed(2)}`;

  new bootstrap.Modal(document.getElementById("modalSalgados")).show();
}







document.addEventListener("DOMContentLoaded", () => {

  const numeroWhatsApp = "5521968061820";

  const fotosGaleria = [
    { imagem: "img/WhatsApp_Image_2024-01-13_at_15.32.02__1_-removebg-preview.png", alt: "Torta Retangular de Pão de Forma", descricao: "Torta de três camadas de recheio, camada de maionese e toda cobertura de purê de batata." },
    { imagem: "img/IMG-20210720-WA0070.jpg", alt: "Torta Redonda de Pão de Forma", descricao: "Torta de três camadas de recheio, camada de maionese e toda cobertura de purê de batata." },
    { imagem: "img/pastel-assado-de-carne-seca-e-requeijao-40306-350x230.jpg", alt: "Pastel de Forno", descricao: "Recheio de Frango Massa com Guaraná." },
    { imagem: "img/Pastel-assado-de-carne-seca.jpg", alt: "Pastel de Forno", descricao: "Recheio de Carne Seca Massa com Guaraná." },
    { imagem: "img/esfiha_de_carne_moída.jpg", alt: "Esfirras", descricao: "Recheio de Frango." },
    { imagem: "img/esfiha_de_carne_moída.jpg", alt: "Esfirras", descricao: "Recheio de Carne Moída." },
    { imagem: "img/esfiha_de_carne_moída.jpg", alt: "Esfirras", descricao: "Recheio de Carne Seca." },
    { imagem: "img/360_F_443926740_jRy6CUoRr7w4gLvBhl7LjBG33Eho0YiD.jpg", alt: "Coxinhas", descricao: "Recheio de Carne Seca." },
    { imagem: "img/coxinha.webp", alt: "Coxinhas", descricao: "Recheio de Frango." },
    { imagem: "img/01-Bolinho-de-queijo.jpg", alt: "Bolinha de Queijo", descricao: "Recheios Queijo e Presunto e Queijo Minas." },
  ];

  // Inserir cards
  const wrapper = document.getElementById("swiper-wrapper");
  wrapper.innerHTML = "";

  fotosGaleria.forEach(foto => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
      <div class="card galeria-card">
        <div class="img-container position-relative">
          <img src="${foto.imagem}" alt="${foto.alt}">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <button class="btn btn-warning btn-sm btn-detalhe"
              data-img="${foto.imagem}"
              data-nome="${foto.alt}"
              data-descricao="${foto.descricao}">
              Ver detalhes
            </button>
          </div>
        </div>
        <div class="card-body text-center d-flex flex-column">
          <h6 class="fw-bold text-warning mb-2">${foto.alt}</h6>
          <a href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("Olá, quero este: " + foto.alt)}"
            target="_blank" class="btn btn-success btn-sm mt-auto">Pedir no WhatsApp</a>
        </div>
      </div>
    `;

    wrapper.appendChild(slide);
  });

  // Modal
  const modal = document.getElementById("modalImagem");
  const modalImg = document.getElementById("imagemModal");
  const modalTitle = document.getElementById("tituloModal");
  const modalDescription = document.getElementById("modalDescription");

  document.querySelectorAll(".btn-detalhe").forEach(btn => {
    btn.addEventListener("click", () => {
      modalImg.src = btn.dataset.img;
      modalTitle.textContent = btn.dataset.nome;
      modalDescription.textContent = btn.dataset.descricao; // Descrição agora aparece
      new bootstrap.Modal(modal).show();
    });
  });

  // Inicializa Swiper
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 }
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
    }, 50000);
}

setInterval(trocarTexto, 3000);
trocarTexto();




// =========================
// INICIALIZAÇÃO
// =========================

document.addEventListener("DOMContentLoaded", () => {
    renderTortas("todos");
    renderizarCards();

    new bootstrap.Carousel('#heroCarousel', {
        interval: 4000,
        ride: 'carousel',
        pause: false
    });

    // Ano footer
    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();

    // Botão topo
    const btnTopo = document.getElementById("btnTopo");
    btnTopo.classList.add("show");

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});