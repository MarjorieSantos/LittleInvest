import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button.js'
import './header.css';
import Logo from "../../assets/svg/little-invest.svg"

const Header = () => {
  return (
    <header className="header-full">
      <div>
        <Link className="color" to='/'><img src={Logo} alt="logo" /></Link>
      </div>

      <div>
        <nav className="nav-menu">
          <ul>
            <li>Investimentos</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
          <Button >
            <Link className="color" to='/cadastro'>Cadastre-se</Link>
          </Button>
        </nav>
      </div>
    </header >
  )
}

export default Header;
