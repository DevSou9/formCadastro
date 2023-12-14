const form = document.querySelector('form');
const nomeCadastro = document.getElementById('nome');
const telfoneCadastro = document.getElementById('telefone');
const bodyTable = document.querySelector('tbody');
const footTable = document.querySelector('tfoot')
const pNameInvalido = document.getElementById('msg-nome-invalido')
let linhas = '';
let count = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    addRows();
    cleanForm();
})

function addRows(){
    let nome = nomeCadastro.value;
    console.log(`Entrou no addRows:`);
    if(validarNome(nome)){
        let telefone = telfoneCadastro.value;
        let linha = `<tr><td>${nome}</td></tr><tr><td>${telefone}</td></tr>`;
        linhas += linha;
        bodyTable.innerHTML = linhas;
        count++;
        footTable.innerHTML = `Número de cadastrados: ${count}`
    }
    validarTelefone();
    
}

function cleanForm(){
    nomeCadastro.value = '';
    telfoneCadastro.value = '';
}

function validarNome(nome){
   console.log(`Entrou no valida nome`);
    let nomeArray = nome.split(' ')
    if(nomeArray.length < 2){
        pNameInvalido.innerHTML = "Necessário inserir nome completo!"
        return false;
    }
    return true;
}

function validarTelefone(){
    const telefone = telfoneCadastro.value;

    var regexTelefone = /^\(?\d{2}\)? ?(?:9)?\d{4}-?\d{4}$/;
    console.log(`Testando telefone: ${regexTelefone.test(telefone)}`);
    return regexTelefone.test(telefone);
}