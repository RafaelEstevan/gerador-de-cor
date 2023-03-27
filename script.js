// Seleciona os elementos da página
const corRgb = document.querySelector(".cor-rgb");
const corHex = document.querySelector(".cor-hex");
const gerarCorBtn = document.querySelector(".gerar-btn");
const copiarBtn = document.querySelector(".copiar-btn");
const cores = document.querySelector(".cores");

// Função que gera uma cor RGB aleatória
function gerarCorAleatoria() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Função que converte uma cor RGB em hexadecimal
function rgbParaHex(rgb) {
  const valor = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  const red = parseInt(valor[1]);
  const green = parseInt(valor[2]);
  const blue = parseInt(valor[3]);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`.toUpperCase();
}

const coresGeradas = {};

// Função que atualiza a cor de fundo da página e exibe a nova cor gerada em RGB e hexadecimal
function atualizarPagina() {
  const corAleatoria = gerarCorAleatoria();
  document.body.style.backgroundColor = corAleatoria;
  corRgb.innerText = corAleatoria;
  const corHexadecimal = rgbParaHex(corAleatoria);
  corHex.innerText = corHexadecimal;
  coresGeradas[corHexadecimal] = corAleatoria;
  
  // Cria uma nova div e exibe a cor criada
  const novaDiv = document.createElement("div");
  novaDiv.classList.add("cor");
  novaDiv.style.background = corAleatoria;
  novaDiv.innerText = rgbParaHex(corAleatoria);
  novaDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(rgbParaHex(corAleatoria));
    novaDiv.innerHTML = "Copiado!";
    setTimeout(() => {
      novaDiv.innerHTML = rgbParaHex(corAleatoria);
    }, 1000);
  });
  cores.appendChild(novaDiv);
}

// Adiciona um evento de clique ao botão para gerar uma nova cor
gerarCorBtn.addEventListener("click", atualizarPagina);

// Gera uma cor aleatória inicial e atualiza a página
atualizarPagina();

// Copia valor hexadecimal
copiarBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(corHex.innerText);
});

// Mudar botão após o click
copiarBtn.addEventListener("click", () => {
  copiarBtn.innerHTML = "&#10004";

  setTimeout(() => {
    copiarBtn.innerHTML = "&#128203";
  }, 1000);
});
