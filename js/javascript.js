// =========================
// CONFIGURAÇÕES GLOBAIS
// =========================
const numeroWhatsApp = "5521968061820";

// =========================
// SEÇÃO TORTAS SALGADAS
// =========================
const tortas = [
    { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 100.00, descricao: "Cobertura Purê de Batata (20x40cm)\nServe até 10 pessoas", imagem: "img/WhatsApp_Image_2024-01-13_at_15.32.02__1_-removebg-preview.png" },
    { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 200.00, descricao: "Cobertura Purê de Batata (30x40cm)\nServe até 30 pessoas", imagem: "img/WhatsApp Image 2024-03-24 at 20.37.17 (2).jpeg" },
    { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 250.00, descricao: "Cobertura Purê de Batata (20x40cm)\nServe até 40 pessoas", imagem: "img/IMG_20230507_081014742.jpg" },
    { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 100.00, descricao: "Cobertura Purê de Batata (25cm)\nServe até 12 pessoas", imagem: "img/IMG_20220921_162929284.jpg" },
    { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 150.00, descricao: "Cobertura Purê de Batata (35cm)\nServe até 20 pessoas", imagem: "img/IMG-20210720-WA0070.jpg" },
    { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 180.00, descricao: "Cobertura Purê de Batata (45cm)\nServe até 30 pessoas", imagem: "img/WhatsApp Image 2023-10-21 at 17.13.07 (1).jpeg" },
];

function renderTortas(tipoSelecionado = "todos") {
    const container = document.getElementById("container-tortas");
    if (!container) return;
    
    container.innerHTML = "";

    tortas.forEach((torta, index) => {
        if (tipoSelecionado === "todos" || torta.tipo === tipoSelecionado) {
            const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero pedir a torta: ${torta.nome}`)}`;

            const col = document.createElement("div");
            col.className = "col-md-4 col-sm-6 mb-4";

            col.innerHTML = `
                <div class="card torta-card shadow-lg border-3 border-warning h-100">
                    <img src="${torta.imagem}" class="card-img-top" alt="${torta.nome}">
                    <div class="card-body d-flex flex-column text-center">
                        <h5 class="card-title text-warning">${torta.nome}</h5>
                        <p class="card-text text-white flex-grow-1">${torta.descricao.replace(/\n/g, "<br>")}</p>
                        <h4 class="text-warning fw-bold mb-3">R$ ${torta.preco.toFixed(2)}</h4>
                        
                        <div class="mt-auto d-flex flex-column gap-2">
                            <button class="btn btn-warning" onclick="abrirModalTorta(${index})">
                                Ver Detalhes
                            </button>
                            <a href="${linkZap}" target="_blank" class="btn btn-success">
                                Pedir no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(col);
        }
    });
}

function abrirModalTorta(index) {
    const torta = tortas[index];
    if (!torta) return;

    document.getElementById("modalTituloTorta").textContent = torta.nome;
    document.getElementById("modalImgTorta").src = torta.imagem;
    document.getElementById("modalDescTorta").innerHTML = torta.descricao.replace(/\n/g, "<br>");
    document.getElementById("modalPrecoTorta").textContent = `R$ ${torta.preco.toFixed(2)}`;

    new bootstrap.Modal(document.getElementById("modalTorta")).show();
}

// =========================
// FILTRAR TORTAS
// =========================
function filtrarTortas(tipo) {
    renderTortas(tipo);

    const secao = document.getElementById("secao-torta-salgada");
    if (secao) {
        const offset = 100;
        const pos = secao.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: "smooth" });
    }
}

// =========================
// SEÇÃO SALGADOS
// =========================
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
    if (!container) return;

    container.innerHTML = "";

    produtos.forEach((produto, index) => {
        const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero comprar: ${produto.nome}`)}`;

        const cardHTML = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-custom h-100">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body d-flex flex-column text-center">
                        <h5 class="card-title text-warning">${produto.nome}</h5>
                        <p class="card-text text-white">${produto.descricao.replace(/\n/g, "<br>")}</p>
                        <h6 class="text-warning fw-bold fs-4 mb-3">R$ ${produto.preco.toFixed(2)}</h6>
                        
                        <div class="mt-auto d-flex gap-2">
                            <a href="${linkZap}" target="_blank" class="btn btn-success flex-fill">Comprar</a>
                            <button class="btn btn-outline-warning flex-fill" onclick="abrirModalSalgados(${index})">Detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function abrirModalSalgados(index) {
    const produto = produtos[index];
    if (!produto) return;

    document.getElementById("modalImagemSalgado").src = produto.imagem;
    document.getElementById("modalTituloSalgado").textContent = produto.nome;
    document.getElementById("modalDescricaoSalgado").textContent = produto.descricao.replace(/\n/g, " ");
    document.getElementById("modalPrecoSalgado").textContent = `R$ ${produto.preco.toFixed(2)}`;

    // Link WhatsApp no modal (se existir o botão)
    const btnWhats = document.getElementById("btnWhatsSalgado");
    if (btnWhats) {
        const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero pedir: ${produto.nome}`)}`;
        btnWhats.href = linkZap;
    }

    new bootstrap.Modal(document.getElementById("modalSalgados")).show();
}

// =========================
// GALERIA + SWIPER
// =========================
function inicializarGaleria() {
    const fotosGaleria = [
        { imagem: "img/WhatsApp_Image_2024-01-13_at_15.32.02__1_-removebg-preview.png", alt: "Torta Retangular", descricao: "Torta de três camadas de recheio com cobertura de purê de batata." },
        { imagem: "img/IMG-20210720-WA0070.jpg", alt: "Torta Redonda", descricao: "Torta redonda de pão de forma com purê de batata." },
        { imagem: "img/pastel-assado-de-carne-seca-e-requeijao-40306-350x230.jpg", alt: "Pastel de Forno", descricao: "Pastel de forno recheado com carne seca." },
        { imagem: "img/Pastel-assado-de-carne-seca.jpg", alt: "Pastel de Forno", descricao: "Pastel de forno recheado com frango." },
    ];

    const wrapper = document.getElementById("swiper-wrapper");
    if (!wrapper) return;

    wrapper.innerHTML = "";

    fotosGaleria.forEach(foto => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
            <div class="card galeria-card">
                <img src="${foto.imagem}" alt="${foto.alt}" class="card-img-top">
                <div class="card-body text-center pt-3">
                    <button class="btn btn-outline-warning btn-detalhe w-100"
                        data-img="${foto.imagem}"
                        data-nome="${foto.alt}"
                        data-descricao="${foto.descricao}">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });

    // Inicializa Swiper
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 2800, disableOnInteraction: false },
        breakpoints: {
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 }
        }
    });
}

// =========================
// MODAL DA GALERIA
// =========================
function configurarModalGaleria() {
    const modal = document.getElementById("modalPadrao");
    if (!modal) return;

    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-detalhe");
        if (!btn) return;

        document.getElementById("modalImg").src = btn.dataset.img;
        document.getElementById("modalTitulo").textContent = btn.dataset.nome;
        document.getElementById("modalDescricao").textContent = btn.dataset.descricao;
        document.getElementById("modalPreco").textContent = "";

        new bootstrap.Modal(modal).show();
    });
}

// =========================
// TEXTO ANIMADO
// =========================
const frases = [
    "🎁 Tudo Torta presente nos seus melhores momentos",
    "🍰 Sabor que conquista no primeiro pedaço",
    "📲 Peça agora na Tudo Torta!",
    "🎉 Sua festa começa com a Tudo Torta",
    "❤️ Feito com carinho para você"
];

let indice = 0;
const elementoTexto = document.getElementById("texto-dinamico");

function trocarTexto() {
    if (!elementoTexto) return;
    elementoTexto.style.opacity = 0;

    setTimeout(() => {
        elementoTexto.textContent = frases[indice];
        elementoTexto.style.opacity = 1;
        indice = (indice + 1) % frases.length;
    }, 600);
}

setInterval(trocarTexto, 5000);
trocarTexto();

// =========================
// INICIALIZAÇÃO GERAL
// =========================
document.addEventListener("DOMContentLoaded", () => {
    renderTortas("todos");
    renderizarCards();
    inicializarGaleria();
    configurarModalGaleria();

    // Hero Carousel
    new bootstrap.Carousel('#heroCarousel', {
        interval: 4500,
        ride: 'carousel'
    });

    // Ano no Footer
    const anoEl = document.getElementById("ano");
    if (anoEl) anoEl.textContent = new Date().getFullYear();

    // Botão Voltar ao Topo
    const btnTopo = document.getElementById("btnTopo");
    if (btnTopo) {
        window.addEventListener("scroll", () => {
            btnTopo.classList.toggle("show", window.scrollY > 400);
        });

        btnTopo.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});