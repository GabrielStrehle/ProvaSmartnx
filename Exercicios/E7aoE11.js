//Para os exercícios de E.7 até E.11 considere o array de objetos:
const pessoas = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 },
];

// E.7 Imprima uma mensagem de saudação com o nome completo para cada um
//dos objetos. O nome deve ter a primeira letra maiúscula.

pessoas.forEach((pessoa) => {
  console.log(
    `Olá, ${pessoa.nome.charAt(0).toUpperCase() + pessoa.nome.slice(1)} ${
      pessoa.sobrenome
    }!`
  );
});

// E.8 Imprima a soma das idades (dica: utilize reduce)

const somaIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
console.log("Soma das idades:", somaIdades);

// E.9 Imprima o objeto se existir alguem com menos 25 anos.

const pessoaMenos25 = pessoas.filter((pessoa) => pessoa.idade < 25);
console.log("Pessoa com menos de 25 anos:", pessoaMenos25);

// E.10 Imprima todos os elementos em que a idade é menor que 30 anos.

const pessoasMenos30 = pessoas.filter((pessoa) => pessoa.idade < 30);
console.log("Pessoas com menos de 30 anos:", pessoasMenos30);

// E.11 Ordene o array de forma decrescente por idade, em caso de empate o
//desempate é pelo id.

const pessoasOrdenadas = pessoas.sort((a, b) => {
  if (a.idade === b.idade) {
    return a.id - b.id;
  }
  return b.idade - a.idade;
});
console.log("Pessoas ordenadas por idade (decrescente):", pessoasOrdenadas);
