import logo from "./logo.svg";
import "./App.css";
import AmsFooter from "./Components/AmsFooter";
import AmsHeader from "./Components/AmsHeader";
import CostForm from "./Components/CostForm";
import CommisionCalculator from "./Components/CommisionCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex-col">
      <div className="">
        <AmsHeader />
      </div>
      <div className="mt-2">
        <Router>
          <Routes>
            <Route exact path="/" element={<CostForm />} />
            <Route
              exact
              path="/commisionCalculator"
              element={<CommisionCalculator />}
            />
          </Routes>
        </Router>
      </div>
      <div>
        <AmsFooter />
      </div>
    </div>
  );
}

export default App;
