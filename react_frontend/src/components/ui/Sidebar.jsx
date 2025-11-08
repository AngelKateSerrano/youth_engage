import React from "react";

const Sidebar = ({ sidebarOpen, onCloseSidebar, onLogout }) => {
  const navItems = [
    { label: 'Dashboard', href: '#', icon: '🏠' },
    { label: 'Projects', href: '#', icon: '📋' },
    { label: 'Reports', href: '#', icon: '📄' },
    { label: 'SK Officials', href: '#', icon: '👥' },
    { label: 'Settings', href: '#', icon: '⚙️' }
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      alert("You successfully logout");
      onLogout(); // This will navigate to login page
    }
  };

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-40
        w-64 bg-[#285C2F] text-white flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      {/* Sidebar Header */}
      <div className="px-6 py-4 text-2xl font-bold border-b border-[#2E7034]">
        SK Platform
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#35723E] transition-colors"
            onClick={onCloseSidebar}
          >
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Logout Button */}
      <button 
        className="flex items-center gap-3 px-6 py-3 text-sm border-t border-[#2E7034] hover:bg-[#1F4B26] transition-colors"
        onClick={handleLogout}
      >
        <span>🚪</span>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
