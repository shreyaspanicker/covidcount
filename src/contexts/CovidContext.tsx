import React, { createContext, useContext, useState } from "react";
import data from "../data";

interface StateData {
  state: string;
  totalCases: number[];
  activeCases: number[];
  recovered: number[];
  deaths: number[];
  latitude: number;
  longitude: number;
}

interface CovidData {
  India: {
    totalCases: number[];
    activeCases: number[];
    recovered: number[];
    deaths: number[];
    states: StateData[];
  };
}

interface CovidContextType {
  covidData: CovidData;
  currentState: string;
  setCurrentState: (state: string) => void;
}

const CovidContext = createContext<CovidContextType | undefined>(undefined);

export const useCovidContext = (): CovidContextType => {
  const context = useContext(CovidContext);
  if (!context) {
    throw new Error("useCovidContext must be used within a CovidProvider");
  }
  return context;
};

export const CovidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [covidData] = useState<CovidData>(data);

  const [currentState, setCurrentState] = useState<string>("India");

  return (
    <CovidContext.Provider value={{ covidData, currentState, setCurrentState }}>
      {children}
    </CovidContext.Provider>
  );
};
