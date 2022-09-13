import React from 'react';

class CartButtonAdd extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleClick(products) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default CartButtonAdd;
