import React, { useState } from 'react';
import CareerForm from '../components/CareerForm';
import CareerResult from '../components/CareerResult';
import ApiService from '../services/ApiService';

const HomePage = () => {
    const [career, setCareer] = useState('');

    const handleSubmit = async (formData) => {
        try {
            const response = await ApiService.getCareerRecommendation(formData);
            setCareer(response.data.career);
        } catch (error) {
            console.error('Error fetching career recommendation:', error);
        }
    };

    return (
        <div>
            <h1>Find Your Career Path</h1>
            <CareerForm onSubmit={handleSubmit} />
            {career && <CareerResult career={career} />}
        </div>
    );
};

export default HomePage;
