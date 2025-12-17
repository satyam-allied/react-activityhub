import React from "react";
import { Link } from "react-router-dom";

const Roles = () => {
  // Dummy data
  const rolesData = [
    { id: 1, name: "Super Admin", userCount: 2 },
    { id: 2, name: "Community In charge", userCount: 5 },
    { id: 3, name: "Head Coach", userCount: 12 },
    { id: 4, name: "Assistant Coach", userCount: 24 },
    { id: 5, name: "Staff Member", userCount: 45 },
    { id: 6, name: "Member", userCount: 450 },
  ];

  return (
    <div className="main-content">
      {/* --- Header --- */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Roles</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            <span className="font-weight-bold">Roles</span>
          </div>
        </div>
      </div>

      {/* --- Content Card --- */}
      <div className="content-card shadow-20-light">
        {/* Top Controls */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-10 mb-3 mb-md-0">
            <div className="input-group search-input-group-table w-100">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Roles"
              />
            </div>
          </div>
          <div className="col-md-2 text-right">
            <button className="btn-create">
              <i className="bi bi-plus-lg mr-2"></i> Create Role
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Role Name</th>
                <th style={{ width: "30%" }}>Users Assigned</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rolesData.map((role) => (
                <tr key={role.id}>
                  <td>
                    <span className="font-weight-500">
                      {role.name}
                    </span>
                  </td>
                  <td>{role.userCount} Users</td>
                  <td>
                    <div className="action-btn-group">
                      <button className="btn-icon" title="Edit">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button className="btn-icon" title="Permissions">
                        <i className="bi bi-shield-lock"></i>
                      </button>
                      <button className="btn-icon delete" title="Delete">
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="table-footer">
          <div className="footer-group">
            <span>Row per Page</span>
            <input type="number" className="page-input" defaultValue={10} />
          </div>
          <div className="footer-group">
            <span>Go to Page</span>
            <input type="number" className="page-input" defaultValue={1} />
          </div>
          <div className="footer-group">
            {/* Simplified pagination for brevity */}
            <span className="mx-3 font-weight-500">1 - 6 of 6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
