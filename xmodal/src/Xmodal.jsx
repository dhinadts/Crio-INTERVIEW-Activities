import React, { useState } from "react";
import './Xmodal.css';
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

  function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  function validatePhone(phone) {
    return phone.length === 10 && !isNaN(phone);
  }
  function validateDOB(dob) {
    if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) return false;
    const [day, month, year] = dob.split("-").map(Number);
    const enteredDate = new Date(year, month - 1, day);
    const today = new Date();
    return enteredDate < today;
  }

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
      alert("Invalid date of birth. Date of birth cannot be in the future.");
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
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleClickOpen}>Open Form</button>

      {open && (
        <div
          className="modal"
          onClick={handleClose} // Close on outside click
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close on inner click
          >
            <h2>Fill Details</h2>
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
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="dd-mm-yyyy"
                  required
                  style={{ width: "100%", margin: "8px 0" }}
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dob: e.target.value,
                    })
                  }
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
