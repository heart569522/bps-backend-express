const express = require('express');
const router = express.Router();
const api4Controller = require('../controllers/api4Controller');

router.get('/', api4Controller.getAllApi4);
router.get('/:id', api4Controller.getApi4ById);
router.post('/', api4Controller.createApi4);
router.put('/:id', api4Controller.updateApi4);
router.patch('/:id', api4Controller.partialUpdateApi4);
router.delete('/:id', api4Controller.deleteApi4);

module.exports = router;