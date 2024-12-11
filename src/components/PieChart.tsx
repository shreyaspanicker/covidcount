import React from "react";
import Plot from "react-plotly.js";
import { useCovidContext } from "../contexts/CovidContext";

const PieChart: React.FC = () => {
  const { covidData, currentState } = useCovidContext();

  // Find the data for the current state or default to India
  const stateData =
    currentState !== "India"
      ? covidData.India.states.find(each => each.state === currentState)
      : covidData.India;

  // Safely extract values and fallback to 0 if undefined
  const data: Partial<Plotly.PieData>[] = [
    {
      values: [
        stateData?.totalCases[stateData?.totalCases.length - 1] || 0,
        stateData?.activeCases[stateData?.activeCases.length - 1] || 0,
        stateData?.recovered[stateData?.recovered.length - 1] || 0,
        stateData?.deaths[stateData?.deaths.length - 1] || 0,
      ], // Data values
      labels: ["Total Cases", "Active Cases", "Recovered", "Deaths"], // Labels for each slice
      type: "pie", // Explicitly set the type to "pie"
      textinfo: "label+percent", // Display label and percentage
      hoverinfo: "label+percent", // Show label, percentage, and value on hover
      hole: 0.2, // Optional: To create a donut chart
    },
  ];

  const layout: Partial<Plotly.Layout> = {
    title: `${currentState} COVID-19 Statistics`, // Dynamic Chart title
    height: 400, // Chart height
    width: 500, // Chart width
    showlegend: true, // Show legend
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={{
        displayModeBar: false, // Hides the mode bar
        responsive: true, // Enable responsive mode
      }}
      style={{ width: "100%", height: "100%" }} // Adjusts the chart's container
    />
  );
};

export default PieChart;
