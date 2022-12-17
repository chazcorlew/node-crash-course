const express = require('express');
const rantController = require('../controllers/rantController');


const router = express.Router();

router.get('/create', rantController.rant_create_get);
router.get('/', rantController.rant_index);
router.post('/', rantController.rant_create_post);
router.get('/:id', rantController.rant_details);
router.delete('/:id', rantController.rant_delete);



module.exports = router;