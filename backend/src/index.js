const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const hbs = handlebars.create({ extname: '.hbs' });
const port = 3000;
const cors = require('cors');

const bodyParser = require('body-parser');
const router = require('./routes');
const db = require('./config/db');
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));    
app.use(express.static(path.join(__dirname, 'public')));
// connect to
db.connectDB;
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
