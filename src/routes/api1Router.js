const express = require('express');
const router = express.Router();
const api1Controller = require('../controllers/api1Controller');

router.get('/', api1Controller.getAllApi1);
router.get('/:id', api1Controller.getApi1ById);
router.post('/', api1Controller.createApi1);
router.put('/:id', api1Controller.updateApi1);
router.patch('/:id', api1Controller.partialUpdateApi1);
router.delete('/:id', api1Controller.deleteApi1);

module.exports = router;