var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// index
app.get('/', (req, res) => {
    res.render('index');
});

// graph
app.get('/graph', (req, res) => {
    res.render('graph');
});

// 404
app.get('*', (req, res) => {
    res.send('404! :(');
});

// Run the server
app.listen(5000, () => console.log('The server is running on port 5000.'));