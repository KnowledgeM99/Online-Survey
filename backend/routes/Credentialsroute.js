const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/LoginModel');

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password. Please try again.' });
    }

    const isValidPassword = await user.isValidPassword(password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password. Please try again.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET = 'hjds@w23dyw');

    res.cookie('jwt', token, { httpOnly: true });
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Signup
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET='hjds@w23dyw');

    res.cookie('jwt', token, { httpOnly: true });
    res.json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/user', async (req, res) => {
  try {
    
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET = 'hjds@w23dyw');


    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    res.json({ email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
