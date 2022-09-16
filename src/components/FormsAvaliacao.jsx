import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsAvaliacao extends Component {
  state = {
    email: '',
    avaliacao: 0,
    review: '',
    validacao: false,
    lista: [],
  };

  componentDidMount() {
    const { id } = this.props;
    const getLocal = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({ lista: getLocal });
  }

  handleForm = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    const { id } = this.props;
    const { email, avaliacao, review } = this.state;
    if (email === '' || avaliacao === 0) {
      this.setState({ validacao: true });
      return;
    }
    const getLocal = JSON.parse(localStorage.getItem(id)) || [];
    const dados = {
      email,
      review,
      avaliacao,
    };
    localStorage.setItem(id, JSON.stringify([...getLocal, dados]));
    this.setState({
      email: '', review: '', lista: [...getLocal, dados], validacao: false });
  };

  render() {
    const { email, review, validacao, lista } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                data-testid="product-detail-email"
                required
                value={ email }
                onChange={ this.handleForm }
              />
            </label>
            <label htmlFor="1">
              1
              <input
                type="radio"
                name="avaliacao"
                id="1"
                data-testid="1-rating"
                required
                onFocus={ this.handleForm }
                value={ 1 }
              />
            </label>
            <label htmlFor="1">
              2
              <input
                type="radio"
                name="avaliacao"
                id="2"
                data-testid="2-rating"
                required
                onFocus={ this.handleForm }
                value={ 2 }
              />
            </label>
            <label htmlFor="1">
              3
              <input
                type="radio"
                name="avaliacao"
                id="3"
                data-testid="3-rating"
                required
                onFocus={ this.handleForm }
                value={ 3 }
              />
            </label>
            <label htmlFor="1">
              4
              <input
                type="radio"
                name="avaliacao"
                id="4"
                data-testid="4-rating"
                required
                onFocus={ this.handleForm }
                value={ 4 }
              />
            </label>
            <label htmlFor="1">
              5
              <input
                type="radio"
                name="avaliacao"
                id="5"
                data-testid="5-rating"
                required
                onFocus={ this.handleForm }
                value={ 5 }
              />
            </label>
          </div>
          <div>
            <textarea
              name="review"
              id="product-detail"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              value={ review }
              placeholder="Deixe sua avaliação"
              onChange={ this.handleForm }
            />
          </div>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.handleSubmit }
          >
            Enviar
          </button>
          {validacao && <p data-testid="error-msg">Campos inválidos</p>}
        </form>

        {lista.map((reviewLocal, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{reviewLocal.email}</p>
            <p data-testid="review-card-rating">{reviewLocal.avaliacao}</p>
            <p data-testid="review-card-evaluation">{reviewLocal.review}</p>
          </div>
        ))}
      </div>
    );
  }
}

FormsAvaliacao.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default FormsAvaliacao;

// A lógica das funções do componentDidMount() e handleSubmit() foram feitas com ajuda do aluno Francisco Costa;
