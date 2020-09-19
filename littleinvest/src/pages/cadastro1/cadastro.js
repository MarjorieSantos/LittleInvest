import React from "react"
import "./cadastro.css"
import Header from '../../components/header/header'
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
        <Input type="text" for="" text="Nome" />
        <Input type="text" for="" text="CPF" />
        <Input type="text" for="" text="E-mail" />
        <Input type="text" for="" text="Endereço" />
        <Input type="text" for="" text="Estado" />
        <Input type="text" for="" text="CEP" />
      </form>
      <Button name="Próxima Etapa >" />
      <Footer />
    </div>
  )
}

export default Cadastro; 
