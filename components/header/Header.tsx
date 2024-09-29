import css from "@/styles/header/header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [titulo, setTitulo] = useState(1);
    const [spanImg, setSpanImg] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setTitulo(0);
        }, 1000);
        setTimeout(() => {
            setSpanImg(0);
        }, 2000);
    }, []);

    return (
        <section className={css.secao} id="Inicio">
            <div>
                <h1
                    style={titulo == 1 ? { filter: "blur(100px)" } : { filter: "blur(0px)" }}
                ><span><span>A</span>lugue seu Caminhão</span></h1>
                <span
                    className={css.spanImg}
                    style={spanImg == 1 ? { transform: "translate(-120vw)" } : { transform: "translate(0vw)" }}
                >
                    <img src="/vetores/caminhao.png" className={`${css.img} ${css.imgAnimation}`} />
                </span>
            </div>
        </section>
    )
}