import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ toggleMobileSidebar }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  
  // --- 1. ADDED: State for Dark Mode ---
  // We check localStorage first to persist the selection on refresh
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const profileDropdownRef = useRef(null);

  // --- 2. ADDED: Effect to toggle CSS class on the Body ---
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Click outside logic (Existing)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileOpen &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top shadow-sm">
      <button
        className="btn btn-link d-lg-none mr-2 p-0"
        id="sidebarToggle"
        onClick={toggleMobileSidebar}
      >
        <i
          className="bi bi-layout-text-sidebar-reverse"
          style={{ color: "#5b55e6", fontSize: "1.8rem" }}
        ></i>
      </button>

      <a className="navbar-brand" href="#home">
        Activity Hub
      </a>

      <button
        className="navbar-toggler border-0 p-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="mx-auto search-container d-none d-lg-block">
          <div className="input-group search-input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>

        <ul className="navbar-nav ml-auto align-items-lg-center mobile-nav-items">
          <li className="nav-item">
            <a className="nav-link" href="#chat">
              <i className="bi bi-chat-square nav-icon"></i>
              <span className="d-lg-none ml-2">Chat</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#bell">
              <i className="bi bi-bell nav-icon"></i>
              <span className="d-lg-none ml-2">Notifications</span>
            </a>
          </li>

          <li 
            className="nav-item dropdown ml-lg-2 position-relative" 
            ref={profileDropdownRef}
          >
            <div
              className="d-flex align-items-center user-profile"
              onClick={() => setProfileOpen(!profileOpen)}
              aria-expanded={profileOpen}
            >
              <img
                src="https://ui-avatars.com/api/?name=Albus+Dumbledore&background=random"
                className="user-avatar mr-2"
                alt="user"
              />
              <div className="user-info mr-2 d-none d-lg-block">
                <div className="user-name">Albus Dumbldore</div>
                <div className="user-role">Super Admin</div>
              </div>
              <div className="d-lg-none">
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                  Albus D.
                </span>
              </div>
              <i
                className={`bi bi-chevron-down transition-icon ml-auto ml-lg-0 ${
                  profileOpen ? "rotate-180" : ""
                }`}
                style={{ color: "#5b55e6", fontSize: "0.8rem" }}
              ></i>
            </div>

            {profileOpen && (
              <div className="profile-popover-container shadow-sm">
                <div className="popover-arrow"></div>

                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h6 className="popover-user-name mb-0">Albus Dumbldore</h6>
                    <span className="popover-user-role">Super Admin</span>
                  </div>
                  <span className="status-badge active">Active</span>
                </div>

                <div className="mb-3">
                  <label className="info-label">Role:</label>
                  <div className="info-value">Community In charge</div>
                </div>

                <div className="mb-3">
                  <label className="info-label">Department:</label>
                  <div className="info-value department-text">
                    Department name can be written here if applicable to the
                    user
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1 align-items-center">
                    <label className="info-label mb-0">Profile</label>
                    <span className="progress-text">75% Updated</span>
                  </div>
                  <div className="custom-progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="info-label mb-2 d-block">
                    Profile Theme
                  </label>
                  <div className="theme-switch-wrapper">
                    {/* --- 3. UPDATED: Logic to highlight active label --- */}
                    <span className={`theme-label ${!darkMode ? 'active' : ''}`}>Light</span>
                    
                    <label className="theme-switch">
                      {/* --- 4. UPDATED: Connect Input to State --- */}
                      <input 
                        type="checkbox" 
                        checked={darkMode}
                        onChange={() => setProfileOpen(true)} // Keep open when clicking
                        onClick={() => setDarkMode(!darkMode)} // Toggle state
                      />
                      <span className="slider round"></span>
                    </label>
                    
                    <span className={`theme-label ${darkMode ? 'active' : ''}`}>Dark</span>
                  </div>
                </div>

                <div className="popover-footer">
                  <a href="#customise" className="popover-link">
                    Customise Homepage
                  </a>
                  <a href="#settings" className="popover-link">
                    Account Settings
                  </a>
                  <a
                    href="#logout"
                    className="popover-link logout-link d-flex justify-content-between align-items-center"
                  >
                    Logout
                    <i className="bi bi-box-arrow-right logout-icon"></i>
                  </a>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;