// E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada
//imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.

async function buscarCEP(cep) {
  try {
    // Puxando a API
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // Transformando em formato JSON
    const dados = await result.json();

    // Exibindo o endereço associado ao CEP
    console.log(
      `O endereço para o CEP ${cep} é: ${dados.logradouro}, ${dados.numero}, ${dados.localidade}/${dados.uf}.`
    );
  } catch (error) {
    // Exibindo mensagens de erro
    console.error("Ocorreu um problema:", error.message);
  }
}
// Chamando a função para buscar o CEP
buscarCEP("36080-001");
