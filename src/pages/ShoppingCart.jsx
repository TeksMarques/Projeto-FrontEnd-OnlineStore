import React from 'react';
import ProductCart from '../components/ProductCart';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
    loading: false,
  };

  componentDidMount() {
    const cartItem = JSON.parse(localStorage.getItem('cartItem'));
    this.setState({ cart: cartItem });
  }

  render() {
    const { loading, cart } = this.state;
    console.log(cart);
    return (
      <div>
        {loading && <p>Carregando...</p>}
        {cart
          ? (
            cart.map((product) => (
              <ProductCart
                key={ product.productName }
                productName={ product.productName }
                productImage={ product.productImage }
                productPrice={ product.productPrice }
                amountProduct={ product.amountProduct }
              />
            ))
          )
          : (<p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>)}
      </div>
    );
  }
}

export default ShoppingCart;
