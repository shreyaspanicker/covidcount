import React from "react";
import { MapContainer, ImageOverlay, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCovidContext } from "../contexts/CovidContext";
import { LatLngBoundsExpression } from "leaflet";
import IndiaMap from "../assets/India.png";

const bounds: LatLngBoundsExpression = [
  [6.1, 68], // Southwest corner of India
  [37.2, 97.5], // Northeast corner of India
];

const MapComponent: React.FC = () => {
  const { covidData } = useCovidContext();

  return (
    <MapContainer
      bounds={bounds}
      style={{ width: "100%", height: "100%", zIndex: 1 }}
      zoom={5}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
    >
      <ImageOverlay url={IndiaMap} bounds={bounds} />
      {covidData.India.states.map((state, index) => (
        <Circle
          key={index}
          center={[state.latitude, state.longitude]}
          radius={state.activeCases[state.activeCases.length - 1] * 3}
          fillOpacity={0.5}
          color="red"
        >
          <Popup>
            <strong>{state.state}</strong>
            <br />
            Total Cases: {state.totalCases[state.totalCases.length - 1]}
            <br />
            Active Cases: {state.activeCases[state.activeCases.length - 1]}
            <br />
            Recovered: {state.recovered[state.recovered.length - 1]}
            <br />
            Deaths: {state.deaths[state.deaths.length - 1]}
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
