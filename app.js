const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files (e.g. CSS files)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/menu', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/menu.html'));
});


app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});


app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});


app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});