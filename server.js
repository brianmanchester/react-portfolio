const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const htmlRoutes = require('./controllers/html_routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/public")));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/', htmlRoutes);

app.listen(PORT, console.log(`Listening on port: ${PORT}`));
