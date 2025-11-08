import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Register from "./pages/register/Register";
import PatientDetails from "./pages/patientDetails/PatientDetail";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (

      <Routes>
        
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
 
  );
}

export default App;
