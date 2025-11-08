import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/register/Register";
import PatientDetails from "./pages/patientDetails/PatientDetail";
// import Dashboard from "./pages/Dashboard";

export function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // or context, redux, etc.
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, but keep track of where user was
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
 
  );
}

export default App;
