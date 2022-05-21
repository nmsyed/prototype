import React from "react";
import ReactApexChart from "react-apexcharts";
import { withTranslation } from "react-i18next";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Transaction Time",
          data: [],
        },
      ],
      options: {
        annotations: {
          points: [
            {
              x: "Bananas",
              seriesIndex: 0,
              label: {
                borderColor: "#775DD0",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#775DD0",
                },
                text: "",
              },
            },
          ],
        },
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: "10%",
          },
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
          },
        },
        stroke: {
          width: 2,
        },

        grid: {
          row: {
            colors: ["#fff", "#fff", "#fff", "#fff", "#fff"],
          },
        },
        xaxis: {
          style: {
            color: "#FFFFFF",
            fontSize: "14px",
            show: true,
          },
          labels: {
            rotate: -45,
          },
          color: "red",
          categories: [],
          // tickPlacement: "on",
        },
        yaxis: {
          style: {
            color: "#FFFFFF",
            fontSize: "14px",
            show: true,
          },
          title: {
            text: "Tranasction Time",
            color: "#FFFFFF",
          },
        },
        fill: {
          // type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            // stops: [50, 0, 100],
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.seriesData) !==
      JSON.stringify(this.props.seriesData)
    ) {
      // console.log(prevProps, currentProps);
      this.setState({ series: [{ data: this.props.seriesData }] });
    }

    if (
      JSON.stringify(prevProps.series) !== JSON.stringify(this.props.series)
    ) {
      // console.log(prevProps, currentProps);
      this.setState({
        options: {
          xaxis: {
            categories: this.props.series,
          },
        },
      });
    }
  }

  componentDidMount() {
    // this.setState({ series: this.props.series });

    this.setState({ series: [{ data: this.props.seriesData }] });
    this.setState({
      options: {
        xaxis: {
          categories: this.props.series,
        },
      },
    });
  }

  render() {
    var { options, series } = this.state;

    var { t } = this.props;

    series[0].name = t("Transaction Time");

    console.log(options);
    console.log(series);
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
          width={1000}
        />
      </div>
    );
  }
}

export default withTranslation(["translation"])(Bar);
