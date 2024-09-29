import css from "@/styles/cards/AreaCards.module.css";
import Card from "./Card";

export default function AreaCards() {
    return (
        <section className={css.secao}>
            <Card nome={"Alugueis"} descricao={"Se você precisa transportar equipamentos pesados, está de mudança ou planejando uma viagem em grupo, alugar uma van é uma solução inteligente para ganhar tempo nos seus deslocamentos. Em vez de realizar várias viagens ou dividir o seu grupo em carros diferentes, encontre locadoras com aluguel de vans em São Paulo e otimize os seus deslocamentos. Pesquise os diferentes modelos que se encaixam nas suas necessidades e no seu orçamento."} imagem={"/imagens/aluguel.jpg"} link={"#Aluguel"} />
            <Card nome={"Compras"} descricao={"Está na hora de renovar sua frota e aumentar a eficiência do seu transporte. Nossos caminhões são projetados para oferecer durabilidade, economia de combustível e conforto para o motorista. Com tecnologia de ponta e manutenção facilitada, você terá menos tempo de inatividade e mais produtividade na estrada."} imagem={"/imagens/compra.jpg"} link={"#Compra"} />
            <Card nome={"Peças"} descricao={"Manter sua frota de caminhões em perfeito estado é essencial para garantir a eficiência e a segurança nas estradas. Com nossa ampla gama de peças de alta qualidade, você pode ter a certeza de que seus caminhões estarão sempre prontos para enfrentar qualquer desafio."} imagem={"/imagens/pecas.jpg"} link={"#Pecas"} />
        </section>
    )
}