const express = require('express');
const router = express.Router();

const {FieldsController} = require('../controllers/index');
const {ApiAuthValidator}= require('../middleware/authValidator/index');

/** fields Routes */
router.get('/all',ApiAuthValidator.validateAccessToken, FieldsController.allFields)
router.post('/createfields',ApiAuthValidator.validateAccessToken, FieldsController.createFields)
router.get('/:fieldId',ApiAuthValidator.validateAccessToken, FieldsController.findFields)
router.post('/update/:fieldId',ApiAuthValidator.validateAccessToken, FieldsController.findFieldsAndUpdate)
router.delete('/:fieldId',ApiAuthValidator.validateAccessToken, FieldsController.findFieldsAndRemove)


module.exports = router;
