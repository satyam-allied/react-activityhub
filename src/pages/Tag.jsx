import React from "react";
import { Link } from "react-router-dom";

const Tag = () => {
  const tagsData = [
    { id: 1, name: "System tag 1", description: "Text here", isSystem: true },
    { id: 2, name: "System tag 2", description: "Text here", isSystem: true },
    { id: 3, name: "Tag 1", description: "Text here", isSystem: false },
    { id: 4, name: "Tag 2", description: "Text here", isSystem: false },
    { id: 5, name: "Tag 3", description: "Text here", isSystem: false },
  ];

  return (
    <div className="main-content">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Tag</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            <span className="font-weight-bold">Tag</span>
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
            {/* Using Common .btn-create class */}
            <button className="btn-create">
              <i className="bi bi-plus-lg mr-2"></i> Create Tag
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-custom table-hover">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Name</th>
                <th style={{ width: "50%" }}>Description</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tagsData.map((tag) => (
                <tr key={tag.id}>
                  <td>
                    
                      {tag.name}
                    
                  </td>
                  <td>{tag.description}</td>
                  <td>
                    {/* Using Common Action Button Group */}
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

export default Tag;
