const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const routes=require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use('/', routes.swagger);
app.use('/api/auth', routes.auth);
app.use('/api/contacts', routes.contacts);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const {status=500, message="Server error"}=err;
  res.status(status).json({ message });
});

module.exports = app;
