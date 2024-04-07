//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

function maiorString(string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

// Testando a função
console.log(maiorString("animal", "morango")); // Vai retornar "morango"
console.log(maiorString("macaco", "elefante")); // Vai retornar "elefante"
