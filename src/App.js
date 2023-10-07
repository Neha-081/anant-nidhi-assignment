import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage";
import PersonalDetails from "./pages/PersonalDetails";
import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/status" element={<StatusPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
