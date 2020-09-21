import React from "react"
import "./cadastro.css"
import Header from '../../components/header/header'
import TableAccount from '../../components//your-account/your-account'
import Phases from '../../components/phases/phases'
import Footer from '../../components/footer/footer'
import PcImage from "../../assets/svg/monitor-cash-credit-card.svg"

const Cadastro = () => {
  return (
    <div>
      <Header />
      <TableAccount />
      <Phases />
      <section className="cadastro3">
        <h2>Obrigada pela compra.
Em breve entraremos em contato.</h2>
        <img src={PcImage} />
      </section>
      <Footer />
    </div>
  )
}

export default Cadastro; 
