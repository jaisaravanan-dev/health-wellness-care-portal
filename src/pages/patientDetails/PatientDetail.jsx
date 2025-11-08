import React, { useState } from "react";

 
const PatientDetails = () => {
  return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 w-24 h-24 flex items-center justify-center rounded-md">
                <span className="text-gray-500 text-sm">150×150</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
              Register
            </h2>
    
            <form onSubmit={handleSubmit}>
              <InputFiled
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                label={"UserName:"}
              />
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
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-all"
              >
                Register
              </button>
            </form>
    
            <p
              className="text-center text-blue-500 text-sm mt-4 cursor-pointer hover:underline"
              onClick={onToggle}
            >
              Already have an account? Login here
            </p>
          </div>
        </div>
  );
};

export default PatientDetails;
