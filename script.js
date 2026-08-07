const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        alert("Você escolheu: " + botao.innerText);

    });

});