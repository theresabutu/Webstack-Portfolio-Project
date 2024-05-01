const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

// POST /api/career/recommendation
router.post('/recommendation', careerController.getCareerRecommendation);

module.exports = router;