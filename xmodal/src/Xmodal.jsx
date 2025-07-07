import React, { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";

function XModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const validateDOB = (dob) => {
    if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) return false; // dd-mm-yyyy

    const [day, month, year] = dob.split("-").map(Number);
    const enteredDate = new Date(year, month - 1, day);
    const today = new Date();
    return enteredDate < today; // must be in the past
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!validateDOB(formData.dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
      return;
    }

    console.log("Form Submitted:", formData);
    setFormData({
      username: "",
      email: "",
      dob: "",
      phone: "",
    });
  };

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        Open Form
      </button>

      {open && (
        <div className="modal-content">
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Fill the Form</DialogTitle>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  style={{ width: "100%", margin: "8px 0" }} // replaces fullWidth and dense margin
                  value={
                    formData.dob
                      ? (() => {
                          const [day, month, year] = formData.dob.split("-");
                          return `${year}-${month}-${day}`; // yyyy-mm-dd for input[type=date]
                        })()
                      : ""
                  }
                  onChange={(e) => {
                    const value = e.target.value; // yyyy-mm-dd
                    if (value) {
                      const [year, month, day] = value.split("-");
                      const formattedDate = `${day}-${month}-${year}`; // dd-mm-yyyy
                      setFormData({
                        ...formData,
                        dob: formattedDate,
                      });
                    }
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default XModal;
