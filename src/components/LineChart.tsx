import Plot from "react-plotly.js";
import { useCovidContext } from "../contexts/CovidContext";
import React from "react";

function LineChart() {
  console.log("Line chart rendered");
  const { covidData, currentState } = useCovidContext();
  const stateData =
    currentState !== "India"
      ? covidData.India.states.find(each => each.state === currentState)
      : covidData.India;

  return (
    <>
      {stateData && (
        <Plot
          className="w-full"
          data={[
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"],
              y: [...stateData?.totalCases],
              type: "scatter",
              mode: "lines+markers",
              name: "Total Cases",
              line: { color: "blue" },
            },
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"],
              y: [...stateData?.activeCases],
              type: "scatter",
              mode: "lines+markers",
              name: "Active Cases",
              line: { color: "red" },
            },
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"],
              y: [...stateData?.recovered],
              type: "scatter",
              mode: "lines+markers",
              name: "Recovered Cases",
              line: { color: "green" },
            },
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"],
              y: [...stateData?.deaths],
              type: "scatter",
              mode: "lines+markers",
              name: "Death Cases",
              line: { color: "black" },
            },
          ]}
          layout={{
            title: `Case Progression of ${currentState}`,
            xaxis: {
              title: "Year",
            },
            yaxis: { title: "Number of Cases" },
            legend: {
              x: 0.5,
              y: -0.3,
              xanchor: "center",
              yanchor: "top",
              orientation: "h",
            },
            dragmode: false,
            height: 500,
            font: {
              family: "Fira Sans",
              size: 12,
              color: "#444",
            },
          }}
          config={{
            displayModeBar: false,
            responsive: true,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </>
  );
}

export default React.memo(LineChart);
