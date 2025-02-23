const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Cook', 'Cleaner', 'Plumber', 'Security Guard', 'Technician', 'Carpenter'], 
    required: true 
  },
  //field: { type: String, required: true }, 
  phone: { type: String, required: true },
  location: { type: String, required: true },
  charge: { type: Number, required: true } 
});

module.exports = mongoose.model('User', UserSchema);
