/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React, { Component } from "react";
import Bubble from "../Stats/Bubble";
import Bar from "../Stats/Bar";
import Select from "react-select";
import { HomeService } from "../../_Services";
import "./Transaction.css";
import MenuItems from "../Menu/Menu";

class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      fullstats: {},
      selectedOption: {
        value: 1,

        label:
          "You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",
        selected: false,
        program: [],
      },
      q: [
        {
          value: 1,

          label:
            "You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",
          selected: false,
          program: [],
        },
        {
          value: 2,
          label:
            "You have 2 pairs of cotton clothes. What options would you prefer to wash the clothes?",
          selected: false,
          program: [],
        },
      ],
    };
  }

  userStats = () => {
    HomeService.userStats()
      .then((res) => {
        // console.log(res.data.data);
        var stats = [];
        res.data.data.forEach(function (value) {
          //  stats.push([value.programName, value.programStats]);
          stats.push(value);
        });

        this.setState({ fullstats: stats }, function () {
          console.log(this.state.fullstats);
          this.filterTree(this.state.selectedOption.value);
        });
      })
      .catch((err) => {});
  };

  filterTree = (id) => {
    // var id = 1;
    var treeData = this.state.fullstats.filter((stat) => {
      return parseInt(id) === parseInt(stat.question);
    });
    var data = [];
    var dataStats = [];
    console.log(treeData);

    const prgms = {};
    const speed = {};
    const temp = {};
    const extra = {};
    var prgmTotal = 0;
    var speedTotal = 0;
    var tempTotal = 0;
    var extraTotal = 0;

    for (let i of treeData) {
      for (const key in i) {
        if (
          key != "pid" &&
          key != "question" &&
          key != "totalStats" &&
          i[key] != "NONE"
        ) {
          console.log(i[key]);
          if (key == "programName") {
            prgms[i[key]] =
              prgms[i[key]] == undefined
                ? i["totalStats"]
                : (prgms[i[key]] += i["totalStats"]);
            prgmTotal += parseInt(i["totalStats"]);
          }

          if (key == "speed") {
            speed[i[key]] =
              speed[i[key]] == undefined
                ? i["totalStats"]
                : (speed[i[key]] += i["totalStats"]);
            speedTotal += parseInt(i["totalStats"]);
          }

          if (key == "temp") {
            temp[i[key]] =
              temp[i[key]] == undefined
                ? i["totalStats"]
                : (temp[i[key]] += i["totalStats"]);
            tempTotal += parseInt(i["totalStats"]);
          }
          if (key == "extraWash") {
            extra[i[key]] =
              extra[i[key]] == undefined
                ? i["totalStats"]
                : (extra[i[key]] += i["totalStats"]);
            extraTotal += parseInt(i["totalStats"]);
          }
        }
      }
    }

    var pgmsArr = [];
    for (let [key, value] of Object.entries(prgms)) {
      value = Math.round((value / prgmTotal) * 100);
      pgmsArr.push({
        x: key,
        y: value,
      });
    }
    var speedArr = [];
    for (let [key, value] of Object.entries(speed)) {
      value = Math.round((value / speedTotal) * 100);
      speedArr.push({
        x: key,
        y: value,
      });
    }
    var tempArr = [];
    for (let [key, value] of Object.entries(temp)) {
      value = Math.round((value / tempTotal) * 100);
      tempArr.push({
        x: key,
        y: value,
      });
    }
    var extraArr = [];
    for (let [key, value] of Object.entries(extra)) {
      value = Math.round((value / extraTotal) * 100);
      extraArr.push({
        x: key,
        y: value,
      });
    }
    // console.log(prgms, speed, temp, extra);
    const series = [];
    if (pgmsArr.length > 0) {
      series.push({
        name: "Programme",
        data: pgmsArr,
      });
    }
    if (speedArr.length > 0) {
      series.push({
        name: "Speed",
        data: speedArr,
      });
    }
    if (speedArr.length > 0) {
      series.push({
        name: "Speed",
        data: speedArr,
      });
    }
    if (tempArr.length > 0) {
      series.push({
        name: "Temperature",
        data: tempArr,
      });
    }
    if (tempArr.length > 0) {
      series.push({
        name: "Extra Wash",
        data: tempArr,
      });
    }

    this.setState({ series: series });
    // for (let i of treeData) {
    //   // console.log(i);

    //   for (const key in i) {
    //     if (
    //       key != "pid" &&
    //       key != "question" &&
    //       key != "totalStats" &&
    //       i[key] != "NONE"
    //     ) {
    //       var txt = key + " - " + i[key];

    //       if (data[txt] == undefined) data[txt] = 0;
    //       data[txt] = parseInt(data[txt]) + parseInt(i["totalStats"]);
    //     }
    //   }
    //   // console.log(data);

    //   // for (let [index, value] of i) {
    //   //   console.log(index, value);
    //   // }
    // }

    // for (const key in data) {
    //   // var txt = key + ":" + data[key];

    //   dataStats.push({
    //     x: key,
    //     y: data[key],
    //   });
    //   //console.log(`${key}: ${i[key]}`);
    // }
    // console.log(dataStats);
    // this.setState({ data: dataStats });
    // console.log(data);
    //  console.log(treeData);
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
    const { selectedOption, q, series } = this.state;

    // console.log(JSON.stringify(series));
    return (
      <div class="container-fluid">
        <MenuItems />
        <div class="row full-width">
          <div className="charts">
            <h2 align="center">Sample Visualizations</h2>
            <div class="row col-md-4 p-30">
              <label class="q-label">Choose Question</label>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={q}
              />
            </div>
            <br />
            <Bubble data={series} selectedOption={selectedOption} />

            {/* <Bar series={series} selectedOption={selectedOption} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;
