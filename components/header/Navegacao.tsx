import css from "@/styles/header/navegacao.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

let tela = 0;

export default function Navegacao() {

    const [funcao, setFuncao] = useState(0);

    let ref = useRef<any>(null);
    let refNav = useRef<any>(null);

    
    useEffect(() => {
        tela = parseInt(window.getComputedStyle(document.body).width.replace("px", ""));
        if (tela <= 800) {
            console.log("ola", tela);
            setFuncao(0);
        } else {
            setFuncao(1);
        }
    }, []);

    if (funcao == 1) {
        return (
            <nav className={`${css.nav} ${funcao ? css.navAberto : ""}`}>
                <Link href={"#Inicio"} onClick={()=>{tela <= 800 ? setFuncao(0) : null}}>Inicio</Link>
                <nav>
                    <Link href={"#Aluguel"} onClick={()=>{tela <= 800 ? setFuncao(0) : null}}>Alugue</Link>
                    <Link href={"#Compra"} onClick={()=>{tela <= 800 ? setFuncao(0) : null}}>Compre</Link>
                    <Link href={"#Pecas"} onClick={()=>{tela <= 800 ? setFuncao(0) : null}}>Peças</Link>
                    <Link href={"#Contatos"} onClick={()=>{tela <= 800 ? setFuncao(0) : null}}>Contatos</Link>
                    <Link href={"#Sobre"} onClick={()=>{tela <= 800 ? setFuncao(0) : null}}>Sobre</Link>
                </nav>
                <button onClick={() => { funcao != 1 ? setFuncao(1) : setFuncao(0) }} className={`${css.button} ${css.buttonAberto}`}>
                    Fechar
                </button>
            </nav>
        )
    } else {
        return (
            <nav className={css.nav} ref={refNav}
                style={{
                    borderRadius: "20px"
                }}
            >
                <button
                    onClick={() => { funcao != 1 ? setFuncao(1) : setFuncao(0) }} ref={ref} >
                    <img src="/vetores/menu.svg" />
                </button>
            </nav>
        )
    }
}