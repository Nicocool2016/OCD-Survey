import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './SurveyCreator.css';

const SurveyCreator = ({ setRole }) => {
  const [email, setEmail] = useState('');
  const [surveyLink, setSurveyLink] = useState(null);

  const generateSurveyLink = () => {
    const uniqueId = Math.random().toString(36).substr(2, 9);
    const link = `http://localhost:3000/survey/${uniqueId}`;
    setSurveyLink(link);
    return link;
  };

  const sendSurveyEmail = () => {
    if (!email.includes('@')) {
      alert('Indtast en gyldig e-mailadresse.');
      return;
    }

    const link = generateSurveyLink();
    
    const templateParams = {
      to_email: email,
      survey_link: link
    };

    emailjs.send(
      '',   // Your EmailJS Service ID
      '',   // Your EmailJS Template ID
      templateParams,
      ''  // Your EmailJS Public Key
    ).then(
      (response) => {
        console.log("Email sendt!", response.status, response.text);
        alert("Spørgeskema sendt til " + email);
      },
      (err) => {
        console.error("Fejl ved email:", err);
        alert("Kunne ikke sende spørgeskema.");
      }
    );
  };

  return (
    <div className="survey-creator">
      <h2>Opret Spørgeskema</h2>
      
      <label>Email (modtager):</label>
      <input 
        type="email" 
        placeholder="Indtast modtagerens e-mail" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <button onClick={sendSurveyEmail}>Send spørgeskema</button>

      {surveyLink && (
        <p>Link til spørgeskema: 
          <a href={surveyLink} target="_blank" rel="noopener noreferrer">{surveyLink}</a>
        </p>
      )}

      <button style={{ backgroundColor: "red", color: "white" }} onClick={() => setRole('admin')}>
        Tilbage til Admin
      </button>
    </div>
  );
};

export default SurveyCreator;
