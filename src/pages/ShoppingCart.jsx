import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
  };

  render() {
    const { cart } = this.state;
    return (
      cart.length === 0 && (
        <div>
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        </div>
      ));
  }
}

export default ShoppingCart;
