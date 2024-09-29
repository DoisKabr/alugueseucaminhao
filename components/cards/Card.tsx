import Link from "next/link";

export default function Card(props: any) {
    return (
        <Link href={props.link}>
            <img src={props.imagem} />
            <h3>{props.nome}</h3>
            <h5>{props.descricao}</h5>
        </Link>
    )
}