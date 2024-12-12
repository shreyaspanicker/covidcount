import { useCovidContext } from "../contexts/CovidContext";

function Header() {
  const { covidData, setCurrentState } = useCovidContext();

  const onChange = (value: string) => {
    setCurrentState(value);
  };

  return (
    <div className="sticky top-0 bg-white z-[500] py-5 shadow-lg px-10">
      <header className="flex flex-row text-xl sm:text-3xl">
        <span className="text-[red]">Covid</span>
        <span className="text-black">Count</span>
      </header>
      <div className="mt-5">
        <select
          className="outline-none text-black border-b-2 text-md sm:text-lg cursor-pointer max-w-60"
          id="state-filter"
          onChange={e => onChange(e.target.value)}
        >
          <option value="India">India</option>
          {covidData.India.states.map(state => (
            <option
              className="max-w-40 break-words text-wrap"
              key={state.state}
              value={state.state}
            >
              {state.state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
