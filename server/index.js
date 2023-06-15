// index.js
const express = require('express');
const dotenv = require('dotenv')
const { google } = require('googleapis');

dotenv.config({})

const app = express();
const port = process.env.PORT || 8000;

const auth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL,
)

const scopes = [
  'https://www.googleapis.com/auth/calendar'
]

app.get('/google', (req, res) => {
  const url = auth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  res.redirect(url)
})

app.get('/google/redirect', (req, res) => {
  console.log(req.query)
  res.send("It's Working")
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
