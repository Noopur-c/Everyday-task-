import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DoctorHome = () => {
  const { id } = useParams(); // Doctor ID from the URL
  const [profile, setProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const profileResponse = await axios.get(`http://localhost:5000/api/doctors/${id}/profile`);
        setProfile(profileResponse.data);

        const appointmentsResponse = await axios.get(`http://localhost:5000/api/doctors/${id}/appointments`);
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {profile && (
        <div>
          <h2>Welcome, Dr. {profile.name}</h2>
          <p>Department: {profile.department}</p>
        </div>
      )}
      <h2>Pending Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            Patient ID: {appointment.patientId}, Slot: {new Date(appointment.slot).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorHome;
