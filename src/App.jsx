import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/register/Register";
import PatientDetails from "./pages/patientDetails/PatientDetail";
// import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

function App() {
  return (

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/homePage" element={<HomePage />} />
        
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
 
  );
}

export default App;
