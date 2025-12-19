import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  const activitiesData = [
    {
      id: 1,
      name: "Activity Name 1",
      description: "Text",
      createdBy: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Activity Name 2",
      description: "Text",
      createdBy: "Coach name",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Activity Name 3",
      description: "Text",
      createdBy: "Coach",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Activity Name 4",
      description: "Text",
      createdBy: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Activity Name 5",
      description: "Text",
      createdBy: "Admin",
      status: "Inactive",
    },
  ];

  return (
    <div className="main-content">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Activities</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            {/* Changed font-weight-bold to fw-bold */}
            <span className="fw-bold">Activities</span>
          </div>
        </div>
      </div>

      <div className="content-card shadow-20-light">
        {/* Top Controls */}
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
            <button className="btn-create">
              {/* Changed mr-2 to me-2 */}
              <i className="bi bi-plus-lg me-2"></i> Create Activities
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "25%" }}>Description</th>
                <th style={{ width: "20%" }}>Created by</th>
                <th style={{ width: "15%", textAlign: "center" }}>Status</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {activitiesData.map((activity) => (
                <tr key={activity.id}>
                  <td className="font-weight-500">{activity.name}</td>
                  <td>{activity.description}</td>
                  <td>{activity.createdBy}</td>
                  <td className="text-center">
                    {/* Using .status-badge combined with helper classes */}
                    <span
                      className={`status-badge ${
                        activity.status === "Active" ? "bg-active" : "bg-draft"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btn-group">
                      <button className="btn-icon" title="View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn-icon" title="Edit">
                        <i className="bi bi-pencil-square"></i>
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

export default Activities;