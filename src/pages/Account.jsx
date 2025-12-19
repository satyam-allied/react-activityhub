import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="main-content">
      {/* --- Breadcrumbs --- */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <div className="page-title">Account</div>
          </div>
          <div className="breadcrumb-custom">
            breadcrumbs \ breadcrumbs \ breadcrumbs \{" "}
            {/* Changed font-weight-bold to fw-bold */}
            <span className="text-dark fw-bold">Accounts</span>
          </div>
        </div>
      </div>

      {/* --- Bootstrap 5 Nav Tabs --- */}
      <div className="row mb-4">
        <div className="col-12">
          <ul
            className="nav nav-pills nav-fill profile-nav-pills"
            id="profileTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="about-tab"
                // Changed data-toggle to data-bs-toggle
                data-bs-toggle="tab"
                href="#about"
                role="tab"
                aria-controls="about"
                aria-selected="true"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="activity-tab"
                // Changed data-toggle to data-bs-toggle
                data-bs-toggle="tab"
                href="#activity"
                role="tab"
                aria-controls="activity"
                aria-selected="false"
              >
                Activity
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="attendance-tab"
                // Changed data-toggle to data-bs-toggle
                data-bs-toggle="tab"
                href="#attendance"
                role="tab"
                aria-controls="attendance"
                aria-selected="false"
              >
                Attendance
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="leave-tab"
                // Changed data-toggle to data-bs-toggle
                data-bs-toggle="tab"
                href="#leave"
                role="tab"
                aria-controls="leave"
                aria-selected="false"
              >
                Leave
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="dummy1-tab"
                // Changed data-toggle to data-bs-toggle
                data-bs-toggle="tab"
                href="#dummy1"
                role="tab"
                aria-controls="dummy1"
                aria-selected="false"
              >
                Dummy
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="dummy2-tab"
                // Changed data-toggle to data-bs-toggle
                data-bs-toggle="tab"
                href="#dummy2"
                role="tab"
                aria-controls="dummy2"
                aria-selected="false"
              >
                Dummy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Tab Content --- */}
      <div className="tab-content" id="profileTabContent">
        {/* 1. ABOUT TAB */}
        <div
          className="tab-pane fade show active"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className="content-card shadow-20-light p-4">
            {/* Changed font-weight-bold to fw-bold */}
            <h5 className="mb-4 fw-bold" style={{ fontSize: "1rem" }}>
              Personal Details
            </h5>

            <div className="row">
              {/* Left Column: Avatar & Side Menu */}
              {/* Changed border-right-lg to border-end-lg */}
              <div className="col-lg-3 mb-4 mb-lg-0 border-end-lg">
                <div className="text-center mb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
                    alt="Albus Dumbledore"
                    className="rounded-circle mb-3 profile-img"
                  />
                </div>

                {/* Status */}
                <div className="d-flex align-items-center justify-content-between mb-4 px-2">
                  <span className="text-muted small">Status:</span>
                  <span className="badge badge-approve px-4 py-2">Active</span>
                </div>

                {/* Vertical Menu */}
                <div className="profile-side-menu">
                  <div className="py-2 text-muted font-weight-500 mb-2">
                    <Link to="#">Edit Profile</Link>
                  </div>

                  <div className="py-2 text-muted font-weight-500">
                    <Link to="#">Password & Security</Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Information Grid */}
              {/* Changed pl-lg-5 to ps-lg-5 */}
              <div className="col-lg-9 ps-lg-5">
                <div className="row">
                  {/* Row 1 */}
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Name
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">
                      Albus Dumbledore
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Date of Birth
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">August, 27 1954</div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Gender
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">Male</div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">Age</label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">68</div>
                  </div>

                  {/* Row 2 */}
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Country
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">USA</div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      State
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">New York</div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      City
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">Manhattan</div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Address
                    </label>
                    <div
                      // Changed font-weight-bold to fw-bold
                      className="fw-bold small-font-14"
                      style={{ lineHeight: "1.4" }}
                    >
                      1600 Pennsylvania Avenue
                      <br />
                      NW Washington, D.C. 20500
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Time Zone
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">
                      America/st_Johns
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Contact Number
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">+1 888 888 888</div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="text-muted small d-block mb-1">
                      Email
                    </label>
                    {/* Changed font-weight-bold to fw-bold */}
                    <div className="fw-bold small-font-14">
                      Headmaster@Hogwarts.com
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="col-12 mt-2">
                    <label className="text-muted small d-block mb-2">Bio</label>
                    <p
                      className="small"
                      style={{
                        lineHeight: "1.6",
                        textAlign: "justify",
                        color: "var(--ah-black-20)",
                      }}
                    >
                      As the Super Admin, I oversee the entire operational
                      integrity and strategic direction of this platform. My
                      core responsibilities include system architecture design,
                      data security protocols, and high-level user management to
                      ensure a seamless experience for all members. I am the
                      final authority on all technical decisions and policy
                      enforcement. My focus is maintaining a stable, secure, and
                      future-ready environment that supports our community's
                      growth. Please direct high-priority, system-level
                      inquiries to this channel.
                      <br></br>
                      As the Super Admin, I oversee the entire operational
                      integrity and strategic direction of this platform. My
                      core responsibilities include system architecture design,
                      data security protocols, and high-level user management to
                      ensure a seamless experience for all members. I am the
                      final authority on all technical decisions and policy
                      enforcement. My focus is maintaining a stable, secure, and
                      future-ready environment that supports our community's
                      growth. Please direct high-priority, system-level
                      inquiries to this channel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. ACTIVITY TAB (Dummy) */}
        <div
          className="tab-pane fade"
          id="activity"
          role="tabpanel"
          aria-labelledby="activity-tab"
        >
          <div className="content-card shadow-20-light p-4">
            <h5>Activity Content</h5>
          </div>
        </div>

        {/* 3. ATTENDANCE TAB (Dummy) */}
        <div
          className="tab-pane fade"
          id="attendance"
          role="tabpanel"
          aria-labelledby="attendance-tab"
        >
          <div className="content-card shadow-20-light p-4">
            <h5>Attendance Content</h5>
          </div>
        </div>

        {/* 4. LEAVE TAB (Dummy) */}
        <div
          className="tab-pane fade"
          id="leave"
          role="tabpanel"
          aria-labelledby="leave-tab"
        >
          <div className="content-card shadow-20-light p-4">
            <h5>Leave Content</h5>
          </div>
        </div>

        {/* 5. DUMMY TABS */}
        <div
          className="tab-pane fade"
          id="dummy1"
          role="tabpanel"
          aria-labelledby="dummy1-tab"
        >
          <div className="content-card shadow-20-light p-4">
            <h5>Dummy 1 Content</h5>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="dummy2"
          role="tabpanel"
          aria-labelledby="dummy2-tab"
        >
          <div className="content-card shadow-20-light p-4">
            <h5>Dummy 2 Content</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;