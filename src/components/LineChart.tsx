import Plot from "react-plotly.js";
import { useCovidContext } from "../contexts/CovidContext";

function LineChart() {
  const { covidData, currentState } = useCovidContext();
  const stateData =
    currentState !== "India"
      ? covidData.India.states.find(each => each.state === currentState)
      : covidData.India;

  console.log(stateData);
  return (
    <div>
      {stateData && (
        <Plot
          className="w-full"
          data={[
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"], // X-axis labels
              y: [...stateData?.totalCases], // Y-axis values
              type: "scatter",
              mode: "lines+markers",
              name: "Total Cases",
              line: { color: "blue" },
            },
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"], // X-axis labels
              y: [...stateData?.activeCases], // Y-axis values
              type: "scatter",
              mode: "lines+markers",
              name: "Active Cases",
              line: { color: "red" },
            },
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"], // X-axis labels
              y: [...stateData?.recovered], // Y-axis values
              type: "scatter",
              mode: "lines+markers",
              name: "Recovered Cases",
              line: { color: "green" },
            },
            {
              x: ["2019", "2020", "2021", "2022", "2023", "2024"], // X-axis labels
              y: [...stateData?.deaths], // Y-axis values
              type: "scatter",
              mode: "lines+markers",
              name: "Death Cases",
              line: { color: "black" },
            },
          ]}
          layout={{
            title: `COVID-19 Statistics for ${currentState}`,
            xaxis: { title: "Year" },
            yaxis: { title: "Number of Cases" },
            legend: {
              x: 0.5, // Horizontal position (0: left, 1: right, 0.5: center)
              y: -0.3, // Vertical position (1: top, 0: bottom, -0.2: below chart)
              xanchor: "center", // Horizontal alignment of legend box
              yanchor: "top", // Vertical alignment of legend box
              orientation: "h", // "h" for horizontal, "v" for vertical
            },
            dragmode: false,
          }}
          config={{
            displayModeBar: false, // Hides the mode bar
            responsive: true, // Enable responsive mode
          }}
          style={{ width: "100%", height: "100%" }} // Adjusts the chart's container
        />
      )}
    </div>
  );
}

export default LineChart;
