// E.5 Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números
//na frase 'T35t3 d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a
//frase ol4 ficaria ola.

function substituir(string, mapeamento) {
  return string.replace(/\d/g, (digito) => mapeamento[digito]);
}

// Testando a função
const dicionario = { 3: "e", 5: "s", 1: "i", 4: "a" };
const frase1 = "T35t3 d3 35t4g1o";
const frase2 = substituir(frase1, dicionario);
console.log(frase2);
