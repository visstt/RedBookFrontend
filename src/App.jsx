import "./App.css";
import CreateRequest from "./components/pages/CreateRequest/CreateRequest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateRequest" element={<CreateRequest />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
