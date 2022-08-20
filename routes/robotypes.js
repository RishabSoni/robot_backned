const express = require('express');
const router = express.Router();

const {ApiAuthValidator}= require('../middleware/authValidator/index');
const {RoboTypesController} = require('../controllers/')

router.get('/all', ApiAuthValidator.validateAccessToken,RoboTypesController.allRobots);
router.post('/create', ApiAuthValidator.validateAccessToken,RoboTypesController.createRoboType);
router.get('/:robotypeId', ApiAuthValidator.validateAccessToken,RoboTypesController.findRoboType);
router.post('/update/:robotypeId',ApiAuthValidator.validateAccessToken, RoboTypesController.findRoboTypeAndUpdate)
router.delete('/:robotypeId',ApiAuthValidator.validateAccessToken, RoboTypesController.findRoboTypeAndRemove)


module.exports = router;