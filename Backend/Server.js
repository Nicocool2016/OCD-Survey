console.log("Server is starting...");

const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Correct Database Configuration
const dbConfig = {
    server: 'localhost',
    database: 'SurveyDB',
    user: 'sa',
    password: 'test123456789!', // your actual password here
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// ✅ Connect to Database
sql.connect(dbConfig)
    .then(() => {
        console.log('Connected to SQL Server ✅');
    })
    .catch(err => {
        console.error('Database connection error ❌:', err);
    });

// ✅ POST route to submit survey
app.post('/submit-survey', async (req, res) => {
    const { navn, efternavn, email, virksomhed, infrastruktur } = req.body;

    try {
        const request = new sql.Request();
        await request.input('navn', sql.NChar(100), navn)
                     .input('efternavn', sql.NChar(100), efternavn)
                     .input('email', sql.NChar(255), email)
                     .input('virksomhed', sql.NChar(255), virksomhed)
                     .input('infrastruktur', sql.Bit, infrastruktur)
                     .query(`
                        INSERT INTO SurveyResponses (Navn, Efternavn, Email, Virksomhed, Infrastruktur, SubmittedAt)
                        VALUES (@navn, @efternavn, @email, @virksomhed, @infrastruktur, GETDATE())
                    `);

        res.status(200).json({ message: 'Survey submitted successfully ✅' });
    } catch (err) {
        console.error('Insert error ❌:', err);
        res.status(500).json({ error: 'Error saving survey response.' });
    }
});

// ✅ GET route to fetch all responses (optional)
app.get('/survey-responses', async (req, res) => {
    try {
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM SurveyResponses');
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error('Fetch error ❌:', err);
        res.status(500).send('Failed to retrieve survey responses.');
    }
});

// ✅ Fix your GET route with random survey ID
app.get('/survey/:id', (req, res) => {
    const surveyId = req.params.id;
    res.send(`Survey ID requested is ${surveyId}`);
});

// ✅ Start your server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running successfully on http://localhost:${PORT} 🚀`);
});
