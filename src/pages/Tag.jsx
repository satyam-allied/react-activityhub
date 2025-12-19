import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure icons are imported

// --- 1. Custom Styles for React Data Table ---
const customStyles = {
  table: {
    style: {
      backgroundColor: "transparent",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#f5f6fa", // var(--ah-fill)
      minHeight: "52px",
      borderBottom: "none",
    },
  },
  headCells: {
    style: {
      color: "#6c757d", // var(--ah-black-10)
      fontSize: "0.85rem",
      fontWeight: "700",
      textTransform: "uppercase",
      paddingLeft: "16px",
      paddingRight: "16px",
      // Rounded Corners logic
      "&:first-of-type": {
        borderRadius: "8px 0 0 8px",
        paddingLeft: "24px",
      },
      "&:last-of-type": {
        borderRadius: "0 8px 8px 0",
      },
    },
  },
  rows: {
    style: {
      fontSize: "0.9rem",
      color: "#343a40", // var(--ah-black-20)
      minHeight: "60px",
      borderBottom: "none !important", // Removes row lines
      "&:hover": {
        backgroundColor: "#f8f9fa", // var(--ah-bg-light)
        cursor: "pointer",
      },
    },
  },
  cells: {
    style: {
      paddingLeft: "16px",
      paddingRight: "16px",
      "&:first-of-type": {
        paddingLeft: "24px",
      },
    },
  },
};

// --- 2. Custom Pagination Component ---
const CustomPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
}) => {
  const handlePageChange = (e) => {
    const page = Number(e.target.value);
    const maxPage = Math.ceil(rowCount / rowsPerPage);
    if (page > 0 && page <= maxPage) {
      onChangePage(page, rowCount);
    }
  };

  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const startRange = rowCount === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
  const endRange = Math.min(currentPage * rowsPerPage, rowCount);

  return (
    <div className="table-footer">
      <div className="footer-group">
        <span>Rows per page:</span>
        <input
          type="number"
          className="page-input"
          value={rowsPerPage}
          onChange={(e) => onChangeRowsPerPage(Number(e.target.value), currentPage)}
        />
      </div>

      <div className="footer-group">
        <span>Go to page:</span>
        <input
          type="number"
          className="page-input"
          value={currentPage}
          onChange={handlePageChange}
        />
      </div>

      <div className="footer-group">
        <button
          className="pagination-btn"
          onClick={() => onChangePage(1, rowCount)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-double-left"></i>
        </button>
        <button
          className="pagination-btn"
          onClick={() => onChangePage(currentPage - 1, rowCount)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <span className="mx-3" style={{ fontWeight: 500 }}>
          {startRange} - {endRange} of {rowCount}
        </span>
        <button
          className="pagination-btn"
          onClick={() => onChangePage(currentPage + 1, rowCount)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
        <button
          className="pagination-btn"
          onClick={() => onChangePage(totalPages, rowCount)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </div>
  );
};

// --- 3. Custom Toolbar Component ---
const TableToolbar = ({ filterText, onSearch, onExport, onPrint }) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
      {/* Left: Search */}
      <div className="input-group search-input-group-table" style={{ maxWidth: "280px" }}>
        <span className="input-group-text border-0 bg-transparent p-0 mr-2">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 bg-transparent p-0 shadow-none"
          placeholder="Search..."
          value={filterText}
          onChange={onSearch}
        />
      </div>

      {/* Right: Actions */}
      <div className="table-toolbar">
        <button className="toolbar-btn" title="Share">
          <i className="bi bi-share"></i>
        </button>
        <button className="toolbar-btn" title="Copy">
          <i className="bi bi-files"></i>
        </button>
        <button className="toolbar-btn" title="Delete Selected">
          <i className="bi bi-trash"></i>
        </button>

        <div className="toolbar-divider"></div>

        <button className="toolbar-btn" title="Filter">
          <i className="bi bi-funnel"></i>
        </button>
        <button className="toolbar-btn" onClick={onPrint} title="Print">
          <i className="bi bi-printer"></i>
        </button>
        <button className="toolbar-btn" onClick={onExport} title="Export CSV">
          <i className="bi bi-download"></i>
        </button>

        <div className="toolbar-divider"></div>

        <button className="toolbar-btn" title="Fullscreen">
          <i className="bi bi-arrows-angle-expand"></i>
        </button>
      </div>
    </div>
  );
};

// --- 4. Main Component ---
const Tag = () => {
  const [filterText, setFilterText] = useState("");
  
  // Sample Data
  const tagsData = [
    { id: 1, name: "System tag 1", description: "Core system identifier", isSystem: true },
    { id: 2, name: "System tag 2", description: "Secondary system ID", isSystem: true },
    { id: 3, name: "Marketing", description: "Campaign related items", isSystem: false },
    { id: 4, name: "Finance", description: "Budgeting tags", isSystem: false },
    { id: 5, name: "HR Dept", description: "Employee records", isSystem: false },
    { id: 6, name: "Development", description: "Tech team tasks", isSystem: false },
    { id: 7, name: "Support", description: "Customer tickets", isSystem: false },
  ];

  // Column Definition
  const columns = useMemo(() => [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "30%",
      cell: (row) => <span className="font-weight-bold">{row.name}</span>
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      width: "50%",
    },
    {
      name: "Action",
      width: "20%",
      button: true,
      cell: () => (
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
      ),
    },
  ], []);

  // Filter Logic
  const filteredItems = tagsData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Export Function
  const handleExport = () => {
    const csvString = [
      ["ID", "Name", "Description"],
      ...filteredItems.map(item => [item.id, item.name, item.description])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "tags_export.csv";
    link.click();
  };

  // Print Function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-content container-fluid p-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Tag</h4>
          <div className="text-muted small">
            Home / Dashboard / <span className="font-weight-bold text-dark">Tag</span>
          </div>
        </div>
        <button className="btn-create">
          <i className="bi bi-plus-lg mr-2"></i> Create Tag
        </button>
      </div>

      {/* Main Card */}
      <div className="card border-0 shadow-sm" style={{ borderRadius: "12px" }}>
        <div className="card-body p-4">
          
          <DataTable
            columns={columns}
            data={filteredItems}
            customStyles={customStyles}
            pagination
            paginationComponent={CustomPagination}
            highlightOnHover
            selectableRows
            selectableRowsHighlight
            subHeader
            subHeaderComponent={
              <TableToolbar 
                filterText={filterText}
                onSearch={(e) => setFilterText(e.target.value)}
                onExport={handleExport}
                onPrint={handlePrint}
              />
            }
            subHeaderAlign="left"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Tag;