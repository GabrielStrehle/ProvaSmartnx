//E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as
//ocorrências de números pelo valor '[removido]'.

function substituirNumeros(string) {
  return string.replace(/[0-9]/g, "[removido]");
}

// Testando a função
const string1 = "teste 0 de 1 string 2";
const string2 = substituirNumeros(string1);
console.log(string2);
