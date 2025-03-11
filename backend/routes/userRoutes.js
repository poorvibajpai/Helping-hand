const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// ✅ REGISTER ROUTE
router.post('/register', async (req, res) => {
  const { name, email, password, role, category, phone, location, charge } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create new user
    user = new User({ name, email, password, role, category, phone, location, charge });
    await user.save();

    // Generate JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error in register:', error.message);
    res.status(500).send('Server Error');
  }
});

// ✅ LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Compare password using the schema method
    const isMatch = await user.comparePassword(password);
    console.log('Entered password:', password);
    console.log('Stored password:', user.password);
    console.log('Password match:', isMatch);

    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Generate JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error in login:', error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
