import React, { useState } from "react";
import Sidebar from "../components/ui/Sidebar";

const DashboardPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-[#F0F2EE]">
      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-50 z-30"
          onClick={closeSidebar}
        >
        </div>
      )}

      {/* Three vertical lines button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 rounded-full transition-colors duration-200 ${
          sidebarOpen ? 'bg-transparent' : 'hover:bg-gray-200'
        }`}
      >
        <div className="flex flex-col space-y-1">
          <div className={`w-4 h-0.5 transition-colors duration-200 ${
            sidebarOpen ? 'bg-white' : 'bg-gray-600'
          }`}></div>
          <div className={`w-4 h-0.5 transition-colors duration-200 ${
            sidebarOpen ? 'bg-white' : 'bg-gray-600'
          }`}></div>
          <div className={`w-4 h-0.5 transition-colors duration-200 ${
            sidebarOpen ? 'bg-white' : 'bg-gray-600'
          }`}></div>
        </div>
      </button>

      {/* Sidebar Component */}
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        onCloseSidebar={closeSidebar}
        onLogout={onLogout} // Make sure this is passed correctly
      />

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="pt-4">
          <h1 className="text-3xl font-bold text-[#285C2F] mb-6">Welcome, SK Officer!</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-5 border-t-4 border-[#35723E]">
              <h2 className="text-lg font-semibold text-[#285C2F] mb-2">Ongoing Projects</h2>
              <p className="text-gray-600">Track the progress of current youth programs.</p>
            </div>

            <div className="bg-white shadow rounded-lg p-5 border-t-4 border-[#35723E]">
              <h2 className="text-lg font-semibold text-[#285C2F] mb-2">Budget Overview</h2>
              <p className="text-gray-600">View fund allocations and expenditures.</p>
            </div>

            <div className="bg-white shadow rounded-lg p-5 border-t-4 border-[#35723E]">
              <h2 className="text-lg font-semibold text-[#285C2F] mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Stay updated with planned community activities.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
