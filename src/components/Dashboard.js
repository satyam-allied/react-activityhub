import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="main-content">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-lg-8 mb-4">
          <div className="page-header">
            <h1>Welcome Albus Dumbledore !</h1>
            <p className="text-muted">Sub text can be added here</p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="clock-in-box d-flex flex-row justify-content-end align-items-center h-100">
            <div className="text-right mr-3 clock-time">
              <div className="font-weight-bold">3:30 pm</div>
              <div>Wednesday</div>
              <div style={{ fontSize: "0.7rem" }}>Clock in at : 9:00 am</div>
            </div>
            <button className="btn btn-clock-in">
              <i className="bi bi-box-arrow-in-right mr-2"></i> Clock In
            </button>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            <span className="text-dark font-weight-bold">breadcrumbs</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
          <div className="stat-card bg-orange-light shadow-drop-15">
            <div className="stat-icon-circle">
              <i className="bi bi-person-fill"></i>
            </div>
            <div className="text-right">
              <div className="stat-number">450</div>
              <div className="stat-label">Number Of Members</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
          <div className="stat-card bg-blue-light shadow-drop-15">
            <div className="stat-icon-circle">
              <i className="bi bi-person-badge"></i>
            </div>
            <div className="text-right">
              <div className="stat-number">100</div>
              <div className="stat-label">Number Of Coaches</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-3 mb-md-0">
          <div className="stat-card bg-purple-light shadow-drop-15">
            <div className="stat-icon-circle">
              <i className="bi bi-person-plus-fill"></i>
            </div>
            <div className="text-right">
              <div className="stat-number">003</div>
              <div className="stat-label">New Joiners</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="stat-card bg-green-light shadow-drop-15">
            <div className="stat-icon-circle">
              <i className="bi bi-calendar-check"></i>
            </div>
            <div className="text-right">
              <div className="stat-number">004</div>
              <div className="stat-label">Holidays This Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Activities, Leave, Schedule */}
      <div className="row mb-4">
        {/* Activities */}
        <div className="col-lg-4 mb-3 mb-lg-0">
          <div className="content-card shadow-20-light">
            <h5 className="card-title-custom">Activities</h5>

            <div className="activity-item shadow-10-light">
              <div>
                <h4 className="activity-number text-orange pb-1">015</h4>
                <p className="activity-label">Skills Sessions</p>
              </div>
              <Link to="/dashboard">
                <i className="bi bi-box-arrow-up-right"></i>
              </Link>
            </div>
            <div className="activity-item shadow-10-light">
              <div>
                <h4 className="activity-number text-blue pb-1">012</h4>
                <p className="activity-label">Private Sessions</p>
              </div>
              <Link to="/dashboard">
                <i className="bi bi-box-arrow-up-right"></i>
              </Link>
            </div>
            <div className="activity-item shadow-10-light">
              <div>
                <h4 className="activity-number text-purple pb-1">010</h4>
                <p className="activity-label">Camp</p>
              </div>
              <Link to="/dashboard">
                <i className="bi bi-box-arrow-up-right"></i>
              </Link>
            </div>
            <div className="activity-item shadow-10-light">
              <div>
                <h4 className="activity-number text-green pb-1">000</h4>
                <p className="activity-label">Alerts</p>
              </div>
              <Link to="/dashboard">
                <i className="bi bi-box-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Members on Leave */}
        <div className="col-lg-4 mb-3 mb-lg-0">
          <div className="content-card shadow-20-light">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title-custom mb-0">Members on Leave</h5>
              <Link href="#view" className="card-title-link">
                View All
              </Link>
            </div>

            <div className="leave-item">
              <div className="d-flex align-items-center">
                <img
                  src="https://ui-avatars.com/api/?name=Francis+Tran&background=random"
                  className="leave-avatar mr-3"
                  alt="u"
                />
                <div className="leave-info">
                  <h6>Francis Tran</h6>
                  <p>
                    Head coach basket ball
                    <br />
                    Reason: Unwell
                  </p>
                </div>
              </div>
              <div className="leave-date">17th, Today</div>
            </div>

            <div className="leave-item">
              <div className="d-flex align-items-center">
                <img
                  src="https://ui-avatars.com/api/?name=Katherine+Webster&background=random"
                  className="leave-avatar mr-3"
                  alt="u"
                />
                <div className="leave-info">
                  <h6>Katherine Webster</h6>
                  <p>
                    Head Staff basket ball
                    <br />
                    Reason: Family Trip
                  </p>
                </div>
              </div>
              <div className="leave-date">16th to 18th</div>
            </div>

            <div className="leave-item">
              <div className="d-flex align-items-center">
                <img
                  src="https://ui-avatars.com/api/?name=Francis+Tran&background=random"
                  className="leave-avatar mr-3"
                  alt="u"
                />
                <div className="leave-info">
                  <h6>Francis Tran</h6>
                  <p>
                    Head coach basket ball
                    <br />
                    Reason: Personal Reason
                  </p>
                </div>
              </div>
              <div className="leave-date">Second Half</div>
            </div>

            <div className="leave-item">
              <div className="d-flex align-items-center">
                <img
                  src="https://ui-avatars.com/api/?name=Eva&background=random"
                  className="leave-avatar mr-3"
                  alt="u"
                />
                <div className="leave-info">
                  <h6>Eva</h6>
                  <p>
                    Head coach basket ball
                    <br />
                    Reason: Casual
                  </p>
                </div>
              </div>
              <div className="leave-date">First Half</div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="col-lg-4">
          <div className="content-card shadow-20-light">
            <div className="d-flex justify-content-between mb-3">
              <i className="bi bi-chevron-left"></i>
              <span className="font-weight-bold">November 2025</span>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div className="calendar-strip">
              <div className="cal-day">
                Sun <span className="cal-date">10</span>
              </div>
              <div className="cal-day">
                Mon <span className="cal-date">11</span>
              </div>
              <div className="cal-day">
                Tue <span className="cal-date">12</span>
              </div>
              <div className="cal-day active">
                Wed <span className="cal-date">13</span>
              </div>
              <div className="cal-day">
                Thr <span className="cal-date">14</span>
              </div>
              <div className="cal-day">
                Fri <span className="cal-date">15</span>
              </div>
              <div className="cal-day">
                Sat <span className="cal-date">16</span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small font-weight-bold">Today's Schedule</span>
              <a href="#see" className="small">
                See All
              </a>
            </div>

            <div className="schedule-item">
              <div className="d-flex">
                <div className="schedule-time mr-3 border-right pr-3">
                  03:00pm - 4:30pm
                </div>
                <div>
                  <p className="schedule-title">Basket Ball Event</p>
                  <p className="schedule-sub mb-0">New building Court no. 6</p>
                </div>
              </div>
            </div>
            <div className="schedule-item">
              <div className="d-flex">
                <div className="schedule-time mr-3 border-right pr-3">
                  03:00pm - 4:30pm
                </div>
                <div>
                  <p className="schedule-title">Basket Ball Event</p>
                  <p className="schedule-sub mb-0">New building Court no. 6</p>
                </div>
              </div>
            </div>

            <button className="btn-add-schedule mt-2">
              <i className="bi bi-plus-circle-fill mr-1"></i> Add Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Leave Requests & Announcements */}
      <div className="row mb-4">
        <div className="col-lg-8 mb-3 mb-lg-0">
          <div className="content-card shadow-20-light">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title-custom mb-0">Leave Requests</h5>
              <Link href="#view" className="card-title-link">
                View All
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table table-custom table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>Person</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dinnie Russell</td>
                    <td>12-16 Nov 2025</td>
                    <td>05 Days</td>
                    <td>Casual Leave</td>
                    <td>
                      <span
                        className="badge badge-approve px-3 py-2"
                        style={{ backgroundColor: "#d5f8d9", color: "#3f9c67" }}
                      >
                        Approved
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Cooper</td>
                    <td>12-16 Nov 2025</td>
                    <td>05 Days</td>
                    <td>Casual Leave</td>
                    <td>
                      <span
                        className="badge badge-danger px-3 py-2"
                        style={{ backgroundColor: "#fbd8dc", color: "#7d0727" }}
                      >
                        Rejected
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="content-card shadow-20-light">
            <h5 className="card-title-custom">Make Announcement</h5>
            <div className="announcement-box d-flex flex-column justify-content-between">
              <textarea
                className="form-control bg-transparent border-0"
                style={{ resize: "none", height: "120px" }}
                placeholder="Write your announcement here"
              ></textarea>
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-pill btn-grey mr-5">Clear</button>
                <button className="btn btn-pill btn-blue" style={{}}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== NEW SECTION: UPCOMING EVENTS ==================== */}
      <div className="content-card shadow-20-light">
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h5 className="card-title-custom mb-0">Upcoming Events</h5>
            <Link href="#view" className="card-title-link">
              View All
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-8">
            {/* Search */}
            <div
              className="input-group search-input-group-table mb-2 mb-md-0"
              // style={{
              //   maxWidth: "300px",
              //   backgroundColor: "#fff",
              //   border: "1px solid #e5e5e5",
              // }}
            >
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-4 d-flex justify-content-start align-items-center flex-wrap">
            {/* Filter Dropdowns */}

            <div className="dropdown mr-2">
              <button
                className="btn btn-white dropdown-toggle border"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "0.85rem", color: "#666" }}
              >
                Filter Opt
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Option 1
                </a>
                <a className="dropdown-item" href="#">
                  Option 2
                </a>
                <a className="dropdown-item" href="#">
                  Option 3
                </a>
              </div>
            </div>

            <div className="dropdown mr-2">
              <button
                className="btn btn-white dropdown-toggle border"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "0.85rem", color: "#666" }}
              >
                Filter Opt
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Option A
                </a>
                <a className="dropdown-item" href="#">
                  Option B
                </a>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-white dropdown-toggle border"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "0.85rem", color: "#666" }}
              >
                Filter Opt
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Yes
                </a>
                <a className="dropdown-item" href="#">
                  No
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="row">
          {/* Card : Coach Meeting */}
          <div className="col-xl-3 col-md-6 col-12 mb-1">
            <div className="content-card p-0 overflow-hidden h-100 shadow-20-light">
              <div className="event-card-image-div">
                <img
                  src="https://images.unsplash.com/photo-1599943821034-8cb5c7526922?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card-image"
                  className="card-image"
                />
              </div>
              <div className="p-3">
                <div className="mb-3 d-flex">
                  <span className="event-badge-show bg-ongoing mr-2 flex-08">
                    Ongoing
                  </span>
                  <span className="event-badge-show bg-ah-fill flex-12">
                    Open For Staff Only
                  </span>
                </div>
                <h6 className="font-weight-bold mb-3 pb-2 border-bottom">
                  Coach Meeting
                </h6>
                <div className="d-flex align-items-center">
                  <div className="mr-3 text-center">
                    <h3 className="font-weight-bold mb-0 text-dark">01</h3>
                    <h6 className="font-weight-bold">Dec</h6>
                  </div>
                  <div className="small-font">
                    <div className="pb-1">
                      <i className="bi bi-geo-alt mr-1"></i> Head Coach Cabin
                    </div>
                    <div className="pb-1">
                      <i className="bi bi-clock mr-1"></i> 9:30 am - 1:30 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card : Coach Meeting */}
          <div className="col-xl-3 col-md-6 col-12 mb-1">
            <div className="content-card p-0 overflow-hidden h-100 shadow-20-light">
              <div className="event-card-image-div">
                <img
                  src="https://images.unsplash.com/photo-1670028514318-0ac718c0590d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card-image"
                  className="card-image"
                />
              </div>
              <div className="p-3">
                <div className="mb-3 d-flex">
                  <span className="event-badge-show bg-active mr-2">
                    Active
                  </span>
                  <span className="event-badge-show bg-ah-fill">
                    Open For Staff Only
                  </span>
                </div>
                <h6 className="font-weight-bold mb-3 pb-2 border-bottom">
                  Coach Meeting
                </h6>
                <div className="d-flex align-items-center">
                  <div className="mr-3 text-center">
                    <h3 className="font-weight-bold mb-0 text-dark">01</h3>
                    <h6 className="font-weight-bold">Dec</h6>
                  </div>
                  <div className="small-font">
                    <div className="pb-1">
                      <i className="bi bi-geo-alt mr-1"></i> Head Coach Cabin
                    </div>
                    <div className="pb-1">
                      <i className="bi bi-clock mr-1"></i> 9:30 am - 1:30 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card : Coach Meeting */}
          <div className="col-xl-3 col-md-6 col-12 mb-1">
            <div className="content-card p-0 overflow-hidden h-100 shadow-20-light">
              <div className="event-card-image-div">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card-image"
                  className="card-image"
                />
              </div>
              <div className="p-3">
                <div className="mb-3 d-flex">
                  <span className="event-badge-show bg-cancelled mr-2">
                    Cancelled
                  </span>
                  <span className="event-badge-show bg-ah-fill">
                    Open For Staff Only
                  </span>
                </div>
                <h6 className="font-weight-bold mb-3 pb-2 border-bottom">
                  Coach Meeting
                </h6>
                <div className="d-flex align-items-center">
                  <div className="mr-3 text-center">
                    <h3 className="font-weight-bold mb-0 text-dark">01</h3>
                    <h6 className="font-weight-bold">Dec</h6>
                  </div>
                  <div className="small-font">
                    <div className="pb-1">
                      <i className="bi bi-geo-alt mr-1"></i> Head Coach Cabin
                    </div>
                    <div className="pb-1">
                      <i className="bi bi-clock mr-1"></i> 9:30 am - 1:30 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card : Coach Meeting */}
          <div className="col-xl-3 col-md-6 col-12 mb-1">
            <div className="content-card p-0 overflow-hidden h-100 shadow-20-light">
              <div className="event-card-image-div">
                <img
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card-image"
                  className="card-image"
                />
              </div>
              <div className="p-3">
                <div className="mb-3 d-flex">
                  <span className="event-badge-show bg-draft mr-2">Draft</span>
                  <span className="event-badge-show bg-ah-fill">
                    Open For Staff Only
                  </span>
                </div>
                <h6 className="font-weight-bold mb-3 pb-2 border-bottom">
                  Coach Meeting
                </h6>
                <div className="d-flex align-items-center">
                  <div className="mr-3 text-center">
                    <h3 className="font-weight-bold mb-0 text-dark">01</h3>
                    <h6 className="font-weight-bold">Dec</h6>
                  </div>
                  <div className="small-font">
                    <div className="pb-1">
                      <i className="bi bi-geo-alt mr-1"></i> Head Coach Cabin
                    </div>
                    <div className="pb-1">
                      <i className="bi bi-clock mr-1"></i> 9:30 am - 1:30 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
