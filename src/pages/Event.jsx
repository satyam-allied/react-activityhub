import React, { useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  // Dummy Data matching the image
  const eventsData = [
    {
      id: 1,
      startDate: "17/11/2025",
      endDate: "21/11/2025",
      title: "Out Bound",
      policy: "Public",
      status: "Published",
    },
    {
      id: 2,
      startDate: "16/11/2025",
      endDate: "20/11/2025",
      title: "Sports camp",
      policy: "Individual",
      status: "Published",
    },
    {
      id: 3,
      startDate: "14/11/2025",
      endDate: "19/11/2025",
      title: "Tournament",
      policy: "Member",
      status: "On Hold",
    },
    {
      id: 4,
      startDate: "13/11/2025",
      endDate: "18/11/2025",
      title: "Training Camp",
      policy: "Participants Only",
      status: "Ongoing",
    },
    {
      id: 5,
      startDate: "12/11/2025",
      endDate: "12/11/2025",
      title: "Coach Training",
      policy: "Staff Only",
      status: "Draft",
    },
    {
      id: 6,
      startDate: "11/11/2025",
      endDate: "11/11/2025",
      title: "Evacuation Drill",
      policy: "All",
      status: "Completed",
    },
  ];

  // Helper for badges based on status text
  const getStatusClass = (status) => {
    switch (status) {
      case "Published":
        return "bg-blue-action-20 text-blue-action-10"; // Custom class or use existing style logic
      case "On Hold":
        return "bg-yellow-action-20 text-yellow-action-10"; // Custom class needed
      case "Ongoing":
        return "bg-ongoing"; // Existing purple
      case "Draft":
        return "bg-draft"; // Existing grey
      case "Completed":
        return "bg-green-action-20 text-green-action-10"; // Existing green
      default:
        return "bg-draft";
    }
  };

  return (
    <div className="main-content">
      {/* --- Page Header --- */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Event</h2>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            <span className="text-dark font-weight-bold">Event</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Card --- */}
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
            {/* CHANGED: Link to the create page instead of Modal */}
            <Link
              to="/events/create"
              className="btn-create text-decoration-none"
            >
              <i className="bi bi-plus-lg mr-2"></i> Create Event
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Start Date</th>
                <th style={{ width: "15%" }}>End Date</th>
                <th style={{ width: "25%" }}>Title</th>
                <th style={{ width: "20%" }}>Participants Policy</th>
                <th style={{ width: "10%", textAlign: "center" }}>Status</th>
                <th style={{ width: "15%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((event) => (
                <tr key={event.id}>
                  <td>{event.startDate}</td>
                  <td>{event.endDate}</td>
                  <td className="font-weight-500 text-dark">{event.title}</td>
                  <td>{event.policy}</td>
                  <td className="text-center">
                    <span
                      className={`status-badge ${getStatusClass(event.status)}`}
                      // Inline override for specific colors if variables not yet in main CSS
                      style={
                        event.status === "Published"
                          ? {
                              backgroundColor: "var(--ah-blue-action-20)",
                              color: "var(--ah-blue-action-10)",
                            }
                          : event.status === "On Hold"
                          ? {
                              backgroundColor: "var(--ah-yellow-action-20)",
                              color: "var(--ah-yellow-action-10)",
                            }
                          : event.status === "Completed"
                          ? {
                              backgroundColor: "var(--ah-green-action-20)",
                              color: "var(--ah-green-action-10)",
                            }
                          : {}
                      }
                    >
                      {event.status}
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

        {/* Pagination */}
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

export default Events;
