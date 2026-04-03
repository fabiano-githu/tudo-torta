
  // =========================
  // 📅 CSS SEÇÃO CARDS TORTA SALGADA
  // =========================


// Array de produtos
const tortas = [
  { tipo: "retangular", nome: "Torta de Frango", preco: 25.00, descricao: "Torta salgada recheada com frango cremoso\nServe até 6 pessoas", imagem: "img/torta-frango.jpg" },
  { tipo: "retangular", nome: "Torta de Calabresa", preco: 28.00, descricao: "Recheio de calabresa temperada\nServe até 6 pessoas", imagem: "img/images.jpeg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 30.00, descricao: "Torta redonda tradicional\nServe até 8 pessoas", imagem: "img/torta-redonda-frango.jpg" }
];

// Renderiza cards filtrados
function renderTortas(tipoSelecionado = "todos") {
    const container = document.getElementById("container-tortas");
    container.innerHTML = "";

    tortas.forEach((torta, index) => {
        if (tipoSelecionado === "todos" || torta.tipo === tipoSelecionado) {
            const col = document.createElement("div");
            col.className = "col-md-4";

            const card = document.createElement("div");
            card.className = "card torta-card shadow-lg border-3 border-warning";

            const img = document.createElement("img");
            img.src = torta.imagem;
            img.className = "card-img-top";
            img.style.height = "300px";
            img.style.objectFit = "cover";

            const body = document.createElement("div");
            body.className = "card-body text-center";
            body.innerHTML = `
                <h5 class="card-title text-warning">${torta.nome}</h5>
                <p class="card-text text-white">${torta.descricao.replace(/\n/g,"<br>")}</p>
                <h4 class="text-success fw-bold text-warning">R$ ${torta.preco.toFixed(2)}</h4>
                <button class="btn btn-warning mt-2" onclick="abrirModal(${index})">Ver Detalhes</button>
                <a href="https://wa.me/SEUNUMERO?text=Quero ${torta.nome}" class="btn btn-success mt-2">Pedir no WhatsApp</a>
            `;

            card.appendChild(img);
            card.appendChild(body);
            col.appendChild(card);
            container.appendChild(col);
        }
    });
}

// Modal
function abrirModal(index) {
    const torta = tortas[index];
    document.getElementById("modalTitulo").innerText = torta.nome;
    document.getElementById("modalImg").src = torta.imagem;
    document.getElementById("modalDesc").innerHTML = torta.descricao.replace(/\n/g,"<br>");
    document.getElementById("modalPreco").innerText = "R$ " + torta.preco.toFixed(2);

    const modal = new bootstrap.Modal(document.getElementById("modalTorta"));
    modal.show();
}

// Função chamada pelos botões de filtro
function filtrarTortas(tipo) {
    renderTortas(tipo);
    const secao = document.getElementById("secao-torta-salgada");
    if (secao) {
        const offset = 70; // ajustar conforme navbar
        const pos = secao.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: "smooth" });
    }
}

// Inicializa com todos os cards
document.addEventListener("DOMContentLoaded", () => {
    renderTortas("todos");
});









  // =========================
  // 📅 CSS SEÇÃO CARDS SALGADOS
  // =========================

const numeroWhatsApp = "5521999999999"; // SEU NÚMERO

// 🔥 LISTA DE PRODUTOS (VOCÊ SÓ ALTERA AQUI)
const produtos = [
 
  {
  nome: "Coxinha",
  preco: 2.00,
  descricao: "Carne seca temperado\n(Unid 30g)",
  imagem: "img/coxinha.webp"
},  
{
  nome: "Coxinha",
  preco: 1.50,
  descricao: "Frango temperado\n(Unid 30g)",
  imagem: "img/coxinha-de-frango-jpeg.webp"
},
  
{
  nome: "Bolinha",
  preco: 1.50,
  descricao: "Queijo\n(Unid 30g)",
  imagem: "img/01-Bolinho-de-queijo.jpg"
},
  {
    nome: "Pastel de Forno",
    preco: 2.50,
    descricao: "Frango\n(Unid 40g)",
    imagem: "img/maxresdefault-2022-10-03T105917.680.jpg"
  },
  {
    nome: "Pastel de Forno",
    preco: 2.50,
    descricao: " Carne seca\n(Unid 40g)",
    imagem: "img/Pastel-assado-de-carne-seca.jpg"
  },
  {
    nome: "Esfirra",
    preco: 2.50,
    descricao: " Carne moída\n(Unid 40g)",
    imagem: "img/Esfirra-de-carne-moida.jpg"
  },
  {
    nome: "Esfirra",
    preco: 1.50,
    descricao: " Frango\n(Unid 40g)",
    imagem: "img/hq720.jpg"
  },
  {
    nome: "Joelho",
    preco: 1.50,
    descricao: " Queijo e presunto\n(Unid 40g)",
    imagem: "img/71929-original.webp"
  }
];

// 🔥 GERAR CARDS AUTOMATICAMENTE
function renderizarCards() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  produtos.forEach((produto, index) => {

    const mensagem = `Olá, quero comprar: ${produto.nome}`;
    const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    const card = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-custom ">


          <img src="${produto.imagem}" class="card-img-top">

          <div class="card-body d-flex flex-column ">
            <h5 class="card-title text-warning text-center">${produto.nome}</h5>
            <p class="card-text text-white text-center">${produto.descricao}</p>

            <h6 class="text-warning mb-3 text-center fs-3 ">R$ ${produto.preco.toFixed(2)}</h6>

            <div class="mt-auto d-flex gap-2">
              <a href="${linkZap}" target="_blank" class="btn btn-whatsapp w-50">
                Comprar
              </a>

              <button class="btn btn-outline-warning w-50" onclick="abrirModal(${index})">
                Detalhes
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}

// 🔥 MODAL DINÂMICO
function abrirModal(index) {
  const produto = produtos[index];

  document.getElementById("modalTitulo").innerText = produto.nome;
  document.getElementById("modalImagem").src = produto.imagem;
  document.getElementById("modalDescricao").innerText = produto.descricao;
  document.getElementById("modalPreco").innerText = `R$ ${produto.preco.toFixed(2)}`;

  const modal = new bootstrap.Modal(document.getElementById("modalDetalhe"));
  modal.show();
}

// INICIAR
renderizarCards();
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