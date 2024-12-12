import { useCovidContext } from "../contexts/CovidContext";
import CovidMap from "./CovidMap";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useState, useEffect } from "react";

function ChartsAndMaps() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { currentState } = useCovidContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const classes =
    currentState !== "India" ? "flex justify-center items-center lg:h-[calc(100vh-123px)]" : "";

  return (
    <div className={classes}>
      {currentState === "India" && (
        <div className="flex flex-row justify-start h-auto">
          {isMobile && (
            <div className="w-full h-[400px]">
              <CovidMap></CovidMap>
            </div>
          )}
          {!isMobile && (
            <div className="w-full h-screen">
              <CovidMap></CovidMap>
            </div>
          )}
        </div>
      )}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <LineChart></LineChart>
        <PieChart></PieChart>
      </div>
    </div>
  );
}

export default ChartsAndMaps;
