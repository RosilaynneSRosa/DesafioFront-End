import React from "react"
import Axios from "axios"
import logo8 from "../../imagens/logo8.svg"
import logo9 from "../../imagens/logo9.svg"
import ShoppingContext from "../../Contexts/ShoppingContext"
import "./style.css"

class Showcase extends React.Component {
    state = { 
        products: []
     }

    async componentDidMount() {
        Axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(res => {
                let products = res.data;
                this.setState({products})
            })
    }

    starsComplete(starsCount) {
        let starsList = []

        for(let i = 1;i <= 5; i++)
        {
            starsList.push(<img key={"star" + i} src={i <= starsCount ? logo8 : logo9} alt={"Star"}/>)
        }

        return starsList;
    }

    convertNumber(price)
    {
        const convertedNumber = price / 100;
        return convertedNumber.toFixed(2).toLocaleString("pt-BR");
    }

    render() { 
        return ( 
            <ShoppingContext.Consumer>
                {({cart, addProducts}) => (
                    <div className="showcase">
                        <div className="container-showcase">
                        <h1 className="title">Mais Vendidos</h1>
                        <hr />
                            <ul className="produtos">
                                { 
                                    this.state.products.map((product) => 
                                        <li key={product.productName} className="produto">
                                            <img src={product.imageUrl} alt="Product Image" />
                                            {product.listPrice ? <div className="flag-discount"></div> : null }
                                            <div className="card-info">
                                                <p className="produto-nome">{product.productName}</p>
                                                <div className="stars">
                                                    { this.starsComplete(product.stars) }
                                                </div>
                                                <p className="old-price">{product.listPrice != null ? "de R$ " + this.convertNumber(product.listPrice) : null }</p>
                                                <p className="current-price">por R$ {this.convertNumber(product.price)}</p>
                                                <p className="installments">{product.installments.length > 0 ? "ou em " + product.installments[0].quantity + "x de R$ " + this.convertNumber(product.installments[0].value) : null }</p>
                                                <button className="buy" onClick={() => addProducts(product)}>Comprar</button>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div> 
                )}
            </ShoppingContext.Consumer>
        );
    }
}
 
export default Showcase;

