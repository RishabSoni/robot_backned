const jwt = require('jsonwebtoken');
const Yup = require('yup');
const commonConfig = require('../../config/common.config');
const constant = require('../../constants/constant');

class AuthDataValidator {
	/** ***** Api Auth Data validator: Method to validate user register request ******/
	registerUser(req, res, next) {
	    const schema = Yup.object().shape({
			name: Yup.string().trim().required("Name is required"),
			email: Yup.string().required("Email is required").email("Invalid Email"),
			password: Yup.string().required("Password is requred"),
			role_id:Yup.number().required("Role id is required ")
    });
		schema.validate(req.body, {abortEarly: false})
			.then((response) => {
				next();
			})
			.catch((err) => {
				console.log(err)
				next(err);
			});
	}

	/** ***** Api Auth Data validator: Method to validate user login request ******/

	login(req, res, next) {
		const schema = Yup.object().shape({
			email: Yup.string().required('Email is required').email('Invalid Email'),
			password: Yup.string().required('Password is required'),
		});
		schema
			.validate(req.body, {abortEarly: false})
			.then((response) => {
				next();
			})
			.catch((err) => {
				next(err);
			});
	}

	/** ***** Api Auth Data validator: Method to validate admin login request ******/

	loginAdmin(req, res, next) {
		const schema = Yup.object().shape({
			email: Yup.string().required('Email is required').email('Invalid Email'),
			password: Yup.string().required('Password is required'),
			adminId: Yup.string().required('5 digit adminId is required'),
		});
		schema
			.validate(req.body, {abortEarly: false})
			.then((response) => {
				next();
			})
			.catch((err) => {
				next(err);
			});
	}

	/** ***** Api Auth Data validator: Method to validate admin registration request ******/

	registerAdmin(req, res, next) {
		const schema = Yup.object().shape({
			email: Yup.string().required('Email is required').email('Invalid Email'),
			password: Yup.string().required('Password is required'),
			fullname: Yup.string()
				.trim()
				.required('Fullname name is required')
				.min(4, 'Fullname name should be atleast 3 characters')
				.max(30, 'Fullname name should max 30 characters'),
		});
		schema
			.validate(req.body, {abortEarly: false})
			.then((response) => {
				next();
			})
			.catch((err) => {
				next(err);
			});
	}
	/** Api Auth Data validator: Method to validate forget password**/ 
	changePassword(req, res, next){
		const schema = Yup.object.shape({
			old_password: Yup.string().required('Old password is required'),
			password: Yup.string().required('Password is required'),
		});
		schema
			.validate(req.body, {abortEarly: false})
			.then((response)=> {
				next();
			})
			.catch((err)=> {
				next(err);
			})
	}




}

module.exports = new AuthDataValidator();
