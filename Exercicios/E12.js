// E.12
const pessoa = {
  nome: "Dev",
  sobrenome: "smart",
  idade: "26",
  cargo: "analista de sistemas",
  documento: "123.345.678-90",
};

function removerDocumento(objeto) {
  delete objeto.documento;
  return objeto;
}

console.log(removerDocumento(pessoa));
