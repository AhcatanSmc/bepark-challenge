import React from "react";
import "./card.scss";
import { ReactComponent as LessSign } from "./lessign.svg";
import { ReactComponent as WhiteStar } from "./whitestar.svg";
//import { ReactComponent as GreenStar } from "./greenstar.svg";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.card.order,
      fav: this.props.card.fav,
    };
  }

  componentDidMount() {
    this.callBackMethod();
  }

  componentDidUpdate() {
    this.callBackMethod2();
  }
  callBackMethod() {
    this.props.sendData(this.state);
  }

  callBackMethod2() {
    this.props.sendData2(this.state);
  }

  setFav = () => {
    document
      .getElementById("confirmation-msg")
      .style.setProperty("display", "block");
    setTimeout(function () {
      document
        .getElementById("confirmation-msg")
        .style.setProperty("display", "none");
    }, 3000);
    document
      .getElementById(`cont${4}`)
      .children[0].style.setProperty(
        "box-shadow",
        "0px 0px 10px rgba(0, 0, 0, 0)"
      );

    this.setState({ fav: true });
  };
  render() {
    return (
      <div className="card">
        <div className="options">
          <WhiteStar onClick={this.setFav} className="option-box" />

          {
            <LessSign
              id="delete"
              onClick={this.props.onDelete}
              className="option-box"
            />
          }
        </div>

        <div className="days">
          {this.props.card.days ? null : (
            <input
              type="number"
              placeholder="10"
              className="no-outline"
              onKeyDown={this.props.onInputChange}
              onBlur={this.props.onBlurChange}
            ></input>
          )}
          <h1 className="daycount">{this.props.card.days}</h1>
          {this.props.card.days > 1 ? <h4>days</h4> : <h4>day</h4>}
        </div>
      </div>
    );
  }
}

export default Card;
