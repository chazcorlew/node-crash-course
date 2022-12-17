const Rant = require('../models/rant');

const rant_index = (req, res) => {
  Rant.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { rants: result, title: 'All Rants' });
    })
    .catch(err => {
      console.log(err);
    });
}

const rant_details = (req, res) => {
  const id = req.params.id;
  Rant.findById(id)
    .then(result => {
      res.render('details', { rant: result, title: 'Rant Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const rant_create_get = (req, res) => {
  res.render('create', { title: 'Create a new rant' });
}

const rant_create_post = (req, res) => {
  const rant = new Rant(req.body);
  rant.save()
    .then(result => {
      res.redirect('/rants');
    })
    .catch(err => {
      console.log(err);
    });
}

const rant_delete = (req, res) => {
  const id = req.params.id;
  Rant.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/rants' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  rant_index, 
  rant_details, 
  rant_create_get, 
  rant_create_post, 
  rant_delete
}