import React, { useState } from 'react';

const CareerForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        hobbies: '',
        interests: '',
        academicStrengths: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="hobbies">Hobbies:</label>
            <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} />

            <label htmlFor="interests">Interests:</label>
            <input type="text" name="interests" value={formData.interests} onChange={handleChange} />

            <label htmlFor="academicStrengths">Academic Strengths:</label>
            <input type="text" name="academicStrengths" value={formData.academicStrengths} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    );
};

export default CareerForm;
