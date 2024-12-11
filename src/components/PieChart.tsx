import React from "react";
import Plot from "react-plotly.js";
import { useCovidContext } from "../contexts/CovidContext";

const PieChart: React.FC = () => {
  console.log("Pie chart rendered");
  const { covidData, currentState } = useCovidContext();

  const stateData =
    currentState !== "India"
      ? covidData.India.states.find(each => each.state === currentState)
      : covidData.India;

  const data: Partial<Plotly.PieData>[] = [
    {
      values: [
        stateData?.totalCases[stateData?.totalCases.length - 1] || 0,
        stateData?.activeCases[stateData?.activeCases.length - 1] || 0,
        stateData?.recovered[stateData?.recovered.length - 1] || 0,
        stateData?.deaths[stateData?.deaths.length - 1] || 0,
      ],
      labels: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
      type: "pie",
      textinfo: "label+percent",
      hoverinfo: "label+percent",
      hole: 0.2,
    },
  ];

  const layout: Partial<Plotly.Layout> = {
    title: `Current Case Percentage of ${currentState}`,
    height: 500,
    showlegend: true,
    legend: {
      x: 0.5,
      y: -0.3,
      xanchor: "center",
      yanchor: "top",
      orientation: "h",
    },
    font: {
      family: "Fira Sans",
      size: 12,
      color: "#444",
    },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default React.memo(PieChart);
