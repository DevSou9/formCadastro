const form = document.querySelector('form');
const nomeCadastro = document.getElementById('nome');
const telfoneCadastro = document.getElementById('telefone');
const bodyTable = document.querySelector('tbody');
let linhas = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let linha = `<tr><td>${nomeCadastro.value}</td></tr><tr><td>${telfoneCadastro.value}</td></tr>`;
    linhas += linha;    

    bodyTable.innerHTML = linhas;
})
