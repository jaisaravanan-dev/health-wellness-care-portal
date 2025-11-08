import React, { useState } from "react";
import { Menu, X, Home, User, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard",  path: "/dashboard" },
    { name: "My Profile", path: "/profile" },
    { name: "Wellness Goals", path: "/settings" },
    { name: "Messages", path: "/settings" },
    { name: "Logout", path: "/Login" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-16"
        } bg-gray-800 text-white h-screen p-4 transition-all duration-300 flex flex-col justify-between`}
      >
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1
              className={`text-xl font-bold transition-all duration-300 ${
                !open && "hidden"
              }`}
            >
              Health
            </h1>
            <button onClick={() => setOpen(!open)} className="text-gray-400 hover:text-white">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded-md transition"
              >
                {item.icon}
                {open && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded-md transition"
        >
          <LogOut size={20} />
          {open && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
