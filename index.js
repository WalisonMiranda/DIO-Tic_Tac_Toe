var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("vencedor-selecionado");

mudarJogador("X");

function escolherQuadrado(id) {
  var quadrado = document.getElementById(id);

  if (vencedor !== null) {
    return;
  }
  
  if (quadrado.innerHTML !== "-") {
    return;
  }
  
  quadrado.innerHTML = jogador;
  
  if (jogador === "X") {
    jogador = "O";
    quadrado.style.color = "#c4ffc2";
    quadrado.style.textShadow = "1px 1px 12px #00cb00";
  } else {
    jogador = "X";
    quadrado.style.color = "#e5c3ff";
    quadrado.style.textShadow = "1px 1px 12px #b14aff";
  }
  
  mudarJogador(jogador);
  checaVencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {  
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
  
  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }
  
  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }

  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }

  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }

  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
  }
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eigual = false;

  if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
    eigual = true;
  }

  return eigual;
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;

  if (vencedor === "X") {
    vencedorSelecionado.style.color = "#00cb00";
  } else {
    vencedorSelecionado.style.color = "#b14aff";
  }
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  if (quadrado1.innerHTML === "X") {
    quadrado1.style.border = "1px solid #00cb00";
    quadrado2.style.border = "1px solid #00cb00";
    quadrado3.style.border = "1px solid #00cb00";

  } else {
    quadrado1.style.border = "1px solid #b14aff";
    quadrado2.style.border = "1px solid #b14aff";
    quadrado3.style.border = "1px solid #b14aff";
  }
}

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = "";

  for(let i = 1; i <= 9; i++) {
    document.getElementById(i).innerHTML = "-";
    document.getElementById(i).style.border = "#212a38";
    document.getElementById(i).style.color = "#212a38";
    document.getElementById(i).style.textShadow = "";
  }

  mudarJogador("X");
}
