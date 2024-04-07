//E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos
//juntos.

function imprimirStrings(...strings) {
  console.log(strings.join(" "));
}

// Teste da função
imprimirStrings("Olá", "mundo", "!");
