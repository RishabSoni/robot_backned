const express = require('express');
const router = express.Router();
const {TaskController} = require('../controllers');
const {ApiAuthValidator}= require('../middleware/authValidator/index');

router.get('/all',ApiAuthValidator.validateAccessToken,TaskController.allTasks)
router.post('/create',ApiAuthValidator.validateAccessToken, TaskController.createTask)
router.get('/:taskId',ApiAuthValidator.validateAccessToken, TaskController.findTask)
router.post('/update/:taskId',ApiAuthValidator.validateAccessToken, TaskController.findTaskAndUpdate)
router.delete('/:taskId',ApiAuthValidator.validateAccessToken, TaskController.findTaskAndRemove)


module.exports = router;