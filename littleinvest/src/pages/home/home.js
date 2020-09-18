import React from 'react';
import Header from '../../components/header/header'
import Button from '../../components/button/button'
import CardInvest from "../../components/card-invest/card-invest"
import "./home.css"
import IntroduionImagem from "../../assets/svg/notre-dame.svg"

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
      <section>
        <h1>Mais fácil que gastar dinheiro</h1>
      </section>
    </div>
  )
}

export default Home;