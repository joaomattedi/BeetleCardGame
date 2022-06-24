import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  // constructor() {
  //   super();

  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <>
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          name="cardDescription"
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAtribute1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAtribute2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAtribute3"
          data-testid="attr3-input"
          onChange={ onInputChange }
          value={ cardAttr3 }
        />
        <input
          type="text"
          name="cardUrl"
          data-testid="image-input"
          onChange={ onInputChange }
          value={ cardImage }
        />
        <select
          name="cardRarity"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
        <button
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Submit
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
