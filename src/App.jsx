import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Register from "./pages/register/Register";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (

      <Routes>
        
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
 
  );
}

export default App;
