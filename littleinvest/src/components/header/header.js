import React from 'react';
import Button from '../button/button.js'
import './header.css';
import Logo from "../../assets/svg/little-invest.svg"

const Header = () => {
  return (
    <header className="header-full">
      <div>
        <img src={Logo} alt="logo" />
      </div>

      <div>
        <nav className="nav-menu">
          <ul>
            <li>Investimentos</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
          <Button name="Cadastre-se" />
        </nav>
      </div>
    </header >
  )
}

export default Header;
