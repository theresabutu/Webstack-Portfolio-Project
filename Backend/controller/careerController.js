const careerService = require('../services/careerService');

const careerController = {
    getCareerRecommendation: async (req, res) => {
        try {
            // Extract user input from request body
            const { hobbies, interests, academicStrengths } = req.body;

            // Call service function to get career recommendations based on user input
            const recommendedCareers = await careerService.getCareerRecommendation(hobbies, interests, academicStrengths);

            // Send response with recommended careers
            res.json({ careers: recommendedCareers });
        } catch (error) {
            console.error('Error fetching career recommendation:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = careerController;
