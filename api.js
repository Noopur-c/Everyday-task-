import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getPatientProfile = async (id) => {
  const response = await axios.get(`${API_URL}/patients/${id}/profile`);
  return response.data;
};

export const getPatientAppointments = async (id) => {
  const response = await axios.get(`${API_URL}/patients/${id}/appointments`);
  return response.data;
};

// Add similar functions for doctors and admin as needed.
