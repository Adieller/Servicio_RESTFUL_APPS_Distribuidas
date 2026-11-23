const express = require('express');
const speakersController = require('../controllers/speakers.controller');

const router = express.Router();

router.get('/', speakersController.list);
router.get('/:id', speakersController.getById);
router.post('/', speakersController.create);
router.put('/:id', speakersController.replace);
router.delete('/:id', speakersController.remove);

module.exports = router;