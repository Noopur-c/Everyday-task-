const doctorRoutes = express.Router();
doctorRoutes.get('/:id/profile', async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).send('Doctor not found');
  res.send(doctor);
});

doctorRoutes.get('/:id/appointments', async (req, res) => {
  const appointments = await Appointment.find({ doctorId: req.params.id, status: 'pending' });
  res.send(appointments);
});