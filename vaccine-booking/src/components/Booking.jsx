import React, { useState } from "react";
import "../styles/Booking.css";

const CenterList = ({ onSelect }) => {
  const centers = ["Center A", "Center B", "Center C"];

  return (
    <div>
    <label>Select a Center:</label>
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a center</option>
      {centers.map((center, index) => (
        <option key={index} value={center}>
          {center}
        </option>
      ))}
    </select>
  </div>
  );
};

const DateTimePicker = ({ onSelect }) => {
  return (
    <div>
      <label>Date and Time:</label>
      <input
        type="date"
        placeholder="Select date and time"
        onChange={(e) => onSelect(e.target.value)}
      />
    </div>
  );
};

const Booking = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);

  const handleCenterSelection = (center) => {
    setSelectedCenter(center);
  };

  const handleDateTimeSelection = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const handleBookingSubmit = () => {
     setBookingConfirmed(true);
  };

  return (
    <div>
      {!isBookingConfirmed ? (
        <div>
          <h1>Vaccine Booking</h1>
          <h2>1. Select a Center:</h2>
          <CenterList onSelect={handleCenterSelection} />

          <h2>2. Choose Date and Time:</h2>
          <DateTimePicker onSelect={handleDateTimeSelection} />

          <h2>3. Enter Personal Details:</h2>
 
          <button onClick={handleBookingSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h1>Booking Confirmed!</h1>
         </div>
      )}
    </div>
  );
};

export default Booking;
