import React, { Component } from "react";
import { Container } from "../../styled/Home";
import PageHeader from "../../components/PageHeader";
import CatsList from "../../components/CatsList";

class Home extends Component {
  state = {
    pageTitle: "Ты сегодня покормил кота?",
    data: [
      {
        dish: "с фуа-гра",
        weight: "0,5",
        portion: "10",
        gift: 0,
        isAvailable: true,
        missSelect: false,
        catchPhrase: "Печень утки разварная с артишоками."
      },
      {
        dish: "с рыбой",
        weight: "2",
        portion: "40",
        gift: 2,
        isAvailable: false,
        missSelect: false,
        catchPhrase: "Головы щучьи с чесноком да свежайшая сёмгушка."
      },
      {
        dish: "с курой",
        weight: "5",
        portion: "100",
        gift: 5,
        isAvailable: true,
        missSelect: false,
        catchPhrase: "Филе из цыплят с трюфелями в бульоне."
      }
    ]
  };

  changeStateOnHover = index => {
    const cardId = index;
    let newState = Object.assign({}, this.state);
    newState.data[cardId].missSelect = true;
    if (!newState.data[cardId].isAvailable) {
      return false;
    }
    this.setState({ newState });
  };

  changeStateOnClick = index => {
    const cardId = index;
    let newState = Object.assign({}, this.state);
    newState.data[cardId].isAvailable = !newState.data[cardId].isAvailable;
    newState.data[cardId].missSelect = false;
    this.setState({ newState });
  };

  render() {
    const { pageTitle, data } = this.state;
    return (
      <Container>
        <PageHeader title={pageTitle} />
        <CatsList
          catData={data}
          changeStateOnClick={this.changeStateOnClick}
          changeStateOnHover={this.changeStateOnHover}
        />
      </Container>
    );
  }
}

export default Home;
