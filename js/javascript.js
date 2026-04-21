// =========================
// CONFIGURAÇÕES GLOBAIS
// =========================
const numeroWhatsApp = "5521968061820";
let currentSlide = 0;
let currentGaleria = 0;

// =========================
// DADOS DOS PRODUTOS
// =========================
const produtos = [
  { nome: "Coxinha", preco: 2.00, descricao: "Carne seca temperado\n(Unid 30g)", imagem: "img/coxinha.webp" },
  { nome: "Coxinha", preco: 1.50, descricao: "Frango temperado\n(Unid 30g)", imagem: "img/coxinha-de-frango-jpeg.webp" },
  { nome: "Bolinha", preco: 1.50, descricao: "Queijo\n(Unid 30g)", imagem: "img/01-Bolinho-de-queijo.jpg" },
  { nome: "Pastel de Forno", preco: 2.50, descricao: "Frango\n(Unid 40g)", imagem: "img/maxresdefault-2022-10-03T105917.680.jpg" },
  { nome: "Pastel de Forno", preco: 2.50, descricao: "Carne seca\n(Unid 40g)", imagem: "img/pastel-assado-de-carne-seca-e-requeijao-40306-350x230.jpg" },
  { nome: "Esfirra", preco: 2.50, descricao: "Carne moída\n(Unid 40g)", imagem: "img/esfiha_de_carne_moída.jpg" },
  { nome: "Esfirra", preco: 1.50, descricao: "Frango\n(Unid 40g)", imagem: "img/hq720.jpg" },
  { nome: "Joelho", preco: 1.50, descricao: "Queijo e presunto\n(Unid 40g)", imagem: "img/71929-original.webp" }
];

const tortas = [
  { 
  tipo: "retangular", 
  nome: "Torta de Frango (Retangular)", 
  preco: 80.00, 
  descricao: "Cobertura Purê de Batata (20x20cm)\nServe até 10 pessoas\nRende aproximadamente 8 a 12 fatias (cortes de festa)", 
  imagem: "img/WhatsApp Image 2024-03-24 at 20.36.30.jpeg" 
},

{ 
  tipo: "retangular", 
  nome: "Torta de Frango (Retangular)", 
  preco: 200.00, 
  descricao: "Cobertura Purê de Batata (30x40cm)\nServe até 25 pessoas\nRende aproximadamente 18 a 28 fatias (cortes de festa)", 
  imagem: "img/WhatsApp Image 2024-03-24 at 20.37.17 (2).jpeg" 
},

{ 
  tipo: "retangular", 
  nome: "Torta de Frango (Retangular)", 
  preco: 250.00, 
  descricao: "Cobertura Purê de Batata (40x50cm)\nServe até 40 pessoas\nRende aproximadamente 30 a 45 fatias (cortes de festa)", 
  imagem: "img/WhatsApp Image 2024-03-24 at 22.37.30.jpeg" 
},

{ 
  tipo: "retangular", 
  nome: "Torta de Frango (Retangular)", 
  preco: 300.00, 
  descricao: "Cobertura Purê de Batata (50x60cm)\nServe até 55 pessoas\nRende aproximadamente 45 a 65 fatias (cortes de festa)", 
  imagem: "img/WhatsApp Image 2025-07-21 at 13.36.02 (2).jpeg" 
},
  { 
  tipo: "redonda", 
  nome: "Torta de Frango (Redonda)", 
  preco: 100.00, 
  descricao: "Cobertura Purê de Batata (25cm)\nServe até 12 pessoas\nRende aproximadamente 10 a 16 fatias (cortes de festa)", 
  imagem: "img/IMG_20200926_155340806.jpg" 
},

{ 
  tipo: "redonda", 
  nome: "Torta de Frango (Redonda)", 
  preco: 150.00, 
  descricao: "Cobertura Purê de Batata (35cm)\nServe até 20 pessoas\nRende aproximadamente 16 a 24 fatias (cortes de festa)", 
  imagem: "img/WhatsApp Image 2024-03-24 at 20.37.30.jpeg" 
},

{ 
  tipo: "redonda", 
  nome: "Torta de Frango (Redonda)", 
  preco: 180.00, 
  descricao: "Cobertura Purê de Batata (45cm)\nServe até 30 pessoas\nRende aproximadamente 24 a 36 fatias (cortes de festa)", 
  imagem: "img/WhatsApp Image 2023-10-21 at 17.13.07 (1).jpeg" 
},
];

const fotosGaleria = [
  { imagem: "img/WhatsApp Image 2024-03-24 at 20.37.17 (2).jpeg", alt: "Torta Retangular", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/WhatsApp Image 2024-03-24 at 22.37.30.jpeg", alt: "Torta Retangular", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/IMG_20230507_081014742.jpg", alt: "Torta Retangular ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/WhatsApp Image 2024-03-24 at 20.37.30.jpeg", alt: "Torta Redonda", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/WhatsApp Image 2023-10-21 at 17.13.07 (1).jpeg", alt: "Torta Redonda", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/IMG_20220921_162929284.jpg", alt: "Torta Redonda ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  {imagem: "img/WhatsApp Image 2023-04-30 at 15.29.51 (3) - Copia.jpeg", alt: "Torta Redonda", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/torta salgada.jpg", alt: "Torta Redonda", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/WhatsApp Image 2024-03-24 at 20.17.29.jpeg", alt: "Torta Redonda ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/318825-original.png", alt: "Pudim de Leite Condensado ", descricao: "calda de acuçar." },
  { imagem: "img/WhatsApp Image 2024-03-24 at 19.51.44.jpeg", alt: "Torta Formato Coxinha ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/IMG_20200926_155340806.jpg", alt: "Torta Redonda ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/WhatsApp Image 2024-03-24 at 20.37.22 (3).jpeg", alt: "Torta Redonda ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/IMG_20201010_000821189.jpg", alt: "Torta Redonda ", descricao: "Pão de forma com cobertura de purê de batata e recheio de frango." },
  { imagem: "img/WhatsApp Image 2024-03-24 at 20.10.41.jpeg", alt: "Pastel de Forno", descricao: "Pastel de forno recheado com carne seca ou frango." },
  { imagem: "img/WhatsApp Image 2024-10-13 at 15.11.04 (1).jpeg", alt: "Coxinha", descricao: "Recheio de Frango ." },
  { imagem: "img/WhatsApp Image 2023-10-17 at 17.15.41.jpeg", alt: "Torta de Abacaxí", descricao: "massa sabor Abacaxí." },
  { imagem: "img/WhatsApp_Image_2024-01-03_at_22.18.25__1_-removebg-preview.png", alt: "Bolo de Chocolate", descricao: " Massa chocolate e recheio de Nutella com Ninho" },
  { imagem: "img/sem fundo.png", alt: "Bolo de Banana", descricao: " Calda de acuçar e granulado" }
  
];


// =========================
// RENDERIZAR SALGADOS
// =========================
function renderizarCards() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  produtos.forEach((produto, index) => {
    const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero comprar: ${produto.nome}`)}`;

    const card = document.createElement("div");
    card.className = "card-custom";
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="card-body">
        <h5>${produto.nome}</h5>
        <p>${produto.descricao.replace(/\n/g, "<br>")}</p>
        <div class="price">R$ ${produto.preco.toFixed(2)}</div>
        <div class="card-buttons">
          <a href="${linkZap}" target="_blank" class="btn btn-success">Comprar</a>
          <button class="btn btn-outline-warning" onclick="abrirModalSalgados(${index})">Detalhes</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function abrirModalSalgados(index) {
  const produto = produtos[index];
  if (!produto) return;

  document.getElementById("modalTituloSalgado").textContent = produto.nome;
  document.getElementById("modalImagemSalgado").src = produto.imagem;
  document.getElementById("modalDescricaoSalgado").textContent = produto.descricao.replace(/\n/g, " ");
  document.getElementById("modalPrecoSalgado").textContent = `R$ ${produto.preco.toFixed(2)}`;

  const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero pedir: ${produto.nome}`)}`;
  document.getElementById("btnWhatsSalgado").href = linkZap;

  abrirModal("modalSalgados");
}

// =========================
// RENDERIZAR TORTAS
// =========================
function renderTortas(tipoSelecionado = "todos") {
  const container = document.getElementById("containerTortas");
  if (!container) return;

  container.innerHTML = "";

  const tortasFiltradas = tipoSelecionado === "todos" ? tortas : tortas.filter(t => t.tipo === tipoSelecionado);

  tortasFiltradas.forEach((torta, index) => {
    const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero pedir a torta: ${torta.nome}`)}`;

    const card = document.createElement("div");
    card.className = "torta-card";
    card.innerHTML = `
      <img src="${torta.imagem}" alt="${torta.nome}">
      <div class="card-body">
        <h5>${torta.nome}</h5>
        <p>${torta.descricao.replace(/\n/g, "<br>")}</p>
        <div class="price">R$ ${torta.preco.toFixed(2)}</div>
        <div class="card-buttons">
          <button class="btn btn-outline-warning" onclick="abrirModalTorta(${index})">Ver Detalhes</button>
          <a href="${linkZap}" target="_blank" class="btn btn-success">Pedir</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function abrirModalTorta(index) {
  const torta = tortas[index];
  if (!torta) return;

  document.getElementById("modalTituloTorta").textContent = torta.nome;
  document.getElementById("modalImgTorta").src = torta.imagem;
  document.getElementById("modalDescTorta").innerHTML = torta.descricao.replace(/\n/g, "<br>");
  document.getElementById("modalPrecoTorta").textContent = `R$ ${torta.preco.toFixed(2)}`;

  const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá, quero pedir a torta: ${torta.nome}`)}`;
  document.getElementById("btnWhatsTorta").href = linkZap;

  abrirModal("modalTorta");
}

function filtrarTortas(tipo) {
  renderTortas(tipo);
  
  // Atualizar botões
  document.querySelectorAll(".filtros .btn").forEach(btn => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Scroll suave
  const secao = document.getElementById("secao-torta-salgada");
  if (secao) {
    const offset = 100;
    const pos = secao.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }
}

// =========================
// GALERIA
// =========================
function renderizarGaleria() {
  const container = document.getElementById("galeriaContainer");
  if (!container) return;

  container.innerHTML = "";

  fotosGaleria.forEach((foto, index) => {
    const card = document.createElement("div");
    card.className = "galeria-card";
    card.innerHTML = `
      <img src="${foto.imagem}" alt="${foto.alt}" style="cursor: pointer;" onclick="abrirModalGaleria(${index})">
      <div class="card-body">
        <button class="btn btn-outline-warning" onclick="abrirModalGaleria(${index})">Ver Detalhes</button>
      </div>
    `;
    container.appendChild(card);
  });

  renderizarIndicadoresGaleria();
}

function abrirModalGaleria(index) {
  const foto = fotosGaleria[index];
  if (!foto) return;

  document.getElementById("modalGaleriaImg").src = foto.imagem;
  document.getElementById("modalGaleriaTitulo").textContent = foto.alt;
  document.getElementById("modalGaleriaDesc").textContent = foto.descricao;

  abrirModal("modalGaleria");
}

function renderizarIndicadoresGaleria() {
  const container = document.getElementById("galeriaIndicators");
  if (!container) return;

  container.innerHTML = "";

  fotosGaleria.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.className = `galeria-indicator ${index === currentGaleria ? "active" : ""}`;
    indicator.onclick = () => {
      currentGaleria = index;
      const galeriaContainer = document.getElementById("galeriaContainer");
      const scrollAmount = index * 320;
      galeriaContainer.scrollLeft = scrollAmount;
      renderizarIndicadoresGaleria();
    };
    container.appendChild(indicator);
  });
}

function mudarGaleria(direcao) {
  currentGaleria = (currentGaleria + direcao + fotosGaleria.length) % fotosGaleria.length;
  const galeriaContainer = document.getElementById("galeriaContainer");
  const scrollAmount = currentGaleria * 320;
  galeriaContainer.scrollLeft = scrollAmount;
  renderizarIndicadoresGaleria();
}

// =========================
// CAROUSEL HERO
// =========================
function renderizarIndicadores() {
  const container = document.getElementById("indicators");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const indicator = document.createElement("div");
    indicator.className = `indicator ${i === currentSlide ? "active" : ""}`;
    indicator.onclick = () => {
      currentSlide = i;
      mostrarSlide();
    };
    container.appendChild(indicator);
  }
}

function mostrarSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });

  renderizarIndicadores();
}

function mudarSlide(direcao) {
  currentSlide = (currentSlide + direcao + 3) % 3;
  mostrarSlide();
}

function autoCarousel() {
  setInterval(() => {
    mudarSlide(1);
  }, 4500);
}

// =========================
// MODAIS
// =========================
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function fecharModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("show");
    document.body.style.overflow = "auto";
  }
};

// =========================
// MENU MOBILE
// =========================
function inicializarMenuMobile() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Dropdown mobile
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const navDropdown = document.querySelector(".nav-dropdown");

    if (dropdownBtn && navDropdown) {
      dropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navDropdown.classList.toggle("active");
      });
    }
  }
}

// =========================
// BOTÃO VOLTAR AO TOPO
// =========================
function inicializarBotaoTopo() {
  const btnTopo = document.getElementById("btnTopo");
  if (!btnTopo) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btnTopo.classList.add("show");
    } else {
      btnTopo.classList.remove("show");
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =========================
// INICIALIZAÇÃO
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar conteúdo
  renderizarCards();
  renderTortas("todos");
  renderizarGaleria();

  // Carousel
  mostrarSlide();
  autoCarousel();

  // Menu mobile
  inicializarMenuMobile();

  // Botão topo
  inicializarBotaoTopo();

  // Ano no footer
  const anoEl = document.getElementById("ano");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // Atualizar botões de filtro
  document.querySelectorAll(".filtros .btn").forEach((btn, index) => {
    if (index === 0) btn.classList.add("active");
  });
});

