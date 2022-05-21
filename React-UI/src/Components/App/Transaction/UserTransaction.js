/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React, { Component } from "react";
// import Bubble from "../Stats/Bubble";
import Bar from "../Stats/Bar";
import Select from "react-select";
import { HomeService } from "../../_Services";
import "./Transaction.css";
import MenuItems from "../Menu/Menu";
import { withTranslation } from "react-i18next";

class UserTransaction extends Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.state = {
      series: [],
      seriesData: [],
      fullstats: [],
      selectedOption: {
        value: 1,

        label: t("Q1"),
        selected: false,
        program: [],
      },
      q: [
        {
          value: 1,

          label: t("Q1"),
          selected: false,
          program: [],
        },
        {
          value: 2,
          label: t("Q2"),
          selected: false,
          program: [],
        },
      ],
    };
  }

  userStats = () => {
    HomeService.userTransactions()
      .then((res) => {
        // console.log(res.data.data);
        var stats = [];

        console.log("testtttttttt");
        this.setState({ fullstats: res.data.data }, function () {
          this.filterTree(1);
        });

        // console.log("jjjjjjjjjjjj");
        // console.log(this.state);
        // this.setState({ fullstats: stats }, function () {
        //   console.log(this.state.fullstats);
        //   this.filterTree(this.state.selectedOption.value);
        // });
      })
      .catch((err) => {});
  };

  filterTree = (id) => {
    // var id = 1;
    var treeData = this.state.fullstats.filter((stat) => {
      return parseInt(id) === parseInt(stat.question);
    });
    var series = [];
    var seriesData = [];

    var inc = 1;
    treeData.forEach(function (value) {
      //  stats.push([value.programName, value.programStats]);
      console.log(value);
      var act = JSON.parse(value.activity);
      console.log(act);
      var millis = parseFloat(act.endTime - act.startTime);
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      var duration = minutes + "." + (seconds < 10 ? "0" : "") + seconds;
      console.log(duration);
      seriesData.push(duration);
      series.push("User-" + inc);

      inc++;
      console.log("hel");

      //stats.push(value);
    });
    this.setState({
      seriesData: seriesData,
      series: series,
    });
  };

  componentDidMount() {
    this.userStats();
  }

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ selectedOption: selectedOption }, function () {
      this.filterTree(selectedOption.value);
    });
    // this.setState({ selectedOption }, () =>
    //  // console.log(`Option selected:`, this.state.selectedOption)
    // );
  };

  render() {
    const { selectedOption, q, series, seriesData } = this.state;
    const { t } = this.props;

    selectedOption.label = t(selectedOption.label);

    q.forEach(function (v) {
      v.label = t(v.label);
    });
    // console.log(JSON.stringify(series));
    return (
      <div class="">
        <MenuItems />
        <div class="row full-width">
          <div className="charts">
            <br />
            <h2 align="center">{t("Sample Visualizations")}</h2>
            <div class="row col-md-4 p-30">
              <label class="q-label">{t("Select Question")}</label>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={q}
              />
            </div>
            <br />
            {/* <Bubble series={series} selectedOption={selectedOption} /> */}

            <Bar
              series={series}
              seriesData={seriesData}
              selectedOption={selectedOption}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(["translation"])(UserTransaction);
