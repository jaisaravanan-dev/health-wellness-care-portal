import React, { useState } from "react";


import Login from "./login/Login";
import Register from './register/Register'
 
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {isLogin ? (
        <Login onToggle={() => setIsLogin(false)} />
        // <Login onToggle={() => setIsLogin(false)} />
      ) : (
        <Register onToggle={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default AuthPage;
