import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './MailPage.css';

const MailPage = () => {
  const [toEmail, setToEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: toEmail, 
      to_name: toEmail, 
      from_name: "OrangeCyberdefense",
      message: message,
    };
    

    emailjs.send(
      '', // Service ID
      '', // Template ID
      templateParams,
      '' // Public Key
    ).then(
      (response) => {
        console.log('✅ E-mail sendt!', response.status, response.text);
        setSuccess('E-mailen er sendt!');
        setError('');
        setToEmail('');
        setMessage('');
      },
      (err) => {
        console.error('❌ FEJL ved e-mail:', err);
        setError('Der opstod en fejl, prøv igen.');
        setSuccess('');
      }
    );
  };

  return (
    <div className="mail-container">
      <h2>Send en mail</h2>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={sendEmail}>
        <label>Email adresse:</label>
        <input
          type="email"
          name="to_email"
          placeholder="Indtast e-mail"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
          required
        />

        <label>Besked:</label>
        <textarea
          name="message"
          placeholder="Skriv din besked her..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send e-mail</button>

        <button 
  onClick={() => window.location.href = "/AdminPage"} 
  style={{
    backgroundColor: 'red', 
    color: 'white', 
    border: 'none', 
    padding: '10px 20px', 
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    borderRadius: '5px'
  }}
>
  Back to Admin
</button>

      </form>
    </div>
  );
};

export default MailPage;

