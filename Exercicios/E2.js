//E.2 Crie uma função que recebe três argumentos, uma função e duas string,
//aplique a função nas duas string e imprima o resultado.

function aplicarFuncao(funcao, string1, string2) {
  console.log(funcao(string1), funcao(string2));
}

// Definindo uma função de exemplo para testar funcionamento da funçao "aplicarfuncao"
function inverterString(string) {
  return string.split("").reverse().join("");
}

// Testando a função aplicarFuncao
aplicarFuncao(inverterString, "Ola", "Mundo");
