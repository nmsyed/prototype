/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
// import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stats.css";

const colors = {
  Extras: "blue",
  Speed: "red",
  Program: "yellow",
  Temp: "pink",
};
export function Stats(props) {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(0);
  const { t } = props;
  const [options, setOptions] = useState({
    backgroundColor: "#aaaaaa",
    title: "Program wise Stats",
    titleTextStyle: { color: "red" },
    is3D: true,
    chartArea: {
      left: "3%",
      top: "3%",
      height: "65%",
      width: "65%",
    },
    fontSize: 16,
    bold: true,
    legend: {
      position: "right",
      textStyle: { color: "white", fontSize: 16, bold: true },
    },
  });

  useEffect(() => {
    // Update the document title using the browser API
    let total = 0;
    console.log(props.stats);
    let data = [...props.stats];
    let Max = 0;
    for (let i = 0; i < data.length; i++) {
      total += parseInt(data[i][1]);
      data[i][2] = data[i][1];
      if (Max < parseInt(data[i][1])) Max = parseInt(data[i][1]);
    }

    setMax(Max);

    console.log(max);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i][1]);
      data[i][1] = Math.round((data[i][1] / total) * 100);
    }

    setData(data);

    setOptions({
      titleTextStyle: { color: "#FFFFFF", italic: true, fontSize: 24 },
      backgroundColor: "#aaaaaa",

      lable: props.temparature
        ? "Temp"
        : props.speed
        ? "Speed"
        : props.extras
        ? "Extras"
        : "Program",
      title: props.temparature
        ? "Temparature"
        : props.speed
        ? "Speed"
        : props.extras
        ? "Extras"
        : "Programme",
    });
  }, [props.stats]);

  return (
    <>
      <div>
        <h2 className="statsTitle">{t(options.title)}</h2>
      </div>
      <div className="card-columns text-white">
        {data.length > 0 &&
          data.map((card, index) => {
            return (
              <div
                className={`card mt-1 mb-1 ${
                  max === card[2] ? colors[options.lable] : "brown"
                }`}
              >
                <div className="card-body">
                  <h5 className="card-title">{t(card[0])}</h5>
                  <p className="percnetage">{card[1]}%</p>
                </div>
              </div>
            );
          })}
        {data.length == 0 ? (
          <div className="card mt-1 mb-1 yellow nodata">No Data Available.</div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default withTranslation(["translation"])(Stats);
