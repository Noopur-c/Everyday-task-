const adminRoutes = express.Router();
adminRoutes.get('/stats', async (req, res) => {
  const patientsCount = await Patient.countDocuments();
  const doctorsCount = await Doctor.countDocuments();
  const totalAppointments = await Appointment.countDocuments();
  res.send({ patientsCount, doctorsCount, totalAppointments });
});

adminRoutes.get('/doctors', async (req, res) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});

adminRoutes.get('/patients', async (req, res) => {
  const patients = await Patient.find();
  res.send(patients);
});