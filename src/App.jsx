import "./App.css";
import CreateRequest from "./components/pages/CreateRequest/CreateRequest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateRequest" element={<CreateRequest />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
