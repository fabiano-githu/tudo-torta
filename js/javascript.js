

// =========================
// SEÇÃO TORTA SALGADAS - JS COMPLETO
// =========================
// Array de produtos
const tortas = [
  { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 100.00, descricao: " Cobertura Purê de Batata (20x40cm)\nServe até 10 pessoas", imagem: "img/WhatsApp_Image_2024-01-13_at_15.32.02__1_-removebg-preview.png" },
  { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 200.00, descricao: "Cobertura Purê de Batata (30x40cm)\nServe até 30 pessoas", imagem: "img/WhatsApp Image 2024-03-24 at 20.37.17 (2).jpeg" },
  { tipo: "retangular", nome: "Torta de Frango (Retangular)", preco: 250.00, descricao: "Cobertura Purê de Batata (20x40cm)\nServe até 40 pessoas", imagem: "img/IMG_20230507_081014742.jpg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 100.00, descricao: " Cobertura Purê de Batata (25cm)\nServe até 12 pessoas", imagem: "img/IMG_20220921_162929284.jpg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 150.00, descricao: "Cobertura Purê de Batata (35cm)\nServe até 20 pessoas", imagem: "img/IMG-20210720-WA0070.jpg" },
  { tipo: "redonda", nome: "Torta de Frango (Redonda)", preco: 180.00, descricao: "Cobertura Purê de Batata (45cm)\nServe até 30 pessoas", imagem: "img/WhatsApp Image 2023-10-21 at 17.13.07 (1).jpeg" },
]


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