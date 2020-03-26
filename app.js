require('dotenv').config().parsed
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
const cors = require('cors');

app.use(cors());
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var models = require('./models');

models.sequelize.sync().then(function() {
  console.log('Nice, DB looks good');
}).catch(function(err){
  console.log(err, 'Something wrong with db Update')
})

require('./routes')(app);


const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;