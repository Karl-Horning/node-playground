var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// index
app.get('/', (req, res) => {
    res.render('index');
});

// Run the server
app.listen(5000, () => console.log('The server is running on port 5000.'));