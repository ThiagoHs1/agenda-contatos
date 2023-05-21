// Obtém a referência ao formulário e declara a variável para armazenar as linhas

const form = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener('submit', function (e) {
  e.preventDefault();
  AdicionaLinha();
  AtualizaTabela();
});
// Função para adicionar uma nova linha à tabela

function AdicionaLinha() {
  const InputNome = document.getElementById('nome-atividade');
  const InputTelefone = document.getElementById('telefone-atividade');
  // Cria a string HTML para a nova linha

  let linha = '<tr>';
  linha += '<td>' + InputNome.value + '</td>';
  linha += '<td>' + InputTelefone.value + '</td>';
  linha += '</tr>';
  // Adiciona a nova linha à variável 'linhas'

  linhas += linha;
  // Limpa os campos de entrada

  InputNome.value = '';
  InputTelefone.value = '';
}

function AtualizaTabela() {
  const CorpoTabela = document.querySelector('tbody');
  // Atualiza o conteúdo do corpo da tabela com as linhas armazenadas

  CorpoTabela.innerHTML = linhas;
}
