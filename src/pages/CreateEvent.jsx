import React from "react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div className="main-content">
      {/* --- Header --- */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-header">
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
              Create Event
            </h2>
          </div>
          <div className="breadcrumb-custom">
            dashboard \ events \{" "}
            <span className="font-weight-bold">Create Event</span>
          </div>
        </div>
      </div>

      {/* --- Form Container (Reusing content-card) --- */}
      <div className="content-card shadow-20-light p-4">
        
        {/* SECTION 1: Basic Information */}
        <h6 className="form-section-heading">Basic Information</h6>
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Title</label>
            <input
              type="text"
              className="form-control form-control-custom"
              placeholder="Enter Event Title"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Event Type</label>
            <select className="form-control form-control-custom">
              <option>Select Event Type</option>
              <option>Tournament</option>
              <option>Camp</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Organizer</label>
            <select className="form-control form-control-custom">
              <option>Select Organizer</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Visibility</label>
            <select className="form-control form-control-custom">
              <option>Select Visibility</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Status</label>
            <select className="form-control form-control-custom">
              <option>Select Event Status</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Tags</label>
            <select className="form-control form-control-custom">
              <option>Select Tags</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Site</label>
            <select className="form-control form-control-custom">
              <option>Select Site</option>
            </select>
          </div>
          <div className="col-md-8 mb-3">
            <label className="form-label-custom">Description</label>
            <input
              type="text"
              className="form-control form-control-custom"
              placeholder="Enter Description"
            />
          </div>
        </div>

        <hr className="form-divider" />

        {/* SECTION 2: Recurrence (Matching your specific image) */}
        <h6 className="form-section-heading">Set Custom Recurrence</h6>
        <div className="mb-4">
          {/* Days Checkboxes */}
          <div className="form-group mb-4">
            <label className="form-label-custom mb-2">Event Repeats On</label>
            <div className="d-flex flex-wrap align-items-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat'].map((day) => {
                const isChecked = ['Mon', 'Wed', 'Fri'].includes(day);
                return (
                  <div className="custom-control custom-checkbox mr-5 mb-2" key={day}>
                    <input 
                      type="checkbox" 
                      className="custom-control-input" 
                      id={`check-${day}`} 
                      defaultChecked={isChecked}
                    />
                    <label 
                      className="custom-control-label small" 
                      htmlFor={`check-${day}`}
                      style={{ paddingTop: '2px' }}
                    >
                      {day}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Date & Time Inputs */}
          <div className="row mb-2">
            <div className="col-md-4">
              <div className="form-group">
                <label className="form-label-custom">Start Date & Time</label>
                <div className="input-group input-group-custom">
                  <input 
                    type="text" 
                    className="form-control border-right-0" 
                    placeholder="Enter Start Date" 
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent border-left-0">
                      <i className="bi bi-clock mr-3 text-muted"></i>
                      <i className="bi bi-calendar4 text-dark"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group mb-1">
                <label className="form-label-custom">End Date & Time</label>
                <div className="input-group input-group-custom">
                  <input 
                    type="text" 
                    className="form-control border-right-0" 
                    placeholder="Enter Start Date" 
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent border-left-0">
                      <i className="bi bi-clock mr-3 text-muted"></i>
                      <i className="bi bi-calendar4 text-dark"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="custom-control custom-radio mt-2">
                <input type="radio" id="neverRadio" name="endRadio" className="custom-control-input" defaultChecked />
                <label className="custom-control-label text-muted small" htmlFor="neverRadio">Never</label>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <small style={{ color: '#28a745', fontWeight: '500', fontSize: '0.8rem' }}>
              * Event will occur at 08:00 am on every Monday, Wednesday & Friday, Until 01 January 2026
            </small>
          </div>
        </div>

        <hr className="form-divider" />

        {/* SECTION 3: Event Configuration */}
        <h6 className="form-section-heading">Event Configuration</h6>
        <div className="row mb-4">
          {[
            { label: "RSVP Enabled", sub: "Enables RSVP Tracking" },
            { label: "Allow Maybe", sub: "Allows 'Maybe' RSVPs" },
            { label: "Private Event", sub: "Restricts visibility to invited/assigned users" },
            { label: "Requires Approval", sub: "Enrollment requires organizer approval" },
            { label: "Enrollment", sub: "Allow enrollment/purchase ticket" },
            { label: "Has Options", sub: "Enables seasonal/track sessions" },
            { label: "Waitlist Enabled", sub: "Enables waitlist registration" }
          ].map((config, idx) => (
            <div className="col-lg-3 col-md-4 mb-3" key={idx}>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id={`switch-${idx}`} />
                <label className="custom-control-label font-weight-bold small" htmlFor={`switch-${idx}`}>
                  {config.label}
                </label>
              </div>
              <small className="text-muted d-block ml-5" style={{fontSize: '0.7rem', lineHeight: '1.2'}}>{config.sub}</small>
            </div>
          ))}
        </div>

        {/* SECTION 4: Policies & Capacity */}
        <h6 className="form-section-heading">Policies & Capacity</h6>
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Capacity Limit</label>
            <div className="input-group input-group-custom">
               <select className="form-control border-right-0"><option>Select Event Capacity</option></select>
               <div className="input-group-append"><span className="input-group-text">- +</span></div>
            </div>
            <small className="text-muted" style={{fontSize:'0.65rem'}}>Members capacity in an event</small>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">RSVP Close Offset</label>
            <input type="text" className="form-control form-control-custom" placeholder="Enter Offset Date & Time" />
            <small className="text-muted" style={{fontSize:'0.65rem'}}>RSVP closing time before event start</small>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label-custom">Cancellation Close Offset</label>
            <input type="text" className="form-control form-control-custom" placeholder="Enter Offset Date & Time" />
            <small className="text-muted" style={{fontSize:'0.65rem'}}>Cancellation window before event start</small>
          </div>
           <div className="col-md-4 mb-3">
              <label className="form-label-custom">Audience Policy</label>
              <select className="form-control form-control-custom"><option>Audience Policy</option></select>
           </div>
           <div className="col-md-4 mb-3">
              <label className="form-label-custom">Participants List Mode</label>
              <select className="form-control form-control-custom"><option>Select Participants List</option></select>
           </div>
           <div className="col-md-4 mb-3">
              <label className="form-label-custom">Participants Policy</label>
              <select className="form-control form-control-custom"><option>Participant Policy</option></select>
           </div>
           <div className="col-md-4 mb-3">
              <label className="form-label-custom">Show Counter</label>
              <select className="form-control form-control-custom"><option>Show Counter</option></select>
           </div>
        </div>

        {/* --- Footer Buttons --- */}
        <div className="d-flex justify-content-end pt-3 border-top">
          <Link to="/events" className="btn-cancel mx-4">Cancel</Link>
          <button className="btn-create ms-4">Save Event</button>
        </div>

      </div>
    </div>
  );
};

export default CreateEvent;