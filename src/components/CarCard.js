import React from 'react';

// Component for displaying a card with car information
const CarCard = ({ car, onEdit, onDelete }) => {
  return (

     // Bootstrap grid layout for responsiveness
    <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
      <div className="card">
        <img
          src={car.imgUrl}
          className="card-img-top"
          alt={`Car: ${car.carName}`}
        />
        <div className="card-body">
          <h5 className="card-title">{car.carName}</h5>
          <p className="card-text">{car.carDescription}</p>
        </div>
        <div className="card-footer">
          <button className="edit" onClick={() => onEdit(car)}>
            Edit
          </button>
          <button className="delete" onClick={() => onDelete(car)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;