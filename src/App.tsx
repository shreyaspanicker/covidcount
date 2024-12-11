import "./App.css";
import { CovidProvider } from "./contexts/CovidContext";
import Header from "./components/Header";
import ChartsAndMaps from "./components/ChartsAndMaps";

function App() {
  return (
    <div className="App">
      <CovidProvider>
        <Header />
        <ChartsAndMaps />
      </CovidProvider>
    </div>
  );
}

export default App;
