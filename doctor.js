const Doctor = mongoose.model('Doctor', new mongoose.Schema({
    name: String,
    department: String,
    availableSlots: [Date],
    appointments: [
      {
        patientId: mongoose.Schema.Types.ObjectId,
        status: { type: String, enum: ['pending', 'approved', 'completed', 'rejected'], default: 'pending' },
        slot: Date,
      },
    ],
  }));