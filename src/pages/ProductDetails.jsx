import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import CartButton from '../components/CartButton';

class ProductDetails extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const resultado = await getProductById(id);
    console.log(resultado);
    this.setState({
      products: resultado,
    });
  }

  render() {
    const { products } = this.state;
    const { title, thumbnail, price } = products;

    return (
      <div>
        <h6 data-testid="product-detail-name">{title}</h6>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-price">{`R$ ${price}`}</p>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
