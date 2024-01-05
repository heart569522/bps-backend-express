const express = require('express');
const router = express.Router();
const api3Controller = require('../controllers/api3Controller');

router.get('/', api3Controller.getAllApi3);
router.get('/:id', api3Controller.getApi3ById);
router.post('/', api3Controller.createApi3);
router.put('/:id', api3Controller.updateApi3);
router.patch('/:id', api3Controller.partialUpdateApi3);
router.delete('/:id', api3Controller.deleteApi3);

module.exports = router;