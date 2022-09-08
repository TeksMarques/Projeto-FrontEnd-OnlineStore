import React from 'react';
import CartButton from '../components/CartButton';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    categorias: [],
  };

  async componentDidMount() {
    await this.addCategories();
  }

  addCategories = async () => {
    const types = await getCategories();
    this.setState({ categorias: types });
  };

  render() {
    const { categorias } = this.state;
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
      </div>
    );
  }
}
export default Home;
