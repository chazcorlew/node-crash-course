const express = require('express');

// express app
const app = express();

//register vire engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: "Chainsaw Man is the best anime out right now and it isn't close", snippet: 'duh duh duh duh duh duh'},
        {title: "How My Hero Academia saved my life...", snippet: 'Midoriya was just a kid who wanted to be like his heroes'},
        {title: "The best anime swords to start your anime sword collection", snippet: 'The answer is Demon Slayer, obvi...'},
       ];

    res.render('index', {title: 'Home', blogs });

});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create a New Rant'});
})


// 404 page

app.use((req, res) =>{
res.status(404).render('404', { title: 'Aww Crap'});
});





