import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// --- ADDED: Bootstrap 5 JS Bundle (Required for Dropdowns/Modals/Toggles) ---
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import "./DarkMode.css";
import "./variables.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./AppRoutes";

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
