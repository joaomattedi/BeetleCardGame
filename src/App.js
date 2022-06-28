import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
      filterName: '',
    };
  }

  setNameFilter = (event) => {
    this.setState({
      filterName: event.target.value,
    });
  }

  validateTrunfo = () => {
    const { cards } = this.state;
    return cards.some(({ cardTrunfo: exist }) => exist);
  };

  isSaveButtonDisabled = () => {
    const {
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxAllSkillPoints = 210;
    const maxSkillPoints = 90;

    const sumByAtribute = Number(cardAttr1) <= maxSkillPoints
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxSkillPoints
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxSkillPoints
      && Number(cardAttr3) >= 0;

    const sumTotal = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
      <= maxAllSkillPoints;

    return !(
      !!cardDescription
      && cardImage
      && cardName
      && cardRare
      && sumTotal
      && sumByAtribute
    );
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState(
      ({ cards: prevList }) => ({
        cards: [
          ...prevList,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          },
        ],
      }),
      () => this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: this.validateTrunfo(),
      }),
    );
  };

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  renewCards = (key) => {
    const { hasTrunfo } = this.state;
    this.setState(({ cards: prevList }) => ({
      cards: (prevList.filter(({ cardName }) => cardName !== key)),
    }), () => {
      if (hasTrunfo) {
        this.setState({
          hasTrunfo: this.validateTrunfo(),
        });
      }
    });
  }

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
      cards,
      filterName,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          buttonDelete={ false }
          renewCards={ this.renewCards }
        />
        <Filter setNameFilter={ this.setNameFilter } />

        {!filterName ? cards.map(
          ({
            cardName: name,
            cardDescription: desc,
            cardAttr1: atr1,
            cardAttr2: atr2,
            cardAttr3: atr3,
            cardImage: img,
            cardRare: rare,
            cardTrunfo: trunfo,
          }) => (
            <Card
              key={ name }
              cardName={ name }
              cardDescription={ desc }
              cardAttr1={ atr1 }
              cardAttr2={ atr2 }
              cardAttr3={ atr3 }
              cardImage={ img }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              buttonDelete
              renewCards={ this.renewCards }
            />
          ),
        ) : cards.map(
          ({
            cardName: name,
            cardDescription: desc,
            cardAttr1: atr1,
            cardAttr2: atr2,
            cardAttr3: atr3,
            cardImage: img,
            cardRare: rare,
            cardTrunfo: trunfo,
          }) => (
            name.includes(filterName)
            && <Card
              key={ name }
              cardName={ name }
              cardDescription={ desc }
              cardAttr1={ atr1 }
              cardAttr2={ atr2 }
              cardAttr3={ atr3 }
              cardImage={ img }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              buttonDelete
              renewCards={ this.renewCards }
            />
          ),
        )}
      </div>
    );
  }
}

export default App;
