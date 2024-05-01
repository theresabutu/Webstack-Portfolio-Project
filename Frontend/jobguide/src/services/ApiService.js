// Example using Axios for HTTP requests
import axios from 'axios';

const BASE_URL = 'http://your-backend-api.com'; // Replace with your actual backend API URL

const ApiService = {
    getCareerRecommendation: async (formData) => {
        try {
            const response = await axios.post(`${BASE_URL}/career/recommendation`, formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default ApiService;