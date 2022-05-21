/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";
import i18n from "../../../i18n";
import { withTranslation } from "react-i18next";
import { loadLanguages } from "i18next";
import "./Question.css";

const options = {
  items: 2, //Number of questions
  // nav: true,
  // rewind: true,
  autoplay: false,
};

const events = {};

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.countPlaces = 0;
    this.defaultBetValue = 10;
    const { t } = this.props;
    this.state = {
      button: false,
      activeQ: 1,
      q: [
        {
          id: 1,

          label: "Q1",
          selected: false,
          program: [],
        },
        {
          id: 2,
          label: "Q2",
          selected: false,
          program: [],
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeQ !== this.props.activeQ) {
      this.setState({ activeQ: this.props.activeQ });
    }
  }
  showButton = () => {
    this.setState({ button: true }, function () {
      this.props.showMachine();
    });
  };

  render() {
    const { q, button, activeQ } = this.state;

    const { t } = this.props;

    return (
      <>
        <div className="container">
          <h2>{t("select_cloth_type")}</h2>
          <ul className="question">
            {q.map((item, ind) => (
              <li
                key={ind}
                className={activeQ === item.id ? "active" : "styleNone hide"}
              >
                <label htmlFor={item.label}>{t(item.label)}</label>
              </li>
            ))}

            {/* <li className={`styleNone ${!button ? "hide" : ""}`}>
              {button}
              <button className="go" type="button">
                Run Washing Machine
              </button>
            </li> */}
          </ul>
        </div>
      </>
    );
  }
}

export default withTranslation(["translation"])(Question);
