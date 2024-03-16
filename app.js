const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {productRoutes} = require('./routes');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: true, credentials: true}));

app.get('/awake', (req, res) => {
  res.json();
});

app.use(`/products`, productRoutes);

// All other GET requests not handled before will return simple HTML
app.use((req, res, next) => {
  res.status(200).setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
