import css from "@/styles/secoesInformacoes/secoes.module.css";

export default function Sobre() {
    return (
        <section className={css.secao} id="Sobre">
            <h2>Sobre a nossa Empresa</h2>
            <div>
                <div>
                    <h3>Bem-vindo ao Alugue seu Caminhão</h3>
                    <h5>Na Alugue seu Caminhão, somos apaixonados por caminhões e tudo o que eles representam. Com anos de experiência no mercado, oferecemos uma vasta gama de serviços e produtos para atender todas as suas necessidades de transporte e logística.</h5>
                    <h4>Nossos Serviços:</h4>
                    <ul>
                        <li><strong>Venda de Caminhões:</strong> Oferecemos uma seleção diversificada de caminhões novos e usados, das melhores marcas do mercado, garantindo qualidade e confiabilidade.</li>
                        <li><strong>Manutenção e Reparos:</strong> Nossa equipe de técnicos especializados está pronta para manter seu caminhão em perfeito estado, com serviços de manutenção preventiva e reparos rápidos e eficientes.</li>
                        <li><strong>Peças e Acessórios:</strong> Dispomos de um amplo estoque de peças e acessórios originais para todos os modelos de caminhões, assegurando que você encontre exatamente o que precisa.</li>
                    </ul>
                    <h4>Por que Escolher a Alugue seu Caminhão ?</h4>
                    <ul>
                        <li><strong>Experiência e Confiabilidade:</strong> Anos de atuação no mercado nos tornaram referência em qualidade e confiança.</li>
                        <li><strong>Atendimento Personalizado:</strong> Nossa equipe está sempre pronta para oferecer um atendimento personalizado, entendendo suas necessidades e oferecendo as melhores soluções.</li>
                        <li><strong>Inovação e Tecnologia:</strong> Investimos constantemente em tecnologia para oferecer produtos e serviços de ponta, garantindo a satisfação de nossos clientes.</li>
                    </ul>
                    <h5>Explore nosso site e descubra tudo o que a Alugue seu Caminhão pode fazer por você e seu caminhão. Estamos aqui para ajudar você a alcançar seus objetivos com eficiência e segurança.</h5>
                    <h5>A Alugue seu Caminhão é o seu parceiro de confiança no mundo dos caminhões. Junte-se a nós e descubra um novo padrão de excelência!</h5>
                </div>
            </div>
        </section>
    )
}