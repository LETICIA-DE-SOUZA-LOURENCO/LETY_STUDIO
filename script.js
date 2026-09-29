// =============================
// BOTÃO "QUERO MEU SITE"
// =============================

// Encontramos o botão "Quero meu site"
const botaoInicio = document.querySelector("#botao-inicio");

// Quando a pessoa clicar no botão
botaoInicio.addEventListener("click", function () {

    // Encontramos a seção de contato
    const contato = document.querySelector("#contato");

    // Fazemos a página descer suavemente
    contato.scrollIntoView({
        behavior: "smooth"
    });

});


// =============================
// CARDS DOS SERVIÇOS
// =============================

// Encontramos todos os botões dos serviços
const botoesServicos = document.querySelectorAll(".servico-botao");

// Passamos por cada botão de serviço
botoesServicos.forEach(function (botao) {

    // Quando o usuário clicar no serviço
    botao.addEventListener("click", function () {

        // Encontramos o card onde o botão está
        const card = botao.closest(".servico-card");

        // Abrimos ou fechamos o card
        card.classList.toggle("aberto");

    });

});


// =============================
// BOTÕES "QUERO ESSE TIPO DE SITE"
// =============================

// Encontramos todos os botões de orçamento dos serviços
const botoesServicosCTA =
    document.querySelectorAll(".servico-cta");

// Passamos por cada botão
botoesServicosCTA.forEach(function (botao) {

    // Quando clicar no botão
    botao.addEventListener("click", function () {

        // Pegamos o nome do serviço escolhido
        const servico = botao.dataset.servico;

        // Encontramos a seção de contato
        const contato = document.querySelector("#contato");

        // Descemos suavemente até o contato
        contato.scrollIntoView({
            behavior: "smooth"
        });

        // Mostramos no console qual serviço foi escolhido
        console.log(
            "Serviço escolhido: " + servico
        );

    });

});


// =============================
// BOTÃO DO WHATSAPP
// =============================

// Encontramos o botão do WhatsApp
const botaoWhatsApp =
    document.querySelector("#botao-whatsapp");

// Quando a pessoa clicar
botaoWhatsApp.addEventListener("click", function () {

    // Número do WhatsApp da Lety Studio
    const numeroWhatsApp = "5549999161878";

    // Mensagem que será preenchida automaticamente
    const mensagem =
        "Olá! Conheci a Lety Studio e gostaria de solicitar um orçamento para um site.";

    // Montamos o endereço do WhatsApp
    const linkWhatsApp =
        "https://wa.me/" + numeroWhatsApp +
        "?text=" + encodeURIComponent(mensagem);

    // Abrimos o WhatsApp em outra aba
    window.open(linkWhatsApp, "_blank");

});


// =============================
// BOTÃO DO INSTAGRAM
// =============================

// Encontramos o botão do Instagram
const botaoInstagram =
    document.querySelector("#botao-instagram");

// Quando a pessoa clicar
botaoInstagram.addEventListener("click", function () {

    // Link para o Instagram da Lety Studio
    const linkInstagram =
        "https://ig.me/m/lety.dev";

    // Abrimos o Instagram em outra aba
    window.open(linkInstagram, "_blank");

});