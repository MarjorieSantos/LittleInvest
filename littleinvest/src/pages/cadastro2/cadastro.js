import React from "react"
import "./cadastro.css"
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import TableAccount from '../../components//your-account/your-account'
import Phases from '../../components/phases/phases'
import Footer from '../../components/footer/footer'

const Cadastro = () => {
  return (
    <div>
      <Header />
      <TableAccount />
      <Phases />
      <section className="form-account2">
        <form className="form2">
          <Input type="number" for="Nome do cartão" text="Nome do cartão" />
          <Input type="number" for="Número do cartão" text="Número do cartão" />
          <div className="form-validate">
            <Input type="number" for="Vencimento" text="Vencimento" />
            <Input type="number" for="Código" text="Código" />
          </div>
        </form>
        <Button >
          <Link className="color" to='/cadastro3'>Realizar Pagamento</Link>
        </Button>
      </section>
      <Footer />
    </div>
  )
}

export default Cadastro; 
