import React from "react";
import { Link } from "react-router-dom";

import { withTranslation } from "react-i18next";

function Menu(props) {
  const { t } = props;
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto nav justify-content-end">
            <li class="nav-item active">
              <Link className="nav-link active" to="/">
                {t("Home")}
                <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link className="nav-link active" to="/transactions">
                {t("Visualization-Treemap")}
              </Link>
            </li>
            <li class="nav-item ">
              <Link className="nav-link active" to="/userTransactions">
                {t("Visulaization-Bar graph")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withTranslation(["translation"])(Menu);
