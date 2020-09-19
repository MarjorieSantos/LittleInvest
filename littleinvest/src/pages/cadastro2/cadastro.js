import React from "react"
import "./cadastro.css"
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import TableAccount from '../../components//your-account/your-account'
import Footer from '../../components/footer/footer'

const Cadastro = () => {
  return (
    <div>
      <Header />
      <TableAccount />
      <form>
        <Input type="number" for="Nome do cartão" text="Nome do cartão" />
        <Input type="number" for="Número do cartão" text="Número do cartão" />
        <Input type="number" for="Vencimento" text="Vencimento" />
        <Input type="number" for="Código" text="Código" />
      </form>
      <Button >
        <Link className="color" to='/cadastro3'>Realizar Pagamento</Link>
      </Button>
      <Footer />
    </div>
  )
}

export default Cadastro; 
