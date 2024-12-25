const Bill = mongoose.model('Bill', new mongoose.Schema({
    appointmentId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    date: { type: Date, default: Date.now },
  }));