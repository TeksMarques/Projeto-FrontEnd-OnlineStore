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
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      ));
  }
}

export default ShoppingCart;
