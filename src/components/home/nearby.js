import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const NearbyHospitals = () => {
  const [hospitals] = useState([
    { id: 1, name: 'Hospital A', address: '123 Main Street' },
    { id: 2, name: 'Hospital B', address: '456 Elm Street' },
    { id: 3, name: 'Hospital C', address: '789 Oak Avenue' },
  ]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/find-hospitals'); // Navigate to /find-hospitals on button click
  };

  return (
    <div className="nearby-hospitals">
      <h2>Nearby Hospitals</h2>
      <button onClick={handleClick}>Find Hospitals</button>
      {hospitals.length > 0 ? (
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id}>
              <h3>{hospital.name}</h3>
              <p>{hospital.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No nearby hospitals found.</p>
      )}
    </div>
  );
};

export default NearbyHospitals;
