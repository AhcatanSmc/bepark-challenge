import React from "react";
import "./Planning.scss";
import Card from "./Card";
import { ReactComponent as PlusSign } from "./plussign.svg";

import { wrapGrid } from "animate-css-grid";

const cardList = [
  {
    days: "",
    fav: false,
    order: null,
  },
  {
    days: "",
    fav: false,
    order: null,
  },
  {
    days: "",
    fav: false,
    order: null,
  },
  {
    days: "",
    fav: false,
    order: null,
  },
  {
    days: "",
    fav: true,
    order: null,
  },
];
const neworderarr = [];
neworderarr.filter((item, index) => neworderarr.indexOf(item) === index);

class Planning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: cardList,
      hidden: false,
      forceGridFunc: null,
      unwrapGrid: null,
    };
  }

  componentWillMount() {
    const initDays = [1, 5, 7, 15, 30];
    const initOrder = [1, 2, 3, 4, 5];
    const daysLoadedCardList = this.state.cardList.map((card, i) => {
      const fav = card.fav;
      return {
        order: initOrder[i],
        days: initDays[i],
        fav: fav,
      };
    });
    this.setState({ cardList: daysLoadedCardList });
  }

  componentDidMount() {
    const grid = document.querySelector(".planning");
    wrapGrid(grid, {
      // int: default is 0 ms
      stagger: 0,
      // int: default is 250 ms
      duration: 300,
      // string: default is 'easeInOut'
      easing: "easeInOut",
    });
    const { unwrapGrid, forceGridAnimation } = wrapGrid(grid);
    this.setState({ forceGridFunc: forceGridAnimation });
    this.setState({ unwrapGrid: unwrapGrid });
  }

  componentDidUpdate() {
    this.cardsReorder();
  }
  addNewCard = () => {
    const oldCardList = this.state.cardList;
    if (oldCardList[oldCardList.length - 1].days) {
      const newCardList = [...oldCardList];
      const newCard = {
        order: oldCardList.length + 1,
        days: null,
        fav: true,
      };

      neworderarr.push(newCard.order);

      newCardList.push(newCard);

      this.setState({ cardList: newCardList });

      this.state.unwrapGrid();
    }
  };

  onInputChange = (event) => {
    if (event.key === "Enter") {
      const beforeInputCardList = this.state.cardList;
      const afterInputCardList = [...beforeInputCardList];
      const length = afterInputCardList.length;
      afterInputCardList[length - 1].days = parseInt(event.target.value);
      this.setState({ cardList: afterInputCardList });
      document
        .getElementById("confirmation-msg")
        .style.setProperty("display", "block");
      setTimeout(function () {
        document
          .getElementById("confirmation-msg")
          .style.setProperty("display", "none");
      }, 3000);
    }
  };

  onBlurChange = (event) => {
   
      const beforeInputCardList = this.state.cardList;
      const afterInputCardList = [...beforeInputCardList];
      const length = afterInputCardList.length;
      afterInputCardList[length - 1].days = parseInt(event.target.value);
      this.setState({ cardList: afterInputCardList });
      document
        .getElementById("confirmation-msg")
        .style.setProperty("display", "block");
      setTimeout(function () {
        document
          .getElementById("confirmation-msg")
          .style.setProperty("display", "none");
      }, 3000);
    
  };

  onDelete = (event) => {
    event.target.parentElement.parentElement.parentElement.parentElement.style.setProperty(
      "display",
      "none"
    );
    event.target.parentElement.parentElement.parentElement.parentElement.style.setProperty(
      "order",
      "null"
    );

    this.state.forceGridFunc();
  };

  renderOrderedCards = () => {
    const test = this.state.cardList.map((card, i) => {
      return (
        <div
          className="card-container"
          id={`cont${i}`}
          ref={`comtainer${i}`}
          style={{ order: neworderarr[i] }}
        >
          <Card
            sendData2={this.getDatafromChild2}
            sendData={this.getDatafromChild}
            ref={`card${i}`}
            onDelete={this.onDelete}
            onInputChange={this.onInputChange}
            onBlurChange={this.onBlurChange}
            card={card}
          />
        </div>
      );
    });

    return test;
  };

  getDatafromChild(val) {
    if (val.order !== neworderarr[neworderarr.length - 1])
      neworderarr.push(val.order);
  }

  getDatafromChild2 = (val) => {
    const cards = this.state.cardList;
    if (val.fav === true) {
      for (let i = 0; i < cards.length - 1; i++)
        document
          .getElementById(`cont${i}`)
          .children[0].children[0].children[1].style.setProperty(
            "display",
            "block"
          );

      for (let j = 0; j < cards.length - 1; j++) {
        document
          .getElementById(`cont${j + 1}`)
          .children[0].children[0].children[1].style.setProperty(
            "display",
            "block"
          );

        document
          .getElementById(`cont${j}`)
          .children[0].style.setProperty(
            "box-shadow",
            "0px 0px 10px rgba(0, 0, 0, 0)"
          );
      }
      document
        .getElementById(`cont${val.order - 1}`)
        .children[0].children[0].children[1].style.setProperty(
          "display",
          "none"
        );

      document
        .getElementById(`cont${val.order - 1}`)
        .children[0].style.setProperty(
          "box-shadow",
          "0px 0px 10px rgba(0, 0, 0, 0.25)"
        );
      document
        .getElementById(`cont${val.order - 1}`)
        .children[0].children[0].children[0].style.setProperty(
          "filter",
          "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg)  contrast(60%)"
        );

      for (let i = 0; i < cards.length; i++) {
        document
          .getElementById(`cont${i}`)
          .children[0].children[0].children[0].style.setProperty(
            "filter",
            "saturate(1352%) hue-rotate(87deg)  contrast(60%)"
          );

        document
          .getElementById(`cont${val.order - 1}`)
          .children[0].style.setProperty(
            "box-shadow",
            "0px 0px 10px rgba(0, 0, 0, 0.25)"
          );

        document
          .getElementById(`cont${val.order - 1}`)
          .children[0].children[0].children[0].style.setProperty(
            "filter",
            "invert(22%) sepia(93%) saturate(1352%) hue-rotate(87deg)  contrast(60%)"
          );
      }
    }
  };

  cardsReorder = () => {
    const cards = this.state.cardList;
    const arrLength = cards.length;
    const cardElements = [];
    const lastCardDays = document.getElementById(`cont${arrLength - 1}`)
      .children[0].children[1].children[0].innerText;
    for (let i = 0; i < arrLength; i++) {
      cardElements.push(document.getElementById(`cont${i}`));
    }

    for (let i = arrLength - 1; i > 0; i--) {
      if (lastCardDays !== null) {
        console.log(lastCardDays);
        console.log(
          document.getElementById(`cont${i}`).children[0].children[1]
            .children[0].innerText
        );
        if (
          parseInt(lastCardDays) <
          parseInt(
            document.getElementById(`cont${i}`).children[0].children[1]
              .children[0].innerText
          )
        ) {
          document
            .getElementById(`cont${arrLength - 1}`)
            .style.setProperty("order", i);

          console.log(document.getElementById(`cont${arrLength - 1}`));
        }
      }
    }
  };

  render() {
    return (
      <div className="planning-container">
        <div className="planning">
          {this.renderOrderedCards()}

          <div style={{ order: 999 }} className="btn-container">
            <PlusSign id="button" onClick={this.addNewCard} />
          </div>
        </div>
        <div id="confirmation-msg" style={{ display: "none" }}>
          Changes were sucessfully updated
        </div>
      </div>
    );
  }
}

export default Planning;
