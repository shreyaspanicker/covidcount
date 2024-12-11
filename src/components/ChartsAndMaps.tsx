import CovidMap from "./CovidMap";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useState, useEffect } from "react";

function ChartsAndMaps() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <LineChart></LineChart>
        <PieChart></PieChart>
      </div>
    </>
  );
}

export default ChartsAndMaps;
