import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputFiled from "../../component/InputFiled/InputFiled";

const Login = ({ onToggle }) => {

  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-200 w-24 h-24 flex items-center justify-center rounded-md">
          <span className="text-gray-500 text-sm">150×150</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit}>
        <InputFiled
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          label={"Email:"}
        />
        <InputFiled
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          label={"Password:"}
        />

        <button
          type="submit"
          onClick={()=>{localStorage.setItem("token", "validToken");navigate("/dashboard")}}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-all"
        >
          Login
        </button>
      </form>

      <p className="text-center text-blue-500 text-sm mt-4 cursor-pointer hover:underline">
        Forgot Password?
      </p>

      <p
        className="text-center text-blue-500 text-sm mt-2 cursor-pointer hover:underline"
        onClick={()=>
          navigate("/signup")
        }
      >
        New User? Register here
      </p>
    </div>
  );
};

export default Login;
