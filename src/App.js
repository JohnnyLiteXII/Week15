/*

Coding Steps:
Using the Houses API, or any open API of your choice you can find online, create a single page that allows for all 4 CRUD operations to be performed on a resource from the API.
Create a React component (or more, if needed) to represent the resource.
Make all forms and other necessary UI pieces their own components as reasonable.

*/
import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/NavBar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import EditCarForm from './components/EditCarForm';
import AddCarForm from './components/AddCarForm';
import CarCard from './components/CarCard';

const URL = "https://655106ab7d203ab6626e742a.mockapi.io/carlist";


const App = () => {

  // State to manage the list of cars
  const [cars, setCars] = useState([]);

  // State to manage the currently selected car for editing
  const [selectedCar, setSelectedCar] = useState(null);

  // State to manage loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load cars from the API on component mount
  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch cars from the API
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No Car');
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Function to handle editing a car
  const handleEditCar = (car) => {

    // Update the car data via a PUT request
    fetch(`${URL}/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then((response) => response.json())
      .then((updatedCar) => {
        // Update the car list with the edited car
        setCars((prevCars) =>
          prevCars.map((c) => (c.id === updatedCar.id ? updatedCar : c))
        );
        setSelectedCar(null);
        toast.success('Car updated successfully');
      })
      .catch((error) => {
        console.error('Error updating car:', error);
        toast.error('Error updating car');
      });
  };

  // Function to handle deleting a car
  const handleDeleteCar = (carId) => {

    // Delete the car via a DELETE request
    fetch(`${URL}/${carId}`, {
      method: 'DELETE',
    })
      .then(() => {

        // Remove the deleted car from the car list
        setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
        toast.success('Car deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting car:', error);
        toast.error('Error deleting car');
      });
  };

  // Function to handle adding a new car

  const handleAddCar = (newCar) => {

    // Add a new car via a POST request
    fetch('https://655106ab7d203ab6626e742a.mockapi.io/carlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    })
      .then((response) => response.json())
      .then((addedCar) => {

        // Add the new car to the car list
        setCars((prevCars) => [...prevCars, addedCar]);
        toast.success('Car added successfully');
      })
      .catch((error) => {
        console.error('Error adding car:', error);
        toast.error('Error adding car');
      });
  };

  return (
    <div className="App">

      {/* Display toasts for notifications */}
      <ToastContainer position="top-right" />

      {/* Render the Navbar */}
      <div class="container-fluid">
        <Navbar />
      </div>
      <br />
      <div class="container">
      <h1 class="text-center">Car App</h1>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">

            {/* AddCarForm component for adding new cars */}
            <AddCarForm onAddCar={handleAddCar} />

          </div>
        </div>
        <div className="row">
          {/* Conditional rendering based on loading and error states */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            /* CarCard components for displaying each car */
            cars.map((car) => (
              
              <CarCard
                key={car.id}
                car={car}
                onEdit={() => setSelectedCar(car)}
                onDelete={() => handleDeleteCar(car.id)}
              />
            ))
          )}
        </div>
      </div>
      
      {/* EditCarForm component for editing selected car */}
      {selectedCar && (
        <EditCarForm
          car={selectedCar}
          onSave={handleEditCar}
          onCancel={() => setSelectedCar(null)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default App;
