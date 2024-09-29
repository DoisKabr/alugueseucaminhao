import css from "@/styles/secoesInformacoes/secoes.module.css";
import { useEffect, useRef } from "react";
import { DadosScrollCompra } from "../corCorpoScroll/CorCorpoScroll";

export default function Compra() {
    const ref = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const elementImg = img.current;
        DadosScrollCompra(element, elementImg);
    }, [])

    return (
        <section id="Compra" className={css.secao} ref={ref}>
            <h2>Compre seu Caminhão</h2>
            <div>
                <div>
                    <h3>Encontre o Caminhão Perfeito para o Seu Negócio!</h3>
                    <h5>Na Alugue seu Caminhão, sabemos que escolher o caminhão certo é essencial para o sucesso do seu negócio. Por isso, oferecemos uma ampla variedade de caminhões novos, seminovos e usados, das melhores marcas do mercado, como Mercedes-Benz, Scania, Volvo, e muito mais.</h5>
                    <h4>Por que Comprar Conosco?</h4>
                    <ul>
                        <li><strong>Variedade de Opções:</strong> Temos caminhões de todos os tipos e tamanhos, desde leves até pesados, para atender a todas as suas necessidades de transporte.</li>
                        <li><strong>Qualidade Garantida:</strong> Todos os nossos veículos passam por rigorosas inspeções de qualidade para garantir que você receba um caminhão em perfeito estado.</li>
                        <li><strong>Preços Competitivos:</strong> Oferecemos as melhores condições de pagamento e financiamento do mercado, facilitando a aquisição do seu caminhão.</li>
                        <li><strong>Atendimento Personalizado:</strong> Nossa equipe de especialistas está pronta para ajudar você a encontrar o caminhão ideal, oferecendo suporte e orientação em cada etapa do processo.</li>
                    </ul>
                    <h4>Não Perca Tempo!</h4>
                    <h5>Visite nosso site e confira as ofertas imperdíveis que preparamos para você. Encontre o caminhão perfeito para impulsionar o seu negócio e garantir a eficiência no transporte de cargas. Na Alugue seu Caminhão, sua satisfação é nossa prioridade!</h5>
                    <h4>Entre em Contato Conosco Hoje Mesmo!</h4>
                    <h5>Acesse wwww.alugueseucaminhao.com.br ou ligue para 11 9 9999-9999 e fale com um de nossos consultores. Estamos ansiosos para ajudar você a encontrar o caminhão ideal!</h5>
                </div>
                <img src="/imagens/compraSecao.jpg" ref={img} />
            </div>
        </section>
    )
}