// src/components/AddCarForm.js
import React, { useState } from 'react';

// Component for adding a new car with a form
const AddCarForm = ({ onSubmit }) => {

  // State variables to track input values
const [carName, setCarName] = useState('');
const [imgUrl, setImgUrl] = useState('');
const [carDescription, setCarDescription] = useState('');

  // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Call the onSubmit prop with the entered data
    onSubmit({ carName, imgUrl, carDescription });

    // Reset state variables to clear the form
    setCarName('');
    setImgUrl('');
    setCarDescription('');
};

return (
    // Form element with controlled inputs
    <form onSubmit={handleSubmit}>
        
      {/* Input for car name */}
    <div className="form-group">
        <label htmlFor="carName">Car Name</label>
        <input
        type="text"
        className="form-control"
        id="carName"
        placeholder="Enter car name"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
        required
        />
    </div>
      {/* Input for image URL */}
    <div className="form-group">
        <label htmlFor="imgUrl">Image URL</label>
        <input
        type="url"
        className="form-control"
        id="imgUrl"
        placeholder="Enter image URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        required
        />
    </div>
      {/* Textarea for car description */}
    <div className="form-group">
        <label htmlFor="carDescription">Car Description</label>
        <textarea
        className="form-control"
        id="carDescription"
        rows="3"
        value={carDescription}
        onChange={(e) => setCarDescription(e.target.value)}
        required
        ></textarea>
    </div>
      {/* Submit button */}
      <div>
      <br></br>
    <button type="submit" className="btn btn-primary">
        Add Car
    </button> 
    
    </div>
    </form>
);
};

export default AddCarForm;
