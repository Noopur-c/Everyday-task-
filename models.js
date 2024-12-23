const models = {
    getPatientById: (id, callback) => {
        db.query('SELECT * FROM patients WHERE id = ?', [id], callback);
    },
    getAppointmentsByPatientId: (patientId, callback) => {
        db.query('SELECT * FROM appointments WHERE patient_id = ?', [patientId], callback);
    },
    createAppointment: (data, callback) => {
        const query = 'INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?)';
        db.query(query, [data.patient_id, data.doctor_id, data.appointment_date, 'Pending'], callback);
    },
    getDoctorAppointments: (doctorId, callback) => {
        db.query('SELECT * FROM appointments WHERE doctor_id = ?', [doctorId], callback);
    }
};