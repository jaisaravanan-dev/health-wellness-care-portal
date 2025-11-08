import React from "react";
import Sidebar from "../component/sideBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 h-screen overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Dashboard 🎉</h2>
        <p className="text-gray-600">Here’s your main content area.</p>
      </div>
    </div>
  );
};

export default Dashboard;
