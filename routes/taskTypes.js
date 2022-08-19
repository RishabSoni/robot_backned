const express = require('express');
const router = express.Router();

const {TaskTypeController} = require('../controllers')
const {ApiAuthValidator}= require('../middleware/authValidator/index');

router.get('/all',ApiAuthValidator.validateAccessToken,TaskTypeController.allTaskTypes)
router.post('/create',ApiAuthValidator.validateAccessToken, TaskTypeController.createTaskTypes)
router.get('/:tasktypeId',ApiAuthValidator.validateAccessToken, TaskTypeController.findTaskTypes)
router.post('/update/:tasktypeId',ApiAuthValidator.validateAccessToken, TaskTypeController.findTaskTypesAndUpdate)
router.delete('/:tasktypeId',ApiAuthValidator.validateAccessToken, TaskTypeController.findTaskTypesAndRemove)


module.exports = router;