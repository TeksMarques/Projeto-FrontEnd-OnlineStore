import React from 'react';
import PropTypes from 'prop-types';

class ProductCart
  extends React.Component {
  render() {
    const { productName,
      productImage,
      productPrice,
      amountProdut } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          { productName }
        </h3>
        <img src={ productImage } alt={ productName } />
        <p>
          {`R$: ${productPrice}`}
        </p>
        <p data-testid="shopping-cart-product-quantity">
          { amountProdut }
        </p>
      </div>
    );
  }
}

ProductCart.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  amountProdut: PropTypes.number.isRequired,
};
export default ProductCart;
