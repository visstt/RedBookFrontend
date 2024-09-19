import "./App.css";
import CreateRequest from "./components/pages/CreateRequest/CreateRequest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import Login from "./components/pages/Login/Login";
import Applications from "./components/pages/Applications/Applications";
import Area1 from "./components/pages/Area1/Area1";
import Area2 from "./components/pages/Area2/Area2";
import Area3 from "./components/pages/Area3/Area3";
import Area4 from "./components/pages/Area4/Area4";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateRequest" element={<CreateRequest />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Applications" element={<Applications />} />

          <Route path="/Area1" element={<Area1 />} />
          <Route path="/Area2" element={<Area2 />} />
          <Route path="/Area3" element={<Area3 />} />
          <Route path="/Area4" element={<Area4 />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
