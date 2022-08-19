const SHA256 = require('crypto-js/sha256');
const moment = require('moment');
const Sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const commonConfig = require('../../config/common.config');
const tokenService = require('./TokenService.js');
const { passwordResetModel, userModel, roleModel} = require('../../models');

console.log(roleModel, "<===roleModel");

class AuthService {
   	/** ***** Auth Service: Method to register new user ******/
    async role(req,res,next){
        try{
            let result = await roleModel.findAll();
            return res.status(200).json({
                status: true,
                message: 'Role list',
                data: result,
            });
        }catch(error){
            return res.status(500).json({status: false, message: 'error'});   
        }
    }

    /** ***** Auth Service: Method to register new user ******/
	async registerUser(req, res, next) {
		try {         
			let body = req.body;
            const userCheck = await userModel.findOne({
                where:{email:body.email}
            });
            if(userCheck){
                return res
					.status(422)
					.json({status: true, message: 'Already User added'});
            }
            const ciphertext = SHA256(
                req.body.password,
                commonConfig.PWD_SECRET,
            ).toString();
            
            body.password=ciphertext;           
            const result = await userModel.create(body);
            if (result) {
				return res.status(200).json({
                    status: true,
                    message: 'User has been added',
				});
			} else {
				return res
					.status(200)
					.json({status: false, message: 'User not added'
                });
			}	
		}catch (error) {
           return res.status(500).json({status: false, message: 'error'});
		}
	}

    /** ***** User Service: Method to login user ******/
	async login(req, res, next) {
		try {
            let body = req.body;
            console.log('req--------',req.body);
			const ciphertext = SHA256(
				body.password,
				commonConfig.PWD_SECRET,
			).toString();

            const result = await userModel.findOne({
                attributes: {exclude: ['password']},
                where:{
                    email:body.email,
                    password:ciphertext
                }
            });
			if (result) {			
                const tokens = tokenService.generateTokens({
                    id: result.id,
                    email: body.email,
                    role: result.role_id,
                });
                const tokenExpiry = tokenService.getTokenExpiry(
                    tokens.accessToken,
                );
                
                let auth = {
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken,
                    accessTokenExpiry: tokenExpiry.exp,
                }
                let data = {result,auth}
                
                return res.status(200).json({
                    status: true,
                    message: 'Login Successful',
                    data: data,
                });
               	
			} else {
				return res
					.status(401)
					.json({status: false, message: 'Invalid login credentials'});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).json({status: false, message: 'error'});
		}
	}
     /** ***** Auth Service: Method to changePassword to new user ******/
    async changePassword(req, res, next){
        try {
            console.log('dd');
            let body  = req.body;
            const oldPassword = SHA256(
                body.old_password,
                commonConfig.PWD_SECRET,
            ).toString();

            const newPassword = SHA256(
                body.password,
                commonConfig.PWD_SECRET,
            ).toString();

            const userCheck = await userModel.findOne({
                where:{
                    id:req.decoded.id,
                    password:oldPassword,
                }
            });
            if(userCheck){
                await userModel.update(
                    {
                        password: newPassword,
                        is_new:0
                    },
                    {
                        where:{id:req.decoded.id}
                    }
                );
                
                return res
                    .status(422)
                    .json({status: true, message: 'Password has been changed'});
            } else {
                return res
                    .status(200)
                    .json({stauts: true, message: 'Old password is not matched'});
            }
        } catch (error) {
            return res.status(500).json({status: false, message: 'error'});
        }
    }

    /** Auth Service: Method to reset verifyToken token **/ 
    async verifyToken(req, res, next){
        try {
            let matchToken = await passwordResetModel.findOne({where:{token: req.body.token}})
            if(matchToken){
                let currentTime = Date.now();
                if(matchToken.token_expires >= currentTime){
                    return res.status(200).json({status: true, message: 'Token matched', date:matchToken});
                } else {
                    return res.status(200).json({status: false, message: 'Token expired'});
                }
            } else {
                return res.status(404).json({status: false, message: 'Token not found'})
            }
        } catch (error) {
            return res.status(500).json({status: false, message: 'error'});
        }
    }
	
}

module.exports = new AuthService();
