const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/games', (req, res) => {
    res.render('games');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/puzzle', (req, res) => {
    res.render('games/puzzle');
});

app.get('/clm', (req, res) => {
    res.render('games/color-match');
});

app.get('/guess-number', (req, res) => {
    res.render('games/guess-number');
});

app.get('/sliding-puzzle', (req, res) => {
    res.render('games/sliding-puzzle');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 