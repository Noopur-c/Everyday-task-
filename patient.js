const Patient = mongoose.model('Patient', new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    address: String,
    medicalHistory: [String],
    feedback: [
      {
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now },
      },
    ],
  }));
  