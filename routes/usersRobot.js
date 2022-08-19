const express = require('express');
const router = express.Router();

const {ApiAuthValidator}= require('../middleware/authValidator/index');
const {UserRobotsService} = require('../services');

router.get('/all',ApiAuthValidator.validateAccessToken,UserRobotsService.getAllUserRobot)
router.post('/create',ApiAuthValidator.validateAccessToken, UserRobotsService.createUserRobot)
router.get('/:usersRobotId',ApiAuthValidator.validateAccessToken, UserRobotsService.findUserRobotById)
router.post('/update/:usersRobotId',ApiAuthValidator.validateAccessToken, UserRobotsService.findUserRobotByIdAndUpdate)
router.delete('/:usersRobotId',ApiAuthValidator.validateAccessToken, UserRobotsService.deleteUserRobotById)


module.exports = router;