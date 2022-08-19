const express = require('express');
const router = express.Router();

const {BlockController} = require('../controllers/index')
const {ApiAuthValidator}= require('../middleware/authValidator/index');


/** Block Routes */
router.get('/all',ApiAuthValidator.validateAccessToken,BlockController.allBlock)
router.post('/createblock',ApiAuthValidator.validateAccessToken, BlockController.createBlock)
router.get('/:blockId',ApiAuthValidator.validateAccessToken, BlockController.findBlock)
router.post('/update/:blockId',ApiAuthValidator.validateAccessToken, BlockController.findBlockAndUpdate)
router.delete('/:blockId',ApiAuthValidator.validateAccessToken, BlockController.findBlockAndRemove)



module.exports = router;