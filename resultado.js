if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark-mode');
}


let nome_salvo = localStorage.getItem("Nome");
let cpf_salvo = localStorage.getItem("cpf");
let cnpj_salvo = localStorage.getItem("cnpj");
let cep_salvo = localStorage.getItem("cep");
let tel_salvo = localStorage.getItem("telefone"); 
let end_salvo = localStorage.getItem("Endereco");


if (nome_salvo) {
    document.getElementById("exibirnome").innerText = "Olá, " + nome_salvo + "!";
}


if (cpf_salvo) {
    document.getElementById("exibir_cpf").innerText = "CPF: " + cpf_salvo;
}


if (cnpj_salvo) {
    document.getElementById("exibir_cnpj").innerText = "CNPJ: " + cnpj_salvo;
}


if (cep_salvo) {
    document.getElementById("exibir_cep").innerText = "CEP: " + cep_salvo;
}

if (end_salvo) {
    document.getElementById("exibir_endereco").innerText = "Endereço: " + end_salvo;
}

if (tel_salvo) {
    document.getElementById("exibir_tel").innerText = "Telefone: " + tel_salvo;
}