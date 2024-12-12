import React from "react";
import Plot from "react-plotly.js";
import { useCovidContext } from "../contexts/CovidContext";
import getStateData from "../utils";

const PieChart: React.FC = () => {
  const { covidData, currentState } = useCovidContext();

  const stateData = getStateData(covidData, currentState);

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
    title: {
      text: `<b>Current Case Percentage in <br>${currentState}<b>`,
      font: {
        family: "Fira Sans",
        size: 15,
        color: "#444",
      },
    },
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
