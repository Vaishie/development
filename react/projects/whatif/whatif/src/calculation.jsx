import React, { useState } from "react";
import "./Calculation.css";

export default function Calculation() {
  const cities = ["Bangalore", "Barcelona", "Bhubaneswar", "Goa", "London", "Los Angeles", "New York", "Paris", "San Francisco", "Sydney", "Tokyo"];
  const lifestyles = ["Minimalis", "Basic", "Balanced", "Comfortable", "Luxury"];

  const [formData, setFormData] = useState({
    currentCity: "",
    desiredCity: "",
    salary: "",
    lifestyle: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="calculation-container">
      <div className="calculation-row">
        <div className="input-group">
          <label>Current City</label>
          <select
            name="currentCity"
            value={formData.currentCity}
            onChange={handleChange}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Desired City</label>
          <select
            name="desiredCity"
            value={formData.desiredCity}
            onChange={handleChange}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
            <br/>
      <div className="calculation-row">
        <div className="input-group">
          <label>Monthly Salary</label>
          <input
            type="number"
            placeholder="Enter your salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Lifestyle</label>
          <select
            name="lifestyle"
            value={formData.lifestyle}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {lifestyles.map((life) => (
              <option key={life} value={life}>
                {life}
              </option>
            ))}
          </select>
        </div>
      </div>
            <br/> <br/> <br/>
      <div className="button-row">
        <button>Explore Cities</button>
        <button>Surprise Me</button>
        <button>Simulate</button>
      </div>
    </div>
  );
}
