// style sheet used for the whole project
import "./App.css";
// react router dom imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing components
import GameWrapper from "./components/GameWrapper";
import GoodbyePage from "./components/GoodbyePage";

/*The App component simply returns routes to for the app placed 
inside react router dom BrowserRouter,Routes and Route*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameWrapper />} />
        <Route path="/goodbye" element={<GoodbyePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
