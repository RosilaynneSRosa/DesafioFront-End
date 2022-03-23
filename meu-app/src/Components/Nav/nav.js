import React from "react"
import logo4 from "../../imagens/logo4.svg"
import menu1 from "../../imagens/menu1.svg"
import logo5 from "../../imagens/logo5.svg"
import logoMyAcoount from "../../imagens/logo-my-account.svg"
import logo6 from "../../imagens/logo6.svg"
import ShoppingContext from "../../Contexts/ShoppingContext"
import "./style.css"

const Nav = () => {
    return (
        <ShoppingContext.Consumer>
            {({cart}) => 
                (
            <header className="nav">
                <div className="menu2">
                
                    <img src={menu1}className="menu1" alt="Menu"/>
               
                <img className="logo4" src={logo4} alt="Logo Corebiz"/>
                </div>
                
                <form className="form">
                <input 
                                    className="search-box"
                                    type="text" name="searchbox" 
                                    id="searchbox" 
                                    placeholder="O que está procurando?"
                                />
                                <button className="search-button">
                                <img src={logo5} alt="Search"/>
                                </button>
                
                </form>
                <button className="MyAccount">Minha Conta
                    <img src={logoMyAcoount} alt="My User"/>
                </button>
                <button className="MyShoppingCart">
                                <img src={logo6} alt="My Cart"/>
                                {cart.length > 0 ? <span>{cart.length}</span> : null}
                </button>

            </header>

            )
            }
        </ShoppingContext.Consumer>
    )
}

export default Nav;