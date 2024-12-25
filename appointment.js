const Appointment = mongoose.model('Appointment', new mongoose.Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    doctorId: mongoose.Schema.Types.ObjectId,
    status: { type: String, enum: ['pending', 'approved', 'completed', 'rejected'], default: 'pending' },
    slot: Date,
  }));