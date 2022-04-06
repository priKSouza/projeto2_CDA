function codifica() {
  var teste = document.getElementById("campo-texto").value;
  var resultadoB = document.getElementById("resultadoBase");

  var base = btoa(teste);
  resultadoB.innerHTML = base;
}

function decodifica() {
  var teste = document.getElementById("campo-texto").value;
  var resultadoB = document.getElementById("resultadoBase");

  var base = atob(teste);
  resultadoB.innerHTML = base;
}
