import React from 'react';
import "./home.css"
import Header from '../../components/header/header'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import CardInvest from "../../components/card-invest/card-invest"
import OptionRender from "../../components/option-rendiment/option-rend"
import IntroduionImagem from "../../assets/svg/notre-dame.svg"
import WindowPC from "../../assets/svg/monitor-window.svg"
import LoadWindow from "../../assets/svg/monitor-loading-progress.svg";
import CardWindow from "../../assets/svg/monitor-cash-credit-card.svg";
import GirlBackground from "../../assets/fotos/citacao.jpg";

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
      <section className="girl-background">
        <img src={GirlBackground} />
        {/* <div className="citacao">
          <i className="text">“ Com o little invest eu pude ter
          certeza que o meu dinheiro estava
        rendendo sem ter que perder tempo do meu dia pensando onde investir.”</i>
          <p className="text">Gabriela Marques</p>
        </div> */}
      </section>
      <section className="create-account">
        <h1> Crie sua conta</h1>
        <div className="div-inputs">
          <Input for="Nome" text="Nome" />
          <Input for="Email" text="Email" />
        </div>
        <Button name="Iniciar Cadastro" />
      </section>
    </div>
  )
}

export default Home;