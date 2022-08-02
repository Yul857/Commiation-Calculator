import logo from "./logo.svg";
import "./App.css";
import LaborCoulmn from "./Components/LaborColumn";
import AmsFooter from "./Components/AmsFooter";
import AmsHeader from "./Components/AmsHeader";
import CostForm from "./Components/CostForm";

function App() {
  return (
    <div className="">
      <div className="">
        <AmsHeader />
      </div>

      <div className="">
        <CostForm />
      </div>
      <div> 
        <AmsFooter />
      </div>
    </div>
  );
}

export default App;
