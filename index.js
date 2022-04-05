// function codifica() {
//   var teste = document.getElementById("campo-texto").value;
//   console.log(teste);
// }
// var resultadoCesar = document.getElementById("resultadoCesar");

function codifica() {
  var teste = document.getElementById("campo-texto").value;
  var resultadoB = document.getElementById("resultadoBase");

  var base = btoa(teste);
  resultadoB.innerHTML = base;
}

codifica();

