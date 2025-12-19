import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isMobileOpen, closeMobileSidebar }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Close sidebar on click outside (Mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeMobileSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen, closeMobileSidebar]);

  // --- Helper Functions ---

  // 1. Check if a specific child link is active
  const isActive = (path) => (location.pathname === path ? "active" : "");

  // 2. Check if a PARENT should be blue (Active)
  const isParentActive = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path))
      ? "active-parent"
      : "";
  };

  // 3. Check if a PARENT should be open (Bootstrap 'show')
  const isShow = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path))
      ? "show"
      : "";
  };

  return (
    <div
      className={`sidebar shadow-20-light ${isMobileOpen ? "show" : ""}`}
      id="sidebar"
      ref={sidebarRef}
    >
      {/* Select Organisation */}
      <div className="dropdown mb-3">
        <button
          className="btn org-dropdown-btn"
          type="button"
          data-bs-toggle="dropdown"
        >
          <span>
            <i className="bi bi-cursor-fill sidebar-icon"></i> Select Org
          </span>
          <i className="bi bi-chevron-down"></i>
        </button>
        <div className="dropdown-menu w-100 shadow border-0">
          <Link className="dropdown-item" to="/org-a">
            Org 1
          </Link>
        </div>
      </div>

      {/* Dashboard Link */}
      <Link to="/" className={`sidebar-link ${isActive("/")}`}>
        <i className="bi bi-speedometer2 sidebar-icon"></i> Dashboard
      </Link>

      {/* Accordion Wrapper */}
      <div id="sidebarAccordion">
        {/* 1. ORGANIZATION Section */}
        <div className="card bg-transparent border-0">
          <button
            className={`btn sidebar-accordion-btn ${isParentActive([
              "/organizations",
            ])}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOrg"
            aria-expanded={isShow(["/organizations"]) === "show"}
          >
            <span>
              <i className="bi bi-building sidebar-icon"></i> Organization
            </span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            id="collapseOrg"
            className={`collapse ${isShow(["/organizations"])}`}
            data-bs-parent="#sidebarAccordion"
          >
            <Link
              to="/organizations"
              className={`child-link ${isActive("/organizations")}`}
            >
              Organization
            </Link>
          </div>
        </div>

        {/* 2. MANAGE Section */}
        <div className="card bg-transparent border-0">
          <button
            className={`btn sidebar-accordion-btn ${isParentActive([
              "/manage-roles",
              "/manage-users",
              "/profile",
              "/time-tracking",
              "/events",
              "/events/create",
              "/event-type",
            ])}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseManage"
            aria-expanded={
              isShow([
                "/manage-roles",
                "/manage-users",
                "/profile",
                "/time-tracking",
                "/events",
                "/events/create",
                "/event-type",
              ]) === "show"
            }
          >
            <span>
              <i className="bi bi-gear sidebar-icon"></i> Manage
            </span>
            <i className="bi bi-chevron-down"></i>
          </button>

          <div
            id="collapseManage"
            className={`collapse ${isShow([
              "/manage-roles",
              "/manage-users",
              "/profile",
              "/time-tracking",
              "/events",
              "/events/create",
              "/event-type",
            ])}`}
            data-bs-parent="#sidebarAccordion"
          >
            <Link
              to="/manage-roles"
              className={`child-link ${isActive("/manage-roles")}`}
            >
              Roles
            </Link>
            <Link
              to="/manage-users"
              className={`child-link ${isActive("/manage-users")}`}
            >
              Users
            </Link>
            <Link
              to="/profile"
              className={`child-link ${isActive("/profile")}`}
            >
              Account
            </Link>
            <Link
              to="/time-tracking"
              className={`child-link ${isActive("/time-tracking")}`}
            >
              Time Tracking
            </Link>

            <Link
              to="/events"
              className={`child-link ${
                location.pathname === "/events" ||
                location.pathname.startsWith("/events/")
                  ? "active"
                  : ""
              }`}
            >
              Event
            </Link>

            <Link
              to="/event-type"
              className={`child-link ${isActive("/event-type")}`}
            >
              Event Type
            </Link>
          </div>
        </div>

        {/* 3. INVITATIONS Section */}
        <div className="card bg-transparent border-0">
          <button
            className={`btn sidebar-accordion-btn ${isParentActive([
              "/invitations",
            ])}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInvites"
            aria-expanded={isShow(["/invitations"]) === "show"}
          >
            <span>
              <i className="bi bi-envelope sidebar-icon"></i> Invitations
            </span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            id="collapseInvites"
            className={`collapse ${isShow(["/invitations"])}`}
            data-bs-parent="#sidebarAccordion"
          >
            <Link
              to="/invitations"
              className={`child-link ${isActive("/invitations")}`}
            >
              Invite Users
            </Link>
          </div>
        </div>

        {/* 4. PENDING ENROLLMENT Section */}
        <div className="card bg-transparent border-0">
          <button
            className={`btn sidebar-accordion-btn ${isParentActive([
              "/pending-enrollment",
            ])}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePending"
            aria-expanded={isShow(["/pending-enrollment"]) === "show"}
          >
            <span>
              <i className="bi bi-person-plus sidebar-icon"></i> Pending
              Enrollment
            </span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            id="collapsePending"
            className={`collapse ${isShow(["/pending-enrollment"])}`}
            data-bs-parent="#sidebarAccordion"
          >
            <Link
              to="/pending-enrollment"
              className={`child-link ${isActive("/pending-enrollment")}`}
            >
              Pending Enrollment
            </Link>
          </div>
        </div>

        {/* 5. GROUPS Section */}
        <div className="card bg-transparent border-0">
          <button
            className={`btn sidebar-accordion-btn ${isParentActive([
              "/groups",
              "/group-type",
            ])}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseGroups"
            aria-expanded={isShow(["/groups", "/group-type"]) === "show"}
          >
            <span>
              <i className="bi bi-people sidebar-icon"></i> Groups
            </span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            id="collapseGroups"
            className={`collapse ${isShow(["/groups", "/group-type"])}`}
            data-bs-parent="#sidebarAccordion"
          >
            <Link to="/groups" className={`child-link ${isActive("/groups")}`}>
              Groups
            </Link>
            <Link
              to="/group-type"
              className={`child-link ${isActive("/group-type")}`}
            >
              Group Type
            </Link>
          </div>
        </div>

        {/* 6. SYSTEM Section */}
        <div className="card bg-transparent border-0">
          <button
            className={`btn sidebar-accordion-btn ${isParentActive([
              "/tag",
              "/site",
              "/activities",
              "/manage-role-types",
              "/logs",
            ])}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSystem"
            aria-expanded={
              isShow([
                "/tag",
                "/site",
                "/activities",
                "/manage-role-types",
                "/logs",
              ]) === "show"
            }
          >
            <span>
              <i className="bi bi-pc-display sidebar-icon"></i> System
            </span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            id="collapseSystem"
            className={`collapse ${isShow([
              "/tag",
              "/site",
              "/activities",
              "/manage-role-types",
              "/logs",
            ])}`}
            data-bs-parent="#sidebarAccordion"
          >
            <Link to="/tag" className={`child-link ${isActive("/tag")}`}>
              Tag
            </Link>
            <Link to="/site" className={`child-link ${isActive("/site")}`}>
              Site
            </Link>
            <Link
              to="/activities"
              className={`child-link ${isActive("/activities")}`}
            >
              Activities
            </Link>
            <Link
              to="/manage-role-types"
              className={`child-link ${isActive("/manage-role-types")}`}
            >
              Role Types
            </Link>
            <Link to="/logs" className={`child-link ${isActive("/logs")}`}>
              Error Logs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;