function validarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let CPF = document.getElementById('CPF').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let datanascimento = document.getElementById('datanascimento').value;
    
    let valido = true;

    if (!validarNome(nome)){
        valido = false;
        alert("Nome Inválido")
    }

    if (!validarCPF(CPF)){
        valido = false;
        alert("CPF Inválido")
    }

    if (!validarTelefone(telefone)){
        valido = false;
        alert("Telefone Inválido")
    }

    if (!validarEmail(email)){
        valido = false;
        alert("Email Inválido")
    }

    if (!validarDataNascimento(datanascimento)){
        valido = false;
        alert("Data Inválida")
    }

    if (valido == true){
        alert("Dados enviados com sucesso")

        document.getElementById('formCadPaciente').reset();
    }
}

function validarNome(nome) {
    if (nome.length == 0 || nome.length > 100) {
        return false; 
    }
    return true;
}

function validarCPF(CPF) {
    if (CPF.length == 0 || CPF.length > 11) {
        return false; 
    }
    return true;
}

function validarTelefone(telefone){
    if (telefone.length < 10 || telefone.length > 10) {
        return false; 
    }
    return true;
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarDataNascimento(datanascimento){
    return true
}

document.getElementById('formCadPac').addEventListener('submit',validarFormulario)