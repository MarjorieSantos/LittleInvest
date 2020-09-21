import React from "react"
import "./phases.css"

const Phases = () => {
  return (
    <div className="phases-div">
      <div className="phases">
        <span>1ª Etapa</span>
        <span>Dados Pessoais</span>
      </div>
      <div className="phases">
        <span>2ª Etapa</span>
        <span>Pagamento</span>
      </div>
      <div className="phases">
        <span>3ª Etapa</span>
        <span>Instruções</span>
      </div>
    </div>
  )
}

export default Phases