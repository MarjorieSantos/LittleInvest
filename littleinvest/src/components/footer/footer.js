import React from 'react';
import "./footer.css"
import Facebook from '../../assets/sociais/facebook.svg'
import Twitter from '../../assets/sociais/twitter.svg'
import Youtube from '../../assets/sociais/youtube.svg'
import Instagram from '../../assets/sociais/instagram.svg'

const Footer = () => {
  return (
    <footer >
      <section className="footer">
        <div>
          <h1>MAPA DO SITE</h1>
          <div className="lists-footer">
            <ul>
              <li>╴ Home</li>
              <li>╴ Investir</li>
              <li>╴ Serviços</li>
            </ul>
            <ul>
              <li>╴ Conta</li>
              <li>╴ Termos</li>
              <li>╴ Contato</li>
            </ul>
          </div>
        </div>

        <div className="sociais">
          <h1> REDES SOCIAIS</h1>
          <div className="social-options">
            <img className="icons-social" src={Facebook} />
            <img className="icons-social" src={Twitter} />
            <img className="icons-social" src={Instagram} />
            <img className="icons-social" src={Youtube} />
          </div>
        </div>

        <div className="about">
          <h1>SOBRE</h1>
          <p>A little invest é uma empresa de <br />
          investimentos criada para facilitar a vida de<br />
        investidores. Com ela você investe <br /> rapidamente o seu dinheiro.</p>
        </div>
      </section>

      <div className="copy">
        <p>Little Invest 1998 - 2018 -  Todos os direitos reservados</p>
      </div>

    </footer>
  )
};

export default Footer;