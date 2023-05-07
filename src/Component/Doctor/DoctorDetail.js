import React, { useState, useEffect } from 'react';


function DoctorDetails({ doctor_id }) {
    const [doctor, setDoctors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`https://imperfect-bite-pipeops-852f7cf2.pipeops.app/api/doctors/`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient data');
        }
        const data = await response.json();
        
        setDoctors(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchDoctor();
  }, [doctor_id]);

  if (isLoading) {
    return <div>Loading doctor's data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!doctor) {
    return <div>No doctor data found</div>;
  }

  return (
    <div className='detail'>
      <div className='card'>
          <h2>Doctor's Details</h2>
          {doctor.map(doctors => {
            return (
              <div className='individual-card'> 
                <p>Id: {doctors.id}</p>
                <p>First Name: {doctors.first_name}</p>
                <p>Last Name: {doctors.last_name}</p>
                <p>Email: {doctors.email}</p>
                <p>Address: {doctors.address}</p>
                <p>Phone Number: {doctors.phone_number}</p>
                <p>Date of Birth: {doctors.date_of_birth}</p>
                <p>Gender: {doctors.gender}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default DoctorDetails;