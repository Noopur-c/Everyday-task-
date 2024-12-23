const doctorRoutes = express.Router();

doctorRoutes.get('/appointments/:id', (req, res) => {
    const doctorId = req.params.id;
    models.getDoctorAppointments(doctorId, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.use('/doctor', doctorRoutes);