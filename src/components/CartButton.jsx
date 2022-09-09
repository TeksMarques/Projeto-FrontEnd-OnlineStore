import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <button type="button">Carrinho de Compras</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartButton;
