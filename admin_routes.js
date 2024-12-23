const adminRoutes = express.Router();

adminRoutes.get('/stats', (req, res) => {
    const query = `SELECT COUNT(*) AS total_patients FROM patients;`;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results[0]);
        }
    });
});

app.use('/admin', adminRoutes);