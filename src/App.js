import logo from "./logo.svg";
import "./App.css";
import LaborCoulmn from "./Components/LaborColumn";
import AmsFooter from "./Components/AmsFooter";
import AmsHeader from "./Components/AmsHeader";

function App() {
  return (
    <div className="bg-red-50">
      <div className="">
        <AmsHeader />
      </div>

      <div className="">
        <LaborCoulmn />
      </div>
      <div> 
        <AmsFooter />
      </div>
    </div>
  );
}

export default App;
