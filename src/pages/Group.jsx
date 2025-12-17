import React from "react";
import { Link } from "react-router-dom";

const Group = () => {
  const groupsData = [
    {
      id: 1,
      name: "Star Under-18(U18)",
      activity: "Basketball",
      members: "015",
      visibility: "Internal Only",
      status: "Active",
    },
    {
      id: 2,
      name: "Star Under-19(U19)",
      activity: "Football",
      members: "025",
      visibility: "Members Visible",
      status: "Archived",
    },
    {
      id: 3,
      name: "Star Under-20(U20)",
      activity: "Swimming",
      members: "012",
      visibility: "Internal Only",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Archived",
    },
    {
      id: 5,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Active",
    },
    {
      id: 6,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Active",
    },
    {
      id: 8,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Archived",
    },
    {
      id: 10,
      name: "Dummy Text",
      activity: "Dummy Text",
      members: "Dummy Text",
      visibility: "Dummy Text",
      status: "Archived",
    },
  ];

  // Helper to assign classes based on status
  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-active"; // Blue (Existing)
      case "Inactive":
        return "bg-draft"; // Grey (Existing)
      case "Archived":
        return "bg-archived"; // Yellow (New - see CSS below)
      default:
        return "bg-draft";
    }
  };

  return (
    <div className="main-content">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Groups</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            <span className="font-weight-bold">Groups</span>
          </div>
        </div>
      </div>

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
                className="form-control border-0 bg-transparent"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-md-2 text-right">
            <button className="btn-create">
              <i className="bi bi-plus-lg mr-2"></i> Create Group
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "15%" }}>Activity</th>
                <th style={{ width: "15%" }}>Members</th>
                <th style={{ width: "20%" }}>Visibility</th>
                <th style={{ width: "15%", textAlign: "center" }}>Status</th>
                <th style={{ width: "15%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {groupsData.map((group) => (
                <tr key={group.id}>
                  <td className="font-weight-500">{group.name}</td>
                  <td>{group.activity}</td>
                  <td>{group.members}</td>
                  <td>{group.visibility}</td>
                  <td className="text-center">
                    <span
                      className={`status-badge ${getStatusClass(group.status)}`}
                    >
                      {group.status}
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

export default Group;
