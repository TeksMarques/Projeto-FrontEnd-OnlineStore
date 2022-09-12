import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Product from '../components/Product';

class Home extends React.Component {
  state = {
    categorias: [],
    queryValue: '', // valor digitado no input (termo para busca)
    productList: [], // lista de produtos
  };

  async componentDidMount() {
    await this.addCategories();
  }

  addCategories = async () => {
    const types = await getCategories();
    this.setState({ categorias: types });
  };

  inputHandleChange = (event) => {
    // lida com as mudanças no input (adiciona no state)
    const inputValue = event.target.value;

    this.setState({
      queryValue: inputValue,
    });
  };

  buttonHandleClick = async () => {
    const { categorias, queryValue } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(
      categorias,
      queryValue,
    );

    this.setState({
      productList: results,
    });
  };

  handleClickCategories = async ({ target }) => {
    const { results } = await getProductsFromCategoryAndQuery(target.id);
    const categories = results.map(({ id, title, price, thumbnail }) => (
      <Product
        key={ id }
        productName={ title }
        productImage={ thumbnail }
        productPrice={ price }
      />
    ));
    console.log(categories);
    this.setState({
      productList: categories,
    });
  };

  showProductList = () => {
    // Renderize na tela uma exibição resumida de todos os produtos retornados pela API, contendo o nome, a imagem e o preço de cada produto;
    const { productList } = this.state;

    return productList.map((product) => (
      <div key={ product.id }>
        <Product
          productName={ product.title }
          productImage={ product.thumbnail }
          productPrice={ product.price }
        />
        <Link
          data-testid="product-detail-link"
          to={ `/productdetails/${product.id}` }
        >
          Detalhes
        </Link>
      </div>
    ));
  };

  render() {
    const { categorias, productList } = this.state;
    const notFoundErrorMessage = 'Nenhum produto foi encontrado';

    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        {categorias.map((e) => (
          <button
            key={ e.id }
            type="button"
            data-testid="category"
            onClick={ this.handleClickCategories }
          >
            {e.name}
          </button>
        ))}
        <CartButton />

        {/* A tela principal deve possuir um elemento input com o atributo data-testid="query-input"; */}
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.inputHandleChange }
        />
        {/* A tela principal deve possuir um elemento com o atributo data-testid="query-button" que, ao ser clicado, dispara a chamada para a API com o termo de busca pesquisado (ou seja, com o valor digitado no input); */}
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.buttonHandleClick }
        >
          Pesquisar
        </button>
        {productList.length > 0 ? (
          this.showProductList()
        ) : (
          <p>{notFoundErrorMessage}</p>
        )}
      </div>
    );
  }
}
export default Home;
