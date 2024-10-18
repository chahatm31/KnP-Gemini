// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State variables for mass, height, velocity, and gravity
  const [mass, setMass] = useState(1);
  const [height, setHeight] = useState(1);
  const [velocity, setVelocity] = useState(0);
  const [gravity, setGravity] = useState(9.81);

  // State variables for kinetic and potential energy
  const [kineticEnergy, setKineticEnergy] = useState(0);
  const [potentialEnergy, setPotentialEnergy] = useState(0);

  // Update energy calculations whenever mass, height, or velocity changes
  useEffect(() => {
    const newKineticEnergy = 0.5 * mass * Math.pow(velocity, 2);
    const newPotentialEnergy = mass * gravity * height;
    setKineticEnergy(newKineticEnergy);
    setPotentialEnergy(newPotentialEnergy);
  }, [mass, height, velocity, gravity]);

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "mass") setMass(parseFloat(value));
    if (name === "height") setHeight(parseFloat(value));
    if (name === "velocity") setVelocity(parseFloat(value));
    if (name === "gravity") setGravity(parseFloat(value));
  };

  // Function to reset values
  const resetValues = () => {
    setMass(1);
    setHeight(1);
    setVelocity(0);
    setGravity(9.81);
  };

  return (
    <div className="container">
      <h1>Kinetic and Potential Energy Calculator</h1>
      <div className="inputs">
        <div>
          <label htmlFor="mass">Mass (kg):</label>
          <input
            type="number"
            id="mass"
            name="mass"
            value={mass}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height (m):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="velocity">Velocity (m/s):</label>
          <input
            type="number"
            id="velocity"
            name="velocity"
            value={velocity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gravity">Gravity (m/s²):</label>
          <input
            type="number"
            id="gravity"
            name="gravity"
            value={gravity}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="outputs">
        <div>Kinetic Energy: {kineticEnergy.toFixed(2)} J</div>
        <div>Potential Energy: {potentialEnergy.toFixed(2)} J</div>
      </div>
      <button onClick={resetValues}>Reset</button>
    </div>
  );
}

export default App;
