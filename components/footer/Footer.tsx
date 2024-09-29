import css from "@/styles/footer/Footer.module.css";
import { useEffect } from "react";

export default function Footer() {

    let date = new Date();
    let ano = date.getFullYear();

    return (
        <footer className={css.secao}>
            <div></div>
            <div>
                <img src="/vetores/caminhao.png" />
                <h3>&copy; Compre seu caminhão {ano}</h3>
            </div>
        </footer>
    )
}