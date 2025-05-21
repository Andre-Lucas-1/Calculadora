const operacaoDisplay = document.getElementById("operacaoDisplay");
const resultadoDisplay = document.getElementById("resultadoDisplay");

let operacao = "";
let valorAnterior = "";
let resetar = false;

function digitar(valor) {
  if (resultadoDisplay.textContent === "0" || resetar) {
    resultadoDisplay.textContent = valor;
    resetar = false;
  } else {
    resultadoDisplay.textContent += valor;
  }

  if (operacao) {
    operacaoDisplay.textContent = `${valorAnterior} ${operacao} ${resultadoDisplay.textContent}`;
  }
}

function operar(simbolo) {
  if (operacao && !resetar) {
    calcular();
  }

  valorAnterior = resultadoDisplay.textContent;
  operacao = simbolo;
  resetar = true;

  operacaoDisplay.textContent = `${valorAnterior} ${operacao}`;
}

function calcular() {
  if (!operacao) return;

  const val1 = parseFloat(valorAnterior);
  const val2 = parseFloat(resultadoDisplay.textContent);
  let resultado;

  switch (operacao) {
    case "+":
      resultado = val1 + val2;
      break;
    case "-":
      resultado = val1 - val2;
      break;
    case "*":
      resultado = val1 * val2;
      break;
    case "/":
      resultado = val2 !== 0 ? val1 / val2 : "Erro";
      break;
    default:
      resultado = "Erro";
  }

  operacaoDisplay.textContent = `${valorAnterior} ${operacao} ${val2} =`;
  resultadoDisplay.textContent = resultado.toString();

  operacao = "";
  valorAnterior = "";
  resetar = true;
}

function limpar() {
  resultadoDisplay.textContent = "0";
  operacaoDisplay.textContent = "";
  operacao = "";
  valorAnterior = "";
  resetar = false;
}

function backspace() {
  if (resetar) return;
  const txt = resultadoDisplay.textContent;
  resultadoDisplay.textContent = txt.length > 1 ? txt.slice(0, -1) : "0";

  if (operacao) {
    operacaoDisplay.textContent = `${valorAnterior} ${operacao} ${resultadoDisplay.textContent}`;
  }
}

function inverterSinal() {
  if (resultadoDisplay.textContent !== "0") {
    resultadoDisplay.textContent = (
      parseFloat(resultadoDisplay.textContent) * -1
    ).toString();
    if (operacao) {
      operacaoDisplay.textContent = `${valorAnterior} ${operacao} ${resultadoDisplay.textContent}`;
    }
  }
}
