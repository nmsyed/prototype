/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

import i18n from '../../../i18n';

import { withTranslation } from 'react-i18next';

import "./Question.css";

const options = {
  items: 2,
  // nav: true,
  // rewind: true,
  autoplay: false,
};

const events = {};
 

class Settings extends React.Component {
  constructor(props) {
    super(props);
     
   
    this.state = {
      button: false,
      q: [
        {
          label:
            "You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",
          selected: false,
          program: [],
        },
        {
          label:
            "You have 2 pairs of cotton clothes. What options would you prefer to wash the clothes?",
          selected: false,
          program: [],
        },
      ],
    };
  }
 

  showButton = () => {
    this.setState({ button: true }, function () {
      this.props.showMachine();
    //  i18n.changeLanguage("es")
    });
  };

  render() {
    const { q, button } = this.state;

    const { t } = this.props;
    
    return (
      <>
        {/* <div class="alert">
  <h2>Hey! Read Me...</h2>
  <p>Washing Machine.</p>
</div> */}
 
        <div className="container">
          <h2>{t("select_cloth_type")}</h2>

          <ul className="question">
            {q.map((item, ind) => (
              <li key={ind}>
                <input
                  type="radio"
                  id={item.label}
                  name="selector"
                  onChange={this.showButton}
                />
                <label htmlFor={item.label}>{item.label}</label>

                <div className="check"></div>
              </li>
            ))}

            <li className={`styleNone ${!button ? "hide" : ""}`}>
              {button}
              <button className="go" type="button">
                Run Washing Machine
              </button>
            </li>
          </ul>
        </div>
        
      </>
    );
  }
}

export default withTranslation(['translation'])(Settings);
