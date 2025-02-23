const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Step 3

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Handle CORS issues

// Connect to MongoDB Atlas
mongoose.connect(process.env.Mongodb, {
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
