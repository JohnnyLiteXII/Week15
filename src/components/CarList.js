import React from 'react';
import CarCard from './CarCard';

// Functional component representing a list of cars
const CarList = ({ cars, onEdit, onDelete }) => {
return (

    // Row container for the car grid
    <div className="row" id="car-grid">
      
      {/* Map through the list of cars and render a CarCard component for each car */}
        {cars.map((car) => (
        <CarCard key={car.id} car={car} onEdit={onEdit} onDelete={onDelete} />
    ))}
    </div>
);
};

export default CarList;