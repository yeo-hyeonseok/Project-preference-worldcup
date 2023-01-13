import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Making from "./pages/Making";
import Ranking from "./pages/Ranking";
import Worldcup from "./pages/Worldcup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={Home()}></Route>
      <Route path="/making" element={Making()}></Route>
      <Route path="/worldcup" element={Worldcup()}></Route>
      <Route path="/ranking" element={Ranking()}></Route>
    </Routes>
  );
};

export default App;
