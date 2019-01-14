const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const cors       = require('cors')

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
require('./routes')(app);

// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


//server
app.listen(3000, () => {
    console.log('Im running port 3000.');
});