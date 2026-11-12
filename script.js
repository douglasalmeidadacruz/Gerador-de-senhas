function gerarSenha() {

    const tamanho = Number(document.getElementById("tamanho").value);

    const maiusculas = document.getElementById("maiusculas").checked;
    const minusculas = document.getElementById("minusculas").checked;
    const numeros = document.getElementById("numeros").checked;
    const especiais = document.getElementById("especiais").checked;

    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numerosCaracteres = "0123456789";
    const caracteresEspeciais = "!@#$%&*?";

    let caracteres = "";
    let senha = "";

    const mensagem = document.getElementById("mensagem");

    if (tamanho < 1 || tamanho > 128 || !Number.isInteger(tamanho)) {
        mensagem.innerText = "Digite um tamanho entre 1 e 128!";
        return;
    }

    if (maiusculas) {
        caracteres += letrasMaiusculas;
    }

    if (minusculas) {
        caracteres += letrasMinusculas;
    }

    if (numeros) {
        caracteres += numerosCaracteres;
    }

    if (especiais) {
        caracteres += caracteresEspeciais;
    }

    if (caracteres === "") {
        mensagem.innerText = "Selecione pelo menos uma opção!";
        return;
    }

    for (let i = 0; i < tamanho; i++) {

        const indice = Math.floor(Math.random() * caracteres.length);

        senha += caracteres[indice];
    }

    document.getElementById("senha").value = senha;

    mensagem.innerText = "Senha gerada com sucesso!";
}


function limparSenha() {

    document.getElementById("senha").value = "";

    document.getElementById("mensagem").innerText = "Senha apagada!";
}


function mostrarSenha() {

    const campo = document.getElementById("senha");

    if (campo.type === "password") {

        campo.type = "text";

    } else {

        campo.type = "password";

    }
}
