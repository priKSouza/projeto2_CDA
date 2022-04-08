document.getElementById("alterar").addEventListener("click", main);
function main(event) {
  event.preventDefault();
  var opcao = document.querySelector('input[name="cesar"]:checked').value;
  var texto = document.getElementById("campo-texto").value;
  const item = document.querySelector('input[name="botao"]:checked').value;
  if (item == "um") {
    codifica(opcao, texto);
  } else {
    decodifica(opcao, texto);
  }
}

function codifica(opcao, texto) {
  if (opcao == "c") {
  } else {
    var result = btoa(texto);
    document.getElementById("resultadoCesar").innerHTML = result;
  }
}

function decodifica(opcao, texto) {
  if (opcao == "c") {
    // console.log("teste");
  } else {
    // console.log(texto);
    var result = atob(texto);
    // console.log(result);
    document.getElementById("resultadoBase").innerHTML = result;
  }
}

document.getElementById("reset").addEventListener("click", resetar);
function resetar() {
  var sumir = document.querySelector(".resultado");
  sumir.remove();
}

// var frase = "";
// var alfabeto = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// var frase = document.getElementById("campo-texto").value;
// var num = document.getElementById("number").value;

// var keep = [];
// function cesar(off) {
//   var x = parseInt(off);
//   for (var i = 0; i < frase.length; i++) {
//     if (frase[i] != " ") {
//       for (var j = 0; j < alfabeto; j++) {
//         if (frase[i] == alfabeto[j]) {
//           keep[i] = alfabeto[(j + x) % alfabeto.length];
//           break;
//         }
//       }
//     } else {
//       keep[i] = " ";
//     }
//   }
// }
// // alert(keep.join(""));
