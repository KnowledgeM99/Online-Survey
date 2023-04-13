const express = require('express');
const Feedback = require('../models/MySurveyModel');
const router = express.Router();


router.post('/feedback', async (req, res) => {
  const { ageRange, gender, feedback, checkboxes, dropdownValue } = req.body;
  const options = Object.entries(checkboxes).map(([name, value]) => ({ name, value }));

  const newFeedback = new Feedback({ ageRange, gender, feedback, options, dropdownValue });

  try {
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save feedback' });
  }
});

router.get('/feedback', async (req, res) => {
  try {
        const feedback = await Feedback.find();
        res.json(feedback);
      } catch (error) {
        res.status(501).json({ error: error.message });
      }
});

module.exports = router;


