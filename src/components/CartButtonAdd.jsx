import React from 'react';
import PropTypes from 'prop-types';
import saveLocalStorage from '../services/saveLocalStorage';

class CartButtonAdd extends React.Component {
  handleClickAdd = () => {
    const { productName, productImage, productPrice } = this.props;
    const object = { productName, productImage, productPrice, amountProduct: 1 };
    saveLocalStorage(object);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClickAdd }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CartButtonAdd.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default CartButtonAdd;
