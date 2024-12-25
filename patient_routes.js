const patientRoutes = express.Router();
patientRoutes.get('/:id/profile', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) return res.status(404).send('Patient not found');
  res.send(patient);
});

patientRoutes.get('/:id/appointments', async (req, res) => {
  const appointments = await Appointment.find({ patientId: req.params.id });
  res.send(appointments);
});

patientRoutes.post('/:id/appointment', async (req, res) => {
  const { doctorId, slot } = req.body;
  const appointment = new Appointment({ patientId: req.params.id, doctorId, slot });
  await appointment.save();
  res.status(201).send(appointment);
});

patientRoutes.get('/:id/bills', async (req, res) => {
  const bills = await Bill.find({ patientId: req.params.id });
  res.send(bills);
});
