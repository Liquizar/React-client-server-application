const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  console.log(`Received user data: ${JSON.stringify(req.body)}`);
  // Simulate saving data to a database
  setTimeout(() => {
    res.status(200).send({ message: 'Data received successfully' });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

