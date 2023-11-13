import { ToastContainer, toast } from "react-toastify";
const URL = "https://655106ab7d203ab6626e742a.mockapi.io/carlist";

// Function to handle adding a new car
class CarAPI {
  // API call will go here

  //HandleAddCar POST method / begin
  handleAddCar = (newCar) => {
    // Add a new car via a POST request
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((response) => {
        console.log(`response:`, response);
        return response.json();
      })
      .then((addedCar) => {
        console.log(`handleAddCar: after fetch has ran`, addedCar);
        // Add the new car to the car list
        //setCars((prevCars) => [...prevCars, addedCar]);
        toast.success("Car added successfully");
      })
      .catch((error) => {
        console.error("Error adding car:", error);
        toast.error("Error adding car");
      });
  };
  //HandleAddCar POST method / end

  //HandleEditCar PUT method / begin

  //HandleEditCar PUT method / end
}

export const myCarAPI = new CarAPI();
