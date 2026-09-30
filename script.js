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
const botoesServicos =
    document.querySelectorAll(".servico-botao");

// Passamos por cada botão
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

// Encontramos todos os botões de orçamento
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

    // Mensagem automática
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

    // Link para o Direct do Instagram
       const linkInstagram =
            "https://ig.me/m/lety_.studio";

    // Abrimos o Instagram em outra aba
    window.open(linkInstagram, "_blank");

});


// =============================
// ANIMAÇÃO DO TÍTULO
// =============================

/*
   Encontramos os títulos que possuem
   a classe "titulo-reveal".
*/
const textosReveal =
    document.querySelectorAll(".titulo-reveal");


/*
   Passamos por cada título.
*/
textosReveal.forEach(function (elemento) {

    // Guardamos o conteúdo original do título
    const conteudoOriginal =
        Array.from(elemento.childNodes);


    // Criamos um fragmento para montar
    // novamente o título.
    const fragmento =
        document.createDocumentFragment();


    /*
       Essa variável controla o atraso
       entre cada letra.
    */
    let contadorLetras = 0;


    // =============================
    // FUNÇÃO PARA ANIMAR UMA PALAVRA
    // =============================

    function criarPalavra(texto, cor = null) {

        /*
           Criamos um elemento para representar
           a palavra inteira.

           Isso impede que "web." seja separado.
        */
        const palavra =
            document.createElement("span");

        palavra.classList.add("palavra-reveal");


        /*
           Se a palavra precisar ser roxa,
           colocamos a cor aqui.
        */
        if (cor) {
            palavra.style.color = cor;
        }


        /*
           Percorremos cada letra da palavra.
        */
        [...texto].forEach(function (caractere) {

            // Criamos o elemento da letra
            const letra =
                document.createElement("span");

            // Classe usada pela animação CSS
            letra.classList.add("letra-reveal");

            // Colocamos a letra
            letra.textContent = caractere;


            /*
               Cada letra recebe um atraso
               ligeiramente maior que a anterior.
            */
            letra.style.setProperty(
                "--atraso-letra",
                `${contadorLetras * 0.035}s`
            );


            // Aumentamos o contador
            contadorLetras++;


            // Colocamos a letra dentro da palavra
            palavra.appendChild(letra);

        });


        // Colocamos a palavra no título
        fragmento.appendChild(palavra);

    }


    // =============================
    // LER O TEXTO ORIGINAL
    // =============================

    conteudoOriginal.forEach(function (no) {

        // Ignoramos espaços vazios do HTML
        if (
            no.nodeType === Node.TEXT_NODE &&
            no.textContent.trim() === ""
        ) {
            return;
        }


        // =============================
        // TEXTO NORMAL
        // =============================

        if (no.nodeType === Node.TEXT_NODE) {

            /*
               Dividimos o texto em palavras.

               O espaço entre elas será colocado
               separadamente.
            */
            const palavras =
                no.textContent.trim().split(/\s+/);


            palavras.forEach(function (palavra, indice) {

                // Criamos a palavra
                criarPalavra(palavra);


                /*
                   Depois da palavra colocamos
                   um espaço normal.
                */
                if (indice < palavras.length - 1) {

                    fragmento.appendChild(
                        document.createTextNode(" ")
                    );

                }

            });

        }


        // =============================
        // TEXTO ROXO
        // =============================

        else if (
            no.nodeType === Node.ELEMENT_NODE &&
            no.tagName === "SPAN" &&
            !no.classList.contains("linha-reveal")
        ) {

            /*
               Pegamos o texto que está dentro
               do span roxo.
            */
            const textoRoxo =
                no.textContent.trim();


            /*
               Dividimos o texto em palavras.
            */
            const palavras =
                textoRoxo.split(/\s+/);


            palavras.forEach(function (palavra, indice) {

                /*
                   Criamos a palavra mantendo
                   a cor roxa.
                */
                criarPalavra(
                    palavra,
                    "#7C3AED"
                );


                // Colocamos o espaço entre palavras
                if (indice < palavras.length - 1) {

                    fragmento.appendChild(
                        document.createTextNode(" ")
                    );

                }

            });

        }

    });


    /*
       Apagamos o conteúdo antigo.
    */
    elemento.innerHTML = "";


    /*
       Colocamos o novo título animado.
    */
    elemento.appendChild(fragmento);


    // =============================
    // LINHA DECORATIVA
    // =============================

    /*
       Criamos novamente a linha da animação.
    */
    const linha =
        document.createElement("span");

    linha.classList.add("linha-reveal");


    /*
       Colocamos a linha depois do título.
    */
    elemento.appendChild(linha);

});


// =============================
// EFEITO DE ROLAGEM
// =============================

/*
   Aqui encontramos os elementos que devem
   aparecer suavemente quando a pessoa rolar
   a página.

   Não precisamos alterar o HTML.
*/
const elementosRolagem = document.querySelectorAll(
    ".servico-card, .projeto-card, #contato"
);


/*
   Adicionamos a classe de animação
   em cada elemento encontrado.
*/
elementosRolagem.forEach(function (elemento) {

    elemento.classList.add("efeito-rolagem");

});


/*
   Criamos um observador.

   Ele verifica quando um elemento
   começa a aparecer na tela.
*/
const observadorRolagem = new IntersectionObserver(
    function (elementos) {

        elementos.forEach(function (item) {

            /*
               Se o elemento entrou na tela,
               adicionamos a classe "apareceu".
            */
            if (item.isIntersecting) {

                item.target.classList.add("apareceu");

                /*
                   Depois que apareceu, não precisamos
                   observar esse elemento novamente.
                */
                observadorRolagem.unobserve(
                    item.target
                );

            }

        });

    },
    {
        /*
           O efeito começa quando aproximadamente
           15% do elemento aparece na tela.
        */
        threshold: 0.15
    }
);


/*
   Começamos a observar todos os elementos
   que receberam o efeito.
*/
elementosRolagem.forEach(function (elemento) {

    observadorRolagem.observe(elemento);

});