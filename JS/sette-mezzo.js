// Lista com todas as 40 Cartas do Baralhos de Sette e Mezzo.
const baralho = [
    cartaAs = {
        nome: 'Ás',
        valor: 1,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/AS/Copas.png', 'CSS/IMG/BARALHO/AS/Espadas.png', 'CSS/IMG/BARALHO/AS/Ouros.png', 'CSS/IMG/BARALHO/AS/Paus.png']
    },

    carta2 = {
        nome: '2',
        valor: 2,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/DOIS/Copas.png', 'CSS/IMG/BARALHO/DOIS/Espadas.png', 'CSS/IMG/BARALHO/DOIS/Ouros.png', 'CSS/IMG/BARALHO/DOIS/Paus.png']
    },

    carta3 = {
        nome: '3',
        valor: 3,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/TRES/Copas.png', 'CSS/IMG/BARALHO/TRES/Espadas.png', 'CSS/IMG/BARALHO/TRES/Ouros.png', 'CSS/IMG/BARALHO/TRES/Paus.png']
    },

    carta4 = {
        nome: '4',
        valor: 4,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/QUATRO/Copas.png', 'CSS/IMG/BARALHO/QUATRO/Espadas.png', 'CSS/IMG/BARALHO/QUATRO/Ouros.png', 'CSS/IMG/BARALHO/QUATRO/Paus.png']
    },

    carta5 = {
        nome: '5',
        valor: 5,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/CINCO/Copas.png', 'CSS/IMG/BARALHO/CINCO/Espadas.png', 'CSS/IMG/BARALHO/CINCO/Ouros.png', 'CSS/IMG/BARALHO/CINCO/Paus.png']
    },

    carta6 = {
        nome: '6',
        valor: 6,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/SEIS/Copas.png', 'CSS/IMG/BARALHO/SEIS/Espadas.png', 'CSS/IMG/BARALHO/SEIS/Ouros.png', 'CSS/IMG/BARALHO/SEIS/Paus.png']
    },

    carta7 = {
        nome: '7',
        valor: 7,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/SETE/Copas.png', 'CSS/IMG/BARALHO/SETE/Espadas.png', 'CSS/IMG/BARALHO/SETE/Ouros.png', 'CSS/IMG/BARALHO/SETE/Paus.png']
    },

    cartaValete = {
        nome: 'Valete',
        valor: 0.5,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/VALETE/Copas.png', 'CSS/IMG/BARALHO/VALETE/Espadas.png', 'CSS/IMG/BARALHO/VALETE/Ouros.png', 'CSS/IMG/BARALHO/VALETE/Paus.png']
    },

    cartaRainha = {
        nome: 'Rainha',
        valor: 0.5,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/RAINHA/Copas.png', 'CSS/IMG/BARALHO/RAINHA/Espadas.png', 'CSS/IMG/BARALHO/RAINHA/Ouros.png', 'CSS/IMG/BARALHO/RAINHA/Paus.png']
    },

    cartaRei = {
        nome: 'Rei',
        valor: 0.5,
        naipe: ['Copas', 'Espadas', 'Ouros', 'Paus'],
        imagem: ['CSS/IMG/BARALHO/REI/Copas.png', 'CSS/IMG/BARALHO/REI/Espadas.png', 'CSS/IMG/BARALHO/REI/Ouros.png', 'CSS/IMG/BARALHO/REI/Paus.png']
    },
]

// Lista que armazena todas as Cartas compradas durante a Partida.
const cartasSelecionadas = [];

// Variáveis que armazena a Pontuação total do Jogador e da Banca.
let totalJogador = 0;
let totalBanca = 0;

// Função para o Jogador Comprar uma Carta.
function Pedir() {
    buttonPassar.disabled = false;

    let aleatorioCarta = (Math.random() * 9).toFixed();
    let aleatorioNaipe = (Math.random() * 3).toFixed();
    let cartaAtual = baralho[aleatorioCarta];
    let cartaSelecionada = cartaAtual.nome + ' de ' + cartaAtual.naipe[aleatorioNaipe];
    let imagemCarta = cartaAtual.imagem[aleatorioNaipe];

    if (cartasSelecionadas.indexOf(`${cartaSelecionada}`) >= 0)
        Pedir();
    else {
        totalJogador += cartaAtual.valor

        cartasSelecionadas.push(`${cartaSelecionada}`);
        console.log(imagemCarta)

        placarJogador.innerHTML += `
        <span>(<b>${totalJogador} pontos</b>) ${cartaSelecionada}</span>`;

        cartasJogador.innerHTML += `
        <img src="${imagemCarta}">`;

        if (totalJogador == 7.5) {
            placarJogador.innerHTML += `
            <h3>SETE E MEIO!</h3>`;

            buttonPedir.disabled = true;
            buttonPassar.disabled = true;

            setTimeout(function () {
                div_resultado.style.display = 'flex';

                resultado.innerHTML += `O Jogador Venceu!`;

                resultadoDesc.innerHTML += `O Jogador venceu com <b>${totalJogador} pontos</b>!`;
            }, 250);
        }

        else if (totalJogador > 7.5) {
            placarJogador.innerHTML += `<h3>O JOGADOR ESTOUROU!</h3>`;

            buttonPedir.disabled = true;
            buttonPassar.disabled = true;

            setTimeout(function () {
                div_resultado.style.display = 'flex';

                resultado.innerHTML += `A Banca Venceu!`;

                resultadoDesc.innerHTML += `A Banca venceu com <b>${totalBanca} pontos</b>!`;
            }, 250);
        }
    }
}

// Função para o Jogador Passar a Vez / Função para a Banca Comprar as Cartas.
function Passar() {
    buttonPedir.disabled = true;
    buttonPassar.disabled = true;

    setTimeout(function () {
        let aleatorioCarta = (Math.random() * 9).toFixed();
        let aleatorioNaipe = (Math.random() * 3).toFixed();
        let cartaAtual = baralho[aleatorioCarta];
        let cartaSelecionada = cartaAtual.nome + ' de ' + cartaAtual.naipe[aleatorioNaipe];
        let imagemCarta = cartaAtual.imagem[aleatorioNaipe];

        if (cartasSelecionadas.indexOf(`${cartaSelecionada}`) >= 0)
            Passar();
        else {
            totalBanca += cartaAtual.valor

            cartasSelecionadas.push(`${cartaSelecionada}`);

            placarBanca.innerHTML += `
                <span>(<b>${totalBanca} pontos</b>) ${cartaSelecionada}</span>`;

            cartasBanca.innerHTML += `
                <img src="${imagemCarta}">`;

            if (totalBanca == 7.5) {
                placarBanca.innerHTML += `<h3>SETE E MEIO!</h3>`;

                setTimeout(function () {
                    div_resultado.style.display = 'flex';

                    resultado.innerHTML += `A Banca Venceu!`;

                    resultadoDesc.innerHTML += `A Banca venceu com <b>${totalBanca} pontos</b>!`;
                }, 750);
            }
            else if (totalBanca > totalJogador && totalBanca <= 7.5) {
                setTimeout(function () {
                    div_resultado.style.display = 'flex';

                    resultado.innerHTML += `A Banca Venceu!`;

                    resultadoDesc.innerHTML += `A Banca venceu com <b>${totalBanca} pontos</b>!`;
                }, 750);
            }
            else if (totalBanca > 7.5) {
                placarBanca.innerHTML += `<h3>A BANCA ESTOUROU!</h3>`;

                setTimeout(function () {
                    div_resultado.style.display = 'flex';

                    resultado.innerHTML += `O Jogador Venceu!`;

                    resultadoDesc.innerHTML += `O Jogador venceu com <b>${totalJogador} pontos</b>!`;
                }, 750);
            }
            else {
                Passar();
            }
        }
    }, 500);
}