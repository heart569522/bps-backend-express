const express = require('express');
const router = express.Router();
const api2Controller = require('../controllers/api2Controller');

router.get('/', api2Controller.getAllApi2);
router.get('/:id', api2Controller.getApi2ById);
router.post('/', api2Controller.createApi2);
router.put('/:id', api2Controller.updateApi2);
router.patch('/:id', api2Controller.partialUpdateApi2);
router.delete('/:id', api2Controller.deleteApi2);

module.exports = router;