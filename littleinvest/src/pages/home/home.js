import React from 'react';
import "./home.css"
import Header from '../../components/header/header'
import Button from '../../components/button/button'
import CardInvest from "../../components/card-invest/card-invest"
import OptionRender from "../../components/option-rendiment/option-rend"
import IntroduionImagem from "../../assets/svg/notre-dame.svg"
import WindowPC from "../../assets/svg/monitor-window.svg"
import LoadWindow from "../../assets/svg/monitor-loading-progress.svg"
import CardWindow from "../../assets/svg/monitor-cash-credit-card.svg"

const Home = () => {
  return (
    <div>
      <Header />
      <section className="introdution">
        <div className="content-intro">
          <div className="invest-intro">
            <p>Planeje o seu futuro sem perder tempo no presente</p>
            <Button name="Investir Agora" />
          </div>
          <img src={IntroduionImagem} />
        </div>
      </section>
      <section className="section-cards-invest">
        <CardInvest lci="LCI 2018/12" perct="110% do CDB" bank="Banco Certo" />
        <CardInvest lci="LCI 2020/01" perct="115% do CDB" bank="Santrafe" />
        <CardInvest lci="LCI 2022/06" perct="117% do CDB" bank="Banco Inova" />
        <CardInvest lci="LCI 2018/07" perct="122% do CDB" bank="Cofre Agora" />
      </section>
      <section className="easy-cash-section">
        <h1>Mais fácil que gastar dinheiro</h1>
        <div className="section-more">
          <OptionRender desc="Acesse a nossa plataforma e escolha o seu plano" type="Acesso Online" src={WindowPC} />
          <OptionRender desc="Espere até a data de resgate e acompanhe o rendimento" type="Rendimento Fácil" src={LoadWindow} />
          <OptionRender desc="Retire o rendimento e gaste parte em viagens e compras" type="Resgate Simples" src={CardWindow} />
        </div>
        <Button name="Entre em contato" />
      </section>
    </div>
  )
}

export default Home;