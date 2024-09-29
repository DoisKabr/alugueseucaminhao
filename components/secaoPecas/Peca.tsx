import css from "@/styles/secoesInformacoes/secoes.module.css";
import { useEffect, useRef } from "react";
import { DadosScrollPeca } from "../corCorpoScroll/CorCorpoScroll";

export default function Peca() {
    const ref = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const elementImg = img.current;
        DadosScrollPeca(element, elementImg);
    }, [])

    return (
        <section className={css.secao} id="Pecas" ref={ref}>
            <h2>Compre suas peças de caminhão</h2>
            <div>
                <div>
                    <h3>Encontre as Melhores Peças para Seu Caminhão na Alugue seu Caminhão</h3>
                    <ul>
                        <li><strong>Qualidade e Confiabilidade:</strong> Na Alugue seu Caminhão, entendemos a importância de manter seu caminhão em perfeito estado. Por isso, oferecemos uma ampla variedade de peças de alta qualidade, desde motores e transmissões até acessórios e componentes de cabine. Nossas peças são rigorosamente testadas para garantir durabilidade e desempenho superior.</li>
                        <li><strong>Variedade e Disponibilidade:</strong> Com um estoque diversificado, atendemos todas as marcas e modelos de caminhões. Seja você um proprietário de frota ou um caminhoneiro autônomo, temos as peças que você precisa para manter seu veículo rodando com segurança e eficiência.</li>
                        <li><strong>Facilidade de Compra:</strong> Navegar pelo nosso site é simples e intuitivo. Encontre rapidamente as peças que procura utilizando nossa ferramenta de busca avançada. Além disso, oferecemos diversas opções de pagamento e entrega rápida para todo o Brasil.</li>
                        <li><strong>Atendimento Especializado:</strong> Nossa equipe de especialistas está sempre pronta para ajudar. Precisa de orientação técnica ou não sabe exatamente qual peça escolher? Entre em contato conosco e receba suporte personalizado.</li>
                        <li><strong>Promoções Exclusivas:</strong> Aproveite nossas ofertas especiais e descontos exclusivos para compras online. Inscreva-se em nossa newsletter e seja o primeiro a saber sobre novas promoções e lançamentos.</li>
                        <li><strong>Seu Caminhão Merece o Melhor:</strong> Não arrisque a performance do seu caminhão com peças de qualidade duvidosa. Confie na Alugue seu Caminhão para fornecer as melhores soluções em peças de reposição. Mantenha seu caminhão sempre pronto para enfrentar qualquer estrada!</li>
                    </ul>
                </div>
                <img src="/imagens/pecasSecao.jpg" ref={img} />
            </div>
        </section>
    )
}