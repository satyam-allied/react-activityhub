import React from "react";
import { Link } from "react-router-dom";

const RoleTypes = () => {
  // Dummy data matching the image
  const roleTypesData = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Member" },
    { id: 3, name: "Staff" },
    { id: 4, name: "Account Manager" },
  ];

  return (
    <div className="main-content">
      {/* --- Page Header & Breadcrumbs --- */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Roles Types</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            {/* Changed font-weight-bold to fw-bold */}
            <span className="fw-bold">Roles Types</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Card --- */}
      <div className="content-card shadow-20-light">
        {/* Top Controls: Search & Create Button */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-10 mb-3 mb-md-0">
            <div className="input-group search-input-group-table w-100">
              {/* Removed input-group-prepend wrapper */}
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-transparent"
                placeholder="Search"
              />
            </div>
          </div>
          {/* Changed text-right to text-end */}
          <div className="col-md-2 text-end">
            {/* Using Common .btn-create class */}
            <button className="btn-create">
              {/* Changed mr-2 to me-2 */}
              <i className="bi bi-plus-lg me-2"></i> Create Role
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                {/* First column gets 80% width based on visual design */}
                <th style={{ width: "80%" }}>Roles</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {roleTypesData.map((role) => (
                <tr key={role.id}>
                  <td>
                    <span className="font-weight-500">{role.name}</span>
                  </td>
                  <td>
                    {/* Using Common Action Button Group */}
                    <div className="action-btn-group">
                      <button className="btn-icon" title="View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn-icon" title="Edit">
                        {/* The icon in the image looks like a person with a gear or pencil */}
                        <i className="bi bi-person-gear"></i>
                        {/* Alternately use bi-pencil-square if preferred */}
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
            <button className="pagination-btn">
              <i className="bi bi-chevron-double-left"></i>
            </button>
            <button className="pagination-btn">
              <i className="bi bi-chevron-left"></i>
            </button>
            <span className="mx-3 font-weight-500">1 - 10 of 30</span>
            <button className="pagination-btn">
              <i className="bi bi-chevron-right"></i>
            </button>
            <button className="pagination-btn">
              <i className="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleTypes;