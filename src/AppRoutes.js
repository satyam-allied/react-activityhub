import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Ensure this path is correct
import Site from "./pages/Site";
import Tag from "./pages/Tag";
import Activities from "./pages/Activities";
import RoleTypes from "./pages/RoleTypes";
import Account from "./pages/Account";
import Group from "./pages/Group";
import Roles from "./pages/Roles";
import Users from "./pages/Users";
import Event from "./pages/Event";
import EventCreate from "./pages/CreateEvent";
import CreateEvent from "./pages/CreateEvent";

// --- Dummy Pages (Moved from App.js) ---

const OrganizationsPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Organizations</h2>
      <p className="text-muted">Manage your organization details.</p>
    </div>
  </div>
);

const RolesPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Manage Roles</h2>
      <p className="text-muted">Define user roles and permissions.</p>
    </div>
  </div>
);

const UsersPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Manage Users</h2>
      <p className="text-muted">Add, edit, or remove users.</p>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Account / Profile</h2>
      <p className="text-muted">Manage your personal account settings.</p>
    </div>
  </div>
);

const TimeTrackingPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Time Tracking</h2>
      <p className="text-muted">View attendance and hours.</p>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Events</h2>
      <p className="text-muted">Manage upcoming events.</p>
    </div>
  </div>
);

const EventTypePage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Event Types</h2>
      <p className="text-muted">Configure different categories of events.</p>
    </div>
  </div>
);

const InvitationsPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Invite Users</h2>
      <p className="text-muted">Send and manage invitations.</p>
    </div>
  </div>
);

const PendingEnrollmentPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Pending Enrollment</h2>
      <p className="text-muted">Review users waiting for approval.</p>
    </div>
  </div>
);

const GroupsPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>All Groups</h2>
      <p className="text-muted">View and manage teams.</p>
    </div>
  </div>
);

const GroupTypePage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Group Types</h2>
      <p className="text-muted">Categorize your groups.</p>
    </div>
  </div>
);

const ActivitiesPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Activities</h2>
      <p className="text-muted">View recent system activities.</p>
    </div>
  </div>
);

const RoleTypesPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Role Types</h2>
      <p className="text-muted">Configure types of roles available.</p>
    </div>
  </div>
);

const LogsPage = () => (
  <div className="main-content">
    <div className="page-header mb-4">
      <h2>Error Logs</h2>
      <p className="text-muted">View system error reports.</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default path redirects to Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* 1. ORGANIZATION Routes */}
      <Route path="/organizations" element={<OrganizationsPage />} />

      {/* 2. MANAGE Routes */}
      <Route path="/manage-roles" element={<Roles />} />
      <Route path="/manage-users" element={<Users />} />
      <Route path="/profile" element={<Account />} />
      <Route path="/time-tracking" element={<TimeTrackingPage />} />
      <Route path="/events" element={<Event />} />
      <Route path="/events/create" element={<CreateEvent />} />
      <Route path="/event-type" element={<EventTypePage />} />

      {/* 3. INVITATIONS Routes */}
      <Route path="/invitations" element={<InvitationsPage />} />

      {/* 4. PENDING ENROLLMENT Routes */}
      <Route path="/pending-enrollment" element={<PendingEnrollmentPage />} />

      {/* 5. GROUPS Routes */}
      <Route path="/groups" element={<Group />} />
      <Route path="/group-type" element={<GroupTypePage />} />

      {/* 6. SYSTEM Routes */}
      <Route path="/tag" element={<Tag />} />
      <Route path="/site" element={<Site />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/manage-role-types" element={<RoleTypes />} />
      <Route path="/logs" element={<LogsPage />} />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
