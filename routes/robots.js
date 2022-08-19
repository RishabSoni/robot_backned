const express = require('express');
const router = express.Router();

const {ApiAuthValidator}= require('../middleware/authValidator/index');
const {RobotsController} = require('../controllers')


router.get('/all', ApiAuthValidator.validateAccessToken, RobotsController.allRobots)
router.post('/create', ApiAuthValidator.validateAccessToken,RobotsController.createRobot);
router.get('/:robotId', ApiAuthValidator.validateAccessToken,RobotsController.findRobot);
router.post('/update/:robotId',ApiAuthValidator.validateAccessToken, RobotsController.findRobotAndUpdate)
router.delete('/:robotId',ApiAuthValidator.validateAccessToken, RobotsController.findRobotAndRemove)


module.exports = router;