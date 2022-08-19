const express = require('express');
const router = express.Router();

const {ApiAuthValidator}= require('../middleware/authValidator/index');
const {RobotTasksService} = require('../services')

/** Block Routes */
router.get('/all',ApiAuthValidator.validateAccessToken, RobotTasksService.getAllRobotTasks)
router.post('/create',ApiAuthValidator.validateAccessToken, RobotTasksService.createRobotTasks)
router.get('/:robottasksId',ApiAuthValidator.validateAccessToken, RobotTasksService.findRobotTasksById)
router.post('/update/:robottasksId',ApiAuthValidator.validateAccessToken, RobotTasksService.findRobotTasksByIdAndUpdate)
router.delete('/:robottasksId',ApiAuthValidator.validateAccessToken, RobotTasksService.deleteRobotTasksById)


module.exports = router;