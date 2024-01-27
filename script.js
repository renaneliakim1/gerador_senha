let customRange1Element = document.querySelector("#customRange1");
let gerar_senhaElement = document.querySelector("#gerar_senha");
let copiar_senhaElement = document.querySelector("#copiar_senha");

let sizeKey = document.querySelector("#valor");
let Key = document.querySelector("#key");


let numerosCheckbox = document.getElementById("numeros");
let minusculaCheckbox = document.getElementById("minuscula");
let maiusculaCheckbox = document.getElementById("maiuscula");
let simbolosCheckbox = document.getElementById("simbolos");


let charset = "";

customRange1Element.addEventListener('input', function () {
    sizeKey.innerHTML = this.value;
});

function gerarKey() {

    let caracteres = "";
    
    if (numerosCheckbox.checked) {
        caracteres += "0123456789";
    }
    if (minusculaCheckbox.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (maiusculaCheckbox.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (simbolosCheckbox.checked) {
        caracteres += "!@#$%&*";
    }

    let pass = "";
    for (let i = 0; i < customRange1Element.value; ++i) {
        pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    Key.innerHTML = pass;
}

function copiarKey() {
    let pass = Key.innerText;
    navigator.clipboard.writeText(pass).then(function () {
        alert("Senha copiada!");
    }).catch(function (err) {
        console.error('Erro ao copiar senha: ', err);
    });
}



