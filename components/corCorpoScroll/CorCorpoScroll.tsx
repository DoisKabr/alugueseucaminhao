let Compra: {
    style: any; offsetTop: any; offsetHeight: any
};
let CompraImg: {
    style: {
        margin: string;
        filter: string; transform: string;
    };
};
let Aluguel: {
    style: any; offsetTop: any; offsetHeight: any
};
let AluguelImg: {
    classList: any;
    style: {
        margin: string;
        filter: string; transform: string;
    };
};
let Peca: {
    offsetTop: number; offsetHeight: any
};
let PecaImg: {
    style: {
        transform: string;
        filter: string; margin: string
    };
};

import "@/styles/secoesInformacoes/secoes.module.css";

export default function CorCorpoScroll() {
    document.addEventListener("scroll", () => {

        let topCompra = Compra.offsetTop - 50;
        let bottonCompra = Compra.offsetHeight;

        let topAluguel = Aluguel.offsetTop - 50;
        let bottonAluguel = Aluguel.offsetHeight;

        let topPeca = Peca.offsetTop - 50;
        let bottonPeca = Peca.offsetHeight;
        
        let tamanhoTela = document.body.offsetWidth;

        if (window.scrollY >= topCompra && window.scrollY <= (topCompra + bottonCompra)) {

            CompraImgRemover();
            document.body.style.background = "var(--cor-vermelho-padrao)";

            if (tamanhoTela >= 1340) {
                CompraImg.style.transform = "scale(1.1) rotateY(-20deg)";
                CompraImg.style.filter = "drop-shadow(-5px 0px 5px var(--cor-vermelho-background)";
                CompraImg.style.margin = "1.5rem";
            }

        } else if (window.scrollY >= topAluguel && window.scrollY <= (topAluguel + bottonAluguel)) {

            AluguelImgRemover();
            document.body.style.background = "var(--cor-azul-caminhao)";

            if (tamanhoTela >= 1340) {
                AluguelImg.style.transform = "scale(1.1) rotateY(-20deg)";
                AluguelImg.style.filter = "drop-shadow(-5px 0px 5px var(--cor-vermelho-background)";
                AluguelImg.style.margin = "1.5rem";
            }

        } else if (window.scrollY >= topPeca && window.scrollY <= (topPeca + bottonPeca)) {

            PecaImgRemover();
            document.body.style.background = "var(--cor-cinza-peca)";

            if (tamanhoTela >= 1340) {
                PecaImg.style.transform = "scale(1.1) rotateY(-20deg)";
                PecaImg.style.filter = "drop-shadow(-5px 0px 5px var(--cor-vermelho-background)";
                PecaImg.style.margin = "1.5rem";
            }

        } else {

            CompraImgRemover();
            AluguelImgRemover();
            PecaImgRemover();

        }

    })
}

function CompraImgRemover() {
    document.body.style.background = "var(--cor-vermelho-background)";
    CompraImg.style.transform = "rotateY(0deg)";
    CompraImg.style.filter = "drop-shadow(0px 0px 0px var(--cor-vermelho-background)";
    CompraImg.style.margin = "0rem";
}

function AluguelImgRemover() {
    document.body.style.background = "var(--cor-vermelho-background)";
    AluguelImg.style.transform = "rotateY(0deg)";
    AluguelImg.style.filter = "drop-shadow(0px 0px 0px var(--cor-vermelho-background)";
    AluguelImg.style.margin = "0rem";
}

function PecaImgRemover() {
    document.body.style.background = "var(--cor-vermelho-background)";
    PecaImg.style.transform = "rotateY(0deg)";
    PecaImg.style.filter = "drop-shadow(0px 0px 0px var(--cor-vermelho-background)";
    PecaImg.style.margin = "0rem";
}

export function DadosScrollCompra(Dados: any, DadosImg: any) {
    Compra = Dados;
    CompraImg = DadosImg;
}
export function DadosScrollAluguel(Dados: any, DadosImg: any) {
    Aluguel = Dados;
    AluguelImg = DadosImg;
}
export function DadosScrollPeca(Dados: any, DadosImg: any) {
    Peca = Dados;
    PecaImg = DadosImg;
}