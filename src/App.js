import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./DarkMode.css";
import "./variables.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./AppRoutes"; // Import the new routes file

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () =>
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Navbar and Sidebar manage the Layout Structure */}
        <Navbar toggleMobileSidebar={toggleMobileSidebar} />

        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          closeMobileSidebar={closeMobileSidebar}
        />

        {/* Content Area */}
        <div className="layout-wrapper">
          {/* All routing logic is now handled here */}
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;