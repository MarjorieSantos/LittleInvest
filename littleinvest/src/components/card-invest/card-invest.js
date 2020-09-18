import React from 'react';
import ButtonAdd from '../button-add/button-add'
import "./card-invest.css"

const CardInvest = (porps) => {
  return (
    <div className="card-invest-div">
      <p>{porps.lci}</p>
      <p>{porps.perct}</p>
      <p>{porps.bank}</p>
      <ButtonAdd name="Adicionar" />
    </div>
  )
}

export default CardInvest;