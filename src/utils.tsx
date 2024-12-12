import { StateData } from "./contexts/CovidContext";
import { CovidData } from "./contexts/CovidContext";

function getStateData(data: CovidData, currentState: string) {
  return currentState !== "India"
    ? data.India.states.find((each: StateData) => each.state === currentState)
    : data.India;
}

export default getStateData;
