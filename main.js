const form = document.querySelector('form');
const nomeCadastro = document.getElementById('nome');
const telfoneCadastro = document.getElementById('telefone');
const bodyTable = document.querySelector('tbody');
const footTable = document.querySelector('tfoot');
const pNameInvalido = document.getElementById('msg-nome-invalido');
const pTelefoneInvalido = document.getElementById('msg-tefefone-invalido');
let linhas = '';
let count = 0;

form.addEventListener('submit', (e) => {
    
    e.preventDefault();    

    addRows();   
})

function addRows(){    

    if(validarNome() && validarTelefone()){
        const nome = nomeCadastro.value;
        let telefone = telfoneCadastro.value;
        let linha = ` <tr><td>${nome}</td><td>${telefone}</td></tr>`;
        linhas += linha;
        bodyTable.innerHTML = linhas;
        count++;
        footTable.innerHTML = `<tr><td colspan="2">Número de cadastrados: ${count}</td></tr>`
    }
    
    cleanForm();
}

function cleanForm(){
    nomeCadastro.value = '';
    telfoneCadastro.value = '';
}

function validarNome(){
    let nome = nomeCadastro.value;
  
    let nomeArray = nome.split(' ')
    if(nomeArray.length < 2){
        pNameInvalido.innerHTML = "Necessário inserir nome completo!"
       
        return false;
    }
    pNameInvalido.innerHTML = '';
    return true;
}

function validarTelefone(){
    const telefone = telfoneCadastro.value;

    var regexTelefone = /^\(?\d{2}\)? ?(?:9)?\d{4}-?\d{4}$/;
    
    if(!regexTelefone.test(telefone)){
        pTelefoneInvalido.innerHTML = `O telefone ${telefone} é invalido. Digite um telefone válido.`;
        return false;
    }
    pTelefoneInvalido.innerHTML = '';
    return true;
}

