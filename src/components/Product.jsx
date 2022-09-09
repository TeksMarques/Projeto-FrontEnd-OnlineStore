import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { productName, productImage, productPrice } = this.props;

    return (
      <div
        data-testid="product" // Adicione o atributo data-testid="product" nos elementos que possuem os dados dos produtos;
      >
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
