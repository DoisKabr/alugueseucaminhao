import css from "@/styles/secoesInformacoes/secoes.module.css";
import { useEffect, useRef } from "react";
import { DadosScrollAluguel } from "../corCorpoScroll/CorCorpoScroll";

export default function Aluguel() {
    const ref = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const elementImg = img.current;
        DadosScrollAluguel(element, elementImg);
    }, [])

    return (
        <section id="Aluguel" className={css.secao} ref={ref}>
            <h2>Alugue seu Caminhão</h2>
            <div>
                <div>
                    <h3>Transforme sua Logística com o Aluguel de Caminhões!</h3>
                    <h5>Você precisa de flexibilidade e eficiência no transporte de cargas? Alugar um caminhão é a solução ideal para sua empresa! Com uma frota moderna e diversificada, oferecemos veículos que atendem a todas as suas necessidades logísticas, desde pequenas entregas até grandes transportes rodoviários.</h5>
                    <h4>Vantagens do Aluguel de Caminhões:</h4>
                    <ul>
                        <li><strong>Economia:</strong> Reduza custos operacionais e evite o investimento inicial na compra de veículos.</li>
                        <li><strong>Flexibilidade:</strong> Escolha o tipo de caminhão que melhor se adapta à sua carga e ao seu negócio.</li>
                        <li><strong>Manutenção Inclusa:</strong> Esqueça as preocupações com manutenção e reparos. Nós cuidamos de tudo!</li>
                        <li><strong>Tecnologia de Ponta:</strong> Nossos caminhões são equipados com sistemas de rastreamento e monitoramento em tempo real.</li>
                        <li><strong>Sustentabilidade:</strong> Frota com baixa emissão de poluentes, contribuindo para um transporte mais verde.</li>
                    </ul>
                    <h4>Tipos de Caminhões Disponíveis:</h4>
                    <ul>
                        <li><strong>Caminhão Baú:</strong> Ideal para cargas que precisam de proteção contra intempéries.</li>
                        <li><strong>Caminhão Tanque:</strong> Perfeito para transporte de líquidos e gases.</li>
                        <li><strong>Caminhão Plataforma:</strong> Para cargas de grandes dimensões e maquinários.</li>
                        <li><strong>Caminhão Basculante:</strong> Facilita o descarregamento de materiais a granel.</li>
                        <li><strong>Caminhão Munck:</strong> Equipado com guindaste para elevação e movimentação de cargas pesadas.</li>
                    </ul>
                    <h4>Por que Escolher Nosso Serviço?</h4>
                    <ul>
                        <li><strong>Atendimento Personalizado:</strong> Entendemos suas necessidades e oferecemos soluções sob medida.</li>
                        <li><strong>Suporte 24/7:</strong> Assistência completa a qualquer hora do dia.</li>
                        <li><strong>Documentação Simplificada:</strong> Cuidamos de toda a burocracia para você.</li>
                    </ul>
                    <h5>Não perca tempo e otimize sua operação com o aluguel de caminhões. Solicite uma cotação agora e descubra como podemos ajudar a impulsionar o seu negócio!</h5>
                </div>
                <img src="/imagens/aluguelSecao.jpg" ref={img} />
            </div>
        </section>
    )
}