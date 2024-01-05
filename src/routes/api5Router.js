const express = require('express');
const router = express.Router();
const api5Controller = require('../controllers/api5Controller');

router.get('/', api5Controller.getAllApi5);
router.get('/:id', api5Controller.getApi5ById);
router.post('/', api5Controller.createApi5);
router.put('/:id', api5Controller.updateApi5);
router.patch('/:id', api5Controller.partialUpdateApi5);
router.delete('/:id', api5Controller.deleteApi5);

module.exports = router;