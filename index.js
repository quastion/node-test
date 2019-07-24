const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/components', express.static('components'));

app.get('/', function(req, res) {
  console.log(`Запрос с адреса: ${req.url}`);
  res.render('index');
});

app.listen(3001);
