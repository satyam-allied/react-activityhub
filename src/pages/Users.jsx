import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const usersData = [
    {
      id: 1,
      name: "Albus Dumbledore",
      avatar:
        "https://ui-avatars.com/api/?name=Albus+Dumbledore&background=random",
      role: "Super Admin",
      phone: "+1 987 654 3210",
      email: "headmaster@hogwarts.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Minerva McGonagall",
      avatar:
        "https://ui-avatars.com/api/?name=Minerva+McGonagall&background=random",
      role: "Head Coach",
      phone: "+1 876 543 2109",
      email: "minerva@hogwarts.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Severus Snape",
      avatar:
        "https://ui-avatars.com/api/?name=Severus+Snape&background=random",
      role: "Staff Member",
      phone: "+1 765 432 1098",
      email: "snape@hogwarts.com",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Harry Potter",
      avatar: "https://ui-avatars.com/api/?name=Harry+Potter&background=random",
      role: "Member",
      phone: "+1 654 321 0987",
      email: "harry@hogwarts.com",
      status: "Active",
    },
  ];

  return (
    <div className="main-content">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Users</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            {/* Changed font-weight-bold to fw-bold */}
            <span className="fw-bold">Users</span>
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
                className="form-control"
                placeholder="Search Users"
              />
            </div>
          </div>
          {/* Changed text-right to text-end */}
          <div className="col-md-2 text-end">
            <button className="btn-create">
              {/* Changed mr-2 to me-2 */}
              <i className="bi bi-person-plus-fill me-2"></i> Add User
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Phone No</th>
                <th>Email</th>
                <th className="text-center">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        // Changed mr-3 to me-3
                        className="rounded-circle me-3"
                        style={{ width: "36px", height: "36px" }}
                      />
                      <span className="font-weight-500">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td>{user.role}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td className="text-center">
                    <span
                      className={`status-badge ${
                        user.status === "Active" ? "bg-active" : "bg-draft"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btn-group">
                      <button className="btn-icon" title="View Profile">
                        <i className="bi bi-person-badge"></i>
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
          {/* ... standard pagination controls ... */}
          <span className="mx-3 font-weight-500">1 - 4 of 4</span>
        </div>
      </div>
    </div>
  );
};

export default Users;
