import React from "react"
import Nav from "./Components/Nav"
import Newsletter from "./Components/Newsletter"
import Carousel from "./Components/Carousel"
import Showcase from "./Components/Showcase"
import Footer from "./Components/Footer"
import "./App.css"


class App extends React.Component{
  state = {
    cart: [],
    addProducts: (newProduct) => {
      let updatedCart = [...this.state.cart, newProduct];

      console.log([...this.state.cart, newProduct]);
      this.setState({
        cart: updatedCart,
      });

      window.localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    },
  };

  componentDidMount() {
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));

    if (cartItems != null) {
      this.setState({
        cart: [...cartItems],
      });
    }
  }

  render() {
    return (
      <ShoppingContext.Provider value={this.state}>
        <div>
          <Nav />
          <Carousel />
          <Showcase />
          <Newsletter />
          <Footer />
        </div>
      </ShoppingContext.Provider>
    );
  }
}

export default App;
