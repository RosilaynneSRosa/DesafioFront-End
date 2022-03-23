import React from 'react'
import logoEmail from "../../imagens/logo-email.svg"
import logo1 from "../../imagens/logo1.svg"
import logoCall from "../../imagens/logo-call.svg"
import logo2 from "../../imagens/logo2.svg"
import "./style.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="localizacao">
                    <h3>Localização</h3>
                    <p>
                        Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                        Alphavile SP <br />
                        brasil@corebiz.ag <br />
                        +55 11 3090 1039
                    </p>
                </div>
                <div className="contatos">
                    <a href="/#">
                        <img src={logoEmail} alt="Contato"/><span>ENTRE EM CONTATO</span> 
                    </a>
                    <a href="/#">
                        <img src={logoCall} alt="Suporte"/><span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                    </a>
                </div>
                <div className="icons">
                    <a href="https://www.corebiz.ag">
                        <p>Created by</p>
                        <img src={logo1} alt="Corebiz"/>
                    </a>
                    <a href="https://www.corebiz.ag">
                        <p>Powered by</p>
                        <img src={logo2} alt="Vtex"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;