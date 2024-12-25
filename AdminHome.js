import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [stats, setStats] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const statsResponse = await axios.get('http://localhost:5000/api/admin/stats');
        setStats(statsResponse.data);

        const doctorsResponse = await axios.get('http://localhost:5000/api/admin/doctors');
        setDoctors(doctorsResponse.data);

        const patientsResponse = await axios.get('http://localhost:5000/api/admin/patients');
        setPatients(patientsResponse.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {stats && (
        <div>
          <h2>Clinic Statistics</h2>
          <p>Registered Patients: {stats.patientsCount}</p>
          <p>Registered Doctors: {stats.doctorsCount}</p>
          <p>Total Appointments: {stats.totalAppointments}</p>
        </div>
      )}
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            Dr. {doctor.name} - Department: {doctor.department}
          </li>
        ))}
      </ul>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>
            {patient.name} - ID: {patient._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminHome;
