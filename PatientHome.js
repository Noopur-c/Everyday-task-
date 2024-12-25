import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPatientProfile, getPatientAppointments } from '../services/api';

const PatientHome = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const patientProfile = await getPatientProfile(id);
      setProfile(patientProfile);

      const patientAppointments = await getPatientAppointments(id);
      setAppointments(patientAppointments);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Welcome, {profile?.name}</h1>
      <h2>Your Appointments:</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            Appointment with Doctor {appointment.doctorId} at {appointment.slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientHome;
