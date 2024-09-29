import css from "@/styles/Contatos/Contatos.module.css";

export default function Contatos() {
    return (
        <section className={css.secao} id="Contatos">
            <div></div>
            <div>
                <div>
                    <img src="/vetores/email.svg" />
                    <h4>alugueseucaminhao@gmail.com</h4>
                </div>
                <div>
                    <img src="/vetores/phone.svg" />
                    <h4>11 9 9999-9999</h4>
                </div>
                <div>
                    <img src="/vetores/face.svg" />
                    <h4>alugueseucaminhao.facebook.com</h4>
                </div>
            </div>
        </section>
    )
}