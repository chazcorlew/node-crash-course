//instantiating I/O plugins
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Rant = require('./models/rant');
const { rawListeners } = require('./models/rant');
const { result } = require('lodash');


// express app
const app = express();



// connect to mongoDB
const dbURI = 'mongodb+srv://animeguy:the1sthokage@nodecrashcoursecluster.ip9dy48.mongodb.net/node-anime-raver?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));



//register view engine
app.set('view engine', 'ejs');




// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));




 
// routes
app.get('/', (req, res) => {
   res.redirect('/rants');

});



app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});


// rant routes
app.get('/rants', (req, res) => {
    Rant.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { title: 'All Rants', rants: result })

    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create a New Rant'});
})


// 404 page

app.use((req, res) =>{
res.status(404).render('404', { title: 'Aww Crap'});
});





