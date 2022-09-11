import React from 'react';
import { Link } from 'react-router-dom';

class CartButtonDetail extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/ShoppingCart" data-testid="product-add-to-cart">
            <button type="button">Adicionar ao Carrinho</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartButtonDetail;
