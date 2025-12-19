import React from "react";
import { Link } from "react-router-dom";

const Site = () => {
  const sitesData = [
    {
      id: 1,
      name: "Court no.6",
      managedBy: "Samuel Selby",
      city: "Los Angeles",
      state: "California",
      country: "USA",
      status: "Active",
    },
    {
      id: 2,
      name: "Play Ground 1",
      managedBy: "Peet Maguire",
      city: "Los Angeles",
      state: "California",
      country: "USA",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Swimming Pool 3",
      managedBy: "Hagrid Marshal",
      city: "Los Angeles",
      state: "California",
      country: "USA",
      status: "Active",
    },
    {
      id: 4,
      name: "Dummy Text",
      managedBy: "Dummy Text",
      city: "Dummy Text",
      state: "Dummy Text",
      country: "Dummy Text",
      status: "Inactive",
    },
  ];

  return (
    <div className="main-content">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Sites</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            {/* Changed font-weight-bold to fw-bold */}
            <span className="fw-bold">Sites</span>
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
              <i className="bi bi-plus-lg me-2"></i> Create Site
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Managed by</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th className="text-center">Site Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sitesData.map((site) => (
                <tr key={site.id}>
                  {/* Changed font-weight-bold to fw-bold */}
                  <td className="fw-bold">{site.name}</td>
                  <td>{site.managedBy}</td>
                  <td>{site.city}</td>
                  <td>{site.state}</td>
                  <td>{site.country}</td>
                  <td className="text-center">
                    <span
                      className={`status-badge ${
                        site.status === "Active" ? "bg-active" : "bg-draft"
                      }`}
                    >
                      {site.status}
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

export default Site;