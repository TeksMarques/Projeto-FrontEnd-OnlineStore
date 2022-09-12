import React from 'react';
import ProductCart from '../components/ProductCart';

class ShoppingCart extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const cartItem = JSON.parse(localStorage.getItem('cartItem'));
    const { loading } = this.state;
    return (
      <div>
        {loading && <p>Carregando...</p>}
        {cartItem
          ? (
            cartItem.map((product) => (
              <ProductCart
                key={ product.id }
                id={ product.id }
                productName={ product.productName }
                productImage={ product.productImage }
                productPrice={ product.productPrice }
                amountProdut={ product.amountProdut }
              />
            ))
          )
          : (<p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>)}
      </div>
    );
  }
}

export default ShoppingCart;
