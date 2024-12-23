const patientRoutes = express.Router();

patientRoutes.get('/profile/:id', (req, res) => {
    const patientId = req.params.id;
    models.getPatientById(patientId, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Patient not found' });
        } else {
            res.json(results[0]);
        }
    });
});

patientRoutes.get('/appointments/:id', (req, res) => {
    const patientId = req.params.id;
    models.getAppointmentsByPatientId(patientId, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

patientRoutes.post('/take_appointment', (req, res) => {
    const appointmentData = req.body;
    models.createAppointment(appointmentData, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(201).json({ message: 'Appointment request submitted successfully', id: results.insertId });
        }
    });
});

app.use('/patient', patientRoutes);