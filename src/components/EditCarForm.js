// src/components/EditCarForm.js
import React, { useState } from 'react';

const EditCarForm = ({ car, onSave, onCancel }) => {
  // State to manage the edited car details
const [editedCar, setEditedCar] = useState({ ...car });

  // Handle input changes
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCar({ ...editedCar, [name]: value });
};

  // Handle form submission
const handleSave = () => {
    onSave(editedCar);
};

return (
    <div className="modal-body">
    <form>
        <div className="form-group">
        <label htmlFor="editCarName">Car Name</label>
        <input
            type="text"
            className="form-control"
            id="editCarName"
            name="carName"
            value={editedCar.carName}
            onChange={handleInputChange}
            placeholder="Car Name"
        />
        </div>
        <div className="form-group">
        <label htmlFor="editImgUrl">Image URL</label>
        <input
            type="text"
            className="form-control"
            id="editImgUrl"
            name="imgUrl"
            value={editedCar.imgUrl}
            onChange={handleInputChange}
            placeholder="Image URL"
        />
        </div>
        <div className="form-group">
        <label htmlFor="editCarDescription">Car Details</label>
        <textarea
            className="form-control"
            id="editCarDescription"
            name="carDescription"
            value={editedCar.carDescription}
            onChange={handleInputChange}
            rows="3"
            placeholder="Car Details"
        ></textarea>
        </div>
    </form>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
        Save Changes
        </button>
    </div>
    </div>
);
};

export default EditCarForm;
