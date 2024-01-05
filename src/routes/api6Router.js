const express = require('express');
const router = express.Router();
const api6Controller = require('../controllers/api6Controller');

router.get('/', api6Controller.getAllApi6);
router.get('/:id', api6Controller.getApi6ById);
router.post('/', api6Controller.createApi6);
router.put('/:id', api6Controller.updateApi6);
router.patch('/:id', api6Controller.partialUpdateApi6);
router.delete('/:id', api6Controller.deleteApi6);

module.exports = router;