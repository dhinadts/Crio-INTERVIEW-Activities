import React from "react";
import "./ExpenseDialog.css";

const ExpenseDialog = ({ showDialog = false, setShowDialog }) => {
  if (!showDialog) return null;
const handleSubmit = (val) => {
  localStorage.setItem('expenses', val.target.value);
}
  return (
    <div className="dialog-backdrop" onClick={() => {
      
      
      setShowDialog(false);}}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
      <label for="title" className="dialog-header">Add Expenses</label>


        <form className="dialog-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                id="price"
                name="price"
                placeholder="₹0"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <select id="category" name="category" required>
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="food">Food</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
              </select>
            </div>

            <div className="form-group">
              <input type="date" id="date" name="date" required />
            </div>
          </div>

          <div className="dialog-buttons">
            <button type="submit" className="dialog-btn submit-btn" onClick={handleSubmit} > 
              Add Expense
            </button>
            <button
              type="button"
              className="dialog-btn cancel-btn"
              onClick={() => setShowDialog(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseDialog;
