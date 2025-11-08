import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  
  const healthArticles = [
    {
      title: "COVID-19 Updates",
      description:
        "Stay informed about the latest COVID-19 guidelines and vaccination information.",
    },
    {
      title: "Seasonal Flu Prevention",
      description:
        "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.",
    },
    {
      title: "Mental Health Awareness",
      description:
        "Explore resources and support options for maintaining good mental health.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-2">Healthcare Portal</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Health Topics
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Latest Health Information
        </h2>

        <div className="space-y-6">
          {healthArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>navigate("/dashboard")}>
                Read More
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
