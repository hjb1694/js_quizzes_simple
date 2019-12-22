const express = require('express');
const {PORT} = require('./config/config');
const path = require('path');
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views/');
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/quiz', require('./routes/quizzes'));
app.use(require('./routes/general'));


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));