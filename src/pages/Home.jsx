import React from 'react';
import CartButton from '../components/CartButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
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

  inputHandleChange = (event) => { // lida com as mudanças no input (adiciona no state)
    const inputValue = event.target.value;

    this.setState({
      queryValue: inputValue,
    });
  };

  buttonHandleClick = async () => {
    const { categorias, queryValue } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categorias, queryValue);

    this.setState({
      productList: results,
    });
  };

  showProductList = () => { // Renderize na tela uma exibição resumida de todos os produtos retornados pela API, contendo o nome, a imagem e o preço de cada produto;
    const { productList } = this.state;

    return productList.map((product) => (
      <Product
        productName={ product.title }
        productImage={ product.thumbnail }
        productPrice={ product.price }
        key={ product.id }
      />
    ));
  };

  render() {
    const { categorias, productList } = this.state;
    const notFoundErrorMessage = 'Nenhum produto foi encontrado';

    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        {categorias.map((e) => (
          <button
            key={ e.id }
            type="button"
            data-testid="category"
          >
            { e.name }

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
        {
          (productList.length > 0)
            ? this.showProductList()
            : <p>{ notFoundErrorMessage }</p>
        }
      </div>
    );
  }
}
export default Home;
