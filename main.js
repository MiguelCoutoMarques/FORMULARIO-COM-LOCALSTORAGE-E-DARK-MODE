
const btnTema = document.getElementById('toggle-dark-mode');

if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark-mode');
}

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
});

function mascara_cep() {
    var cep = document.getElementById("cep").value;
    if (cep[2] != "." && cep[2] != undefined) {
        document.getElementById("cep").value = cep.slice(0, 2) + "." + cep[2];
    }
    cep = document.getElementById("cep").value;
    if (cep[6] != "-" && cep[6] != undefined) {
        document.getElementById("cep").value = cep.slice(0, 6) + "-" + cep[6];
    }
}

function mascara_cpf() {
    var cpf = document.getElementById("cpf").value;
    if (cpf[3] != "." && cpf[3] != undefined) {
        document.getElementById("cpf").value = cpf.slice(0, 3) + "." + cpf[3];
    }
    cpf = document.getElementById("cpf").value;
    if (cpf[7] != "." && cpf[7] != undefined) {
        document.getElementById("cpf").value = cpf.slice(0, 7) + "." + cpf[7];
    }
    cpf = document.getElementById("cpf").value;
    if (cpf[11] != "-" && cpf[11] != undefined) {
        document.getElementById("cpf").value = cpf.slice(0, 11) + "-" + cpf[11];
    }
}

function mascara_telefone() {
    var tel = document.getElementById("telefone").value;
    if (tel[0] != "+" && tel[0] != undefined) {
        document.getElementById("telefone").value = "+55 (" + tel[0];
    }
    tel = document.getElementById("telefone").value;
    if (tel[7] != ")" && tel[7] != undefined) {
        document.getElementById("telefone").value = tel.slice(0, 7) + ") " + tel[7];
    }
    tel = document.getElementById("telefone").value;
    if (tel[10] != " " && tel[10] != undefined) {
        document.getElementById("telefone").value = tel.slice(0, 10) + " " + tel[10];
    }
    tel = document.getElementById("telefone").value;
    if (tel[15] != "-" && tel[15] != undefined) {
        document.getElementById("telefone").value = tel.slice(0, 15) + "-" + tel[15];
    }
}

function mascara_cnpj() {
    var cnpj = document.getElementById("cnpj").value;
    if (cnpj[2] != "." && cnpj[2] != undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 2) + "." + cnpj[2];
    }
    cnpj = document.getElementById("cnpj").value;
    if (cnpj[6] != "." && cnpj[6] != undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 6) + "." + cnpj[6];
    }
    cnpj = document.getElementById("cnpj").value;
    if (cnpj[10] != "/" && cnpj[10] != undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 10) + "/" + cnpj[10];
    }
    cnpj = document.getElementById("cnpj").value;
    if (cnpj[15] != "-" && cnpj[15] != undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 15) + "-" + cnpj[15];
    }
}

const botao = document.getElementById('botao');
botao.addEventListener('click', (event) => {
    event.preventDefault();
    
    let confirmado = confirm("Deseja enviar?");
    if (confirmado) {
        let nome = document.getElementById("nome").value;
        let endereco = document.getElementById("endereco").value;
        let cep = document.getElementById("cep").value;
        let cpf = document.getElementById("cpf").value;
        let tel = document.getElementById("telefone").value;
        let cnpj = document.getElementById("cnpj").value;

        localStorage.setItem("Nome", nome);
        localStorage.setItem("Endereco", endereco);
        localStorage.setItem("cep", cep);
        localStorage.setItem("cpf", cpf);
        localStorage.setItem("telefone", tel);
        localStorage.setItem("cnpj", cnpj);

        alert("Enviado com sucesso e salvo!");
        window.location.href = "data.html";
    } else {
        alert("Envio cancelado.");
    }
});