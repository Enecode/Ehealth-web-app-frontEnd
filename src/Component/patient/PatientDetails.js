import React, { useState, useEffect } from 'react';
import './PatientDetails.css';
function PatientDetail({ patient_id }) {
  const [patients, setPatients] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`https://imperfect-bite-pipeops-852f7cf2.pipeops.app/api/patients/`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient data');
        }
        const data = await response.json();
        
        setPatients(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchPatient();
  }, [patient_id]);

  if (isLoading) {
    return <div>Loading patient data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!patients) {
    return <div>No patient data found</div>;
  }

  return (
    <div className='detail'>
      <div className='card'>
          <h2>Patient Details</h2>
          {patients.map(patient => {
            return (
              <div className='individual-card'> 
                <p>Id: {patient.id}</p>
                <p>First Name: {patient.first_name}</p>
                <p>Last Name: {patient.last_name}</p>
                <p>Email: {patient.email}</p>
                <p>Address: {patient.address}</p>
                <p>Phone Number: {patient.phone_number}</p>
                <p>Date of Birth: {patient.date_of_birth}</p>
                <p>Gender: {patient.gender}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default PatientDetail;