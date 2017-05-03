let compression = require('compression');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

app.use(compression());
const port = 8000;

let index = require('./routes/index');
let tasks = require('./routes/tasks');
let orders = require('./routes/orders');

// View Engine
app.set('viwes', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder(Angular Code)
app.use(express.static(path.join(__dirname, 'client')));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tasks);
app.use('/api', orders);


app.listen(port, () => {
  console.log('Server Started on port: ' + port);
});
