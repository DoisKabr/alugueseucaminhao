import { useEffect } from "react";
import AreaCards from "../../components/cards/AreaCards";
import CorCorpoScroll from "../../components/corCorpoScroll/CorCorpoScroll";
import Header from "../../components/header/Header";
import Navegacao from "../../components/header/Navegacao";
import Aluguel from "../../components/secaoAluguel/Aluguel";
import Compra from "../../components/secaoCompra/Compra";
import Contatos from "../../components/contatos/Contatos";
import Footer from "../../components/footer/Footer";
import Peca from "../../components/secaoPecas/Peca";
import Sobre from "../../components/secaoSobre/Sobre";

export default function Home() {

  useEffect(() => {
    CorCorpoScroll();
    document.title = "Alugue seu Caminhão / Inicio";
  }, [])
  
  return (
    <>
      <Navegacao />
      <Header />
      <AreaCards />
      <Aluguel />
      <Compra />
      <Peca />
      <Contatos />
      <Sobre />
      <Footer />
    </>
  )
}