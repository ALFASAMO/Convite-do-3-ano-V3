/* ========================================
   ELEMENTOS
======================================== */

const btnAbrir =
    document.getElementById("btnAbrir");

const abertura =
    document.getElementById("abertura");

const convite =
    document.getElementById("convite");

const musica =
    document.getElementById("musica");

const btnMusica =
    document.getElementById("btnMusica");


let tocando = false;


/* ========================================
   ABRIR CONVITE + COMEÇAR MÚSICA
======================================== */

btnAbrir.addEventListener(
    "click",
    function () {


        /*
         * O clique do usuário permite
         * que o navegador reproduza
         * a música.
         */

        musica.play()
            .then(function () {

                tocando = true;

                btnMusica.textContent =
                    "❚❚";

            })
            .catch(function (erro) {

                console.log(
                    "Não foi possível iniciar a música:",
                    erro
                );

            });


        /*
         * Fecha a abertura
         */

        abertura.classList.add(
            "fechar"
        );


        /*
         * Mostra o convite
         */

        convite.classList.add(
            "ativo"
        );


        /*
         * Volta para o topo
         */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ========================================
   CONTAGEM REGRESSIVA
======================================== */


/*
 * DATA DA FORMATURA
 *
 * 15/12/2026
 * 19:00
 */

const dataFormatura =
    new Date(
        2026,
        11,
        18,
        20,
        0,
        0
    ).getTime();


function atualizarContador() {

    const agora =
        new Date().getTime();


    const distancia =
        dataFormatura - agora;


    if (distancia <= 0) {

        document.getElementById(
            "dias"
        ).textContent = "00";

        document.getElementById(
            "horas"
        ).textContent = "00";

        document.getElementById(
            "minutos"
        ).textContent = "00";

        document.getElementById(
            "segundos"
        ).textContent = "00";

        return;

    }


    const dias =
        Math.floor(
            distancia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                distancia %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (
                distancia %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (
                distancia %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById(
        "dias"
    ).textContent =
        String(dias)
            .padStart(2, "0");


    document.getElementById(
        "horas"
    ).textContent =
        String(horas)
            .padStart(2, "0");


    document.getElementById(
        "minutos"
    ).textContent =
        String(minutos)
            .padStart(2, "0");


    document.getElementById(
        "segundos"
    ).textContent =
        String(segundos)
            .padStart(2, "0");

}


setInterval(
    atualizarContador,
    1000
);


atualizarContador();


/* ========================================
   GOOGLE MAPS - EXIBIR MAPA AO CLICAR
======================================== */

const btnMapa = document.getElementById("btnMapa");
const mapaContainer = document.getElementById("mapaContainer");

if (btnMapa && mapaContainer) {
    btnMapa.addEventListener("click", function () {
        // Insere o iframe responsivo e com bordas arredondadas no HTML
        mapaContainer.innerHTML = `
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.5686310994256!2d-44.73450172483007!3d-17.603787383321013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa1f23898fa3e7%3A0xe8d4df3f44d92cb0!2sEsplendor%20Eventos%20%26%20Festas!5e1!3m2!1spt-BR!2sbr!4v1793844019535!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="400" 
                style="border:0; border-radius: 12px; box-shadow: 0 0 20px rgba(27,130,200,0.2);" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
        `;

        // Esconde o botão após clicar para o layout ficar limpo
        btnMapa.style.display = "none";
    });
}


/* ========================================
   CONFIRMAR PRESENÇA
======================================== */

const btnConfirmar =
    document.getElementById(
        "btnConfirmar"
    );


btnConfirmar.addEventListener(
    "click",
    function () {


        /*
         * COLOQUE O WHATSAPP REAL AQUI
         *
         * Exemplo:
         * 5538999999999
         */

        const telefone =
            "553897487978";


        const mensagem =
            "Olá! Gostaria de confirmar minha presença na formatura.";


        const url =
            "https://wa.me/" +
            telefone +
            "?text=" +
            encodeURIComponent(
                mensagem
            );


        window.open(
            url,
            "_blank"
        );

    }
);


/* ========================================
   CONTROLE DA MÚSICA
======================================== */

btnMusica.addEventListener(
    "click",
    function () {


        if (tocando) {

            musica.pause();

            btnMusica.textContent =
                "♪";

            tocando = false;

        }

        else {

            musica.play()
                .then(function () {

                    tocando = true;

                    btnMusica.textContent =
                        "❚❚";

                })
                .catch(function (erro) {

                    console.log(
                        "Erro ao reproduzir:",
                        erro
                    );

                });

        }

    }
);


/* ========================================
   QUANDO A MÚSICA TERMINAR
======================================== */

musica.addEventListener(
    "ended",
    function () {

        tocando = false;

        btnMusica.textContent =
            "♪";

    }
);