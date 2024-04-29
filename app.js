const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

dbURI = 'mongodb+srv://szenyita27:szenyita27@cluster0.jp4qmpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then(response => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.use('/blogs', blogRoutes);

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});