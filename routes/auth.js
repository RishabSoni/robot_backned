const express = require('express');
const router = express.Router();

const {AuthController} = require('../controllers/index');
const {AuthDataValidator} = require('../middleware/dataValidator/index');


router.get('/role', AuthController.role);
router.post('/registerUser',AuthDataValidator.registerUser, AuthController.registerUser);
router.post('/login', AuthDataValidator.login, AuthController.login);
router.post('/changePassword', AuthDataValidator.changePassword, AuthController.changePassword);
router.post('/verifyToken', AuthController.verifyToken);

module.exports = router;
