// BOTÕES
const btnEbooks = document.getElementById("btnEbooks");
const btnRedes = document.getElementById("btnRedes");
const btnSobre = document.getElementById("btnSobre");

// POPUPS
const popup = document.getElementById("popup");
const detail = document.getElementById("ebookDetail");
const popupsobre = document.getElementById("sobrePopup");
const popupRedes = document.getElementById("socialPopup");

// FECHAR
const closePopup = document.getElementById("closePopup");
const closeDetail = document.getElementById("closeDetail");
const closeSobre = document.getElementById("closeSobre");
const closeRedes = document.getElementById("closeSocial");

// DETALHES
const detailImg = document.getElementById("detailImg");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
const buyLink = document.getElementById("buyLink");

// GRID
const grid = document.querySelector(".ebooks-grid");

// DADOS
let ebooks = [];

/* ===== ABRIR POPUP EBOOK ===== */
btnEbooks.onclick = () => {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
};

/* ===== FECHAR POPUP EBOOK ===== */
closePopup.onclick = () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
};

/* ===== ABRIR SOBRE ===== */
btnSobre.onclick = () => {
  popupsobre.style.display = "flex";
  document.body.style.overflow = "hidden";
};

/* ===== FECHAR SOBRE ===== */
closeSobre.onclick = () => {
  popupsobre.style.display = "none";
  document.body.style.overflow = "auto";
};

/* ===== ABRIR REDES ===== */
btnRedes.onclick = () => {
  popupRedes.style.display = "flex";
  document.body.style.overflow = "hidden";
};

/* ===== FECHAR REDES ===== */
closeRedes.onclick = () => {
  popupRedes.style.display = "none";
  document.body.style.overflow = "auto";
};

/* ===== FECHAR DETALHES ===== */
closeDetail.onclick = () => {
  detail.style.display = "none";
  document.body.style.overflow = "auto";
};

/* ===== CARREGAR JSON ===== */
fetch("E-books.json")
  .then(res => res.json())
  .then(data => {
    ebooks = data;
    renderEbooks();
  })
  .catch(err => console.error("Erro ao carregar JSON:", err));

/* ===== CRIAR CARDS ===== */
function renderEbooks() {
  grid.innerHTML = "";

  ebooks.forEach(ebook => {
    const card = document.createElement("div");
    card.className = "ebook-card";

    card.innerHTML = `
      <img src="${ebook.imagem}">
      <h4>${ebook.titulo}</h4>
      <p>${ebook.descricaoCurta}</p>
    `;

    card.onclick = () => abrirDetalhe(ebook);
    grid.appendChild(card);
  });
}

/* ===== ABRIR DETALHES ===== */
function abrirDetalhe(ebook) {
  popup.style.display = "none";
  detail.style.display = "flex";

  detailImg.src = ebook.imagem;
  detailTitle.innerText = ebook.titulo;
  detailText.innerText = ebook.descricaoLonga;
  buyLink.href = ebook.link;
  buytxt.innerText = ebook.textodecompra;
}


/* ===== FECHAR AO CLICAR FORA ===== */
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

detail.addEventListener("click", (e) => {
  if (e.target === detail) {
    detail.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

popupsobre.addEventListener("click", (e) => {
  if (e.target === popupsobre) {
    popupsobre.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

popupRedes.addEventListener("click", (e) => {
  if (e.target === popupRedes) {
    popupRedes.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
