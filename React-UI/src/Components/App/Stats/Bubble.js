import React from "react";
import ReactApexChart from "react-apexcharts";

class Bubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: "treemap",
        },
        title: {
          text: "Distibuted Treemap For Analysis",
          align: "center",
        },
        colors: [
          "#3B93A5",
          "#F7B844",
          "#ADD8C7",
          "#EC3C65",
          "#CDD7B6",
          "#C1F666",
          "#D43F97",
          "#1E5D8C",
          "#421243",
          "#7F94B0",
          "#EF6537",
          "#C0ADDB",
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false,
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      // console.log(prevProps, currentProps);
      this.setState({ series: this.props.data });
    }
  }

  componentDidMount() {
    //if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
    // console.log(prevProps, currentProps);
    this.setState({ series: this.props.data });

    // }
  }

  render() {
    var { options, series } = this.state;

    console.log(options);
    console.log(series);
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="treemap"
          height={350}
        />
      </div>
    );
  }
}

export default Bubble;
