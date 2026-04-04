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
        const offset = 70;
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

            <h6 class="text-warning mb-3 text-center fs-3">
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