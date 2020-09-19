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
      <section className="form-account">
        <form className="form">
          <div className="space-form">
            <Input type="text" for="Nome" text="Nome" />
            <Input type="text" for="CPF" text="CPF" />
            <Input type="text" for="E-mail" text="E-mail" />
          </div>
          <div>
            <Input type="text" for="Endereço" text="Endereço" />
            <Input type="text" for="Estado" text="Estado" />
            <Input type="text" for="CEP" text="CEP" />
          </div>
        </form>
        <Button>
          <Link className="color" to='/cadastro2'>Próxima Etapa </Link>
        </Button>
      </section>
      <Footer />
    </div>
  )
}

export default Cadastro; 
