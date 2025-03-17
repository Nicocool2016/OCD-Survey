import React, { useState } from 'react';
import './SurveyPage.css';

const SurveyPage = () => {
  const [answers, setAnswers] = useState({
    navn: '',
    efternavn: '',
    email: '',
    virksomhed: '',
    infrastruktur: false,
  });

  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnswers(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers)
      });

      if(response.ok) {
        setSubmitted(true);
      } else {
        alert('Error submitting survey');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An unexpected error occurred');
    }
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="survey-container">
      <h2>Spørgeskema</h2>

      {submitted ? (
        <div className="confirmation">
          <p>Tak for din besvarelse! Dine svar er blevet gemt.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Navn:</label>
          <input type="text" name="navn" value={answers.navn} onChange={handleChange} required />

          <label>Efternavn:</label>
          <input type="text" name="efternavn" value={answers.efternavn} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={answers.email} onChange={handleChange} required />

          <label>Virksomhed:</label>
          <input type="text" name="virksomhed" value={answers.virksomhed} onChange={handleChange} required />

          <label>Er du tilfreds med din nuværende infrastruktur?</label>
          <input type="checkbox" name="infrastruktur" checked={answers.infrastruktur} onChange={handleChange} />

          <button type="submit">Send svar</button>
        </form>
      )}
    </div>
  );
};

export default SurveyPage;
