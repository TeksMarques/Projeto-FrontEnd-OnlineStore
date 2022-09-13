import React from 'react';
import PropTypes from 'prop-types';
import saveLocalStorage from '../services/saveLocalStorage';

class Product extends React.Component {
  handleClick = () => {
    const { productName, productImage, productPrice } = this.props;
    const object = { productName, productImage, productPrice, amountProdut: 1 };
    saveLocalStorage(object);
  };

  render() {
    const { productName, productImage, productPrice } = this.props;

    return (
      <div data-testid="product">
        <h1>
          { productName }
        </h1>
        <img
          src={ productImage }
          alt={ productName }
        />
        <p>
          { productPrice }
        </p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default Product;
