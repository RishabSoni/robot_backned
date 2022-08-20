const {FieldsService} = require('../../services');

class FieldsController {
    async allFields(req,res,next) {
		try{
			await FieldsService.getAllFields(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createFields(req,res,next) {
		try{
			await FieldsService.createFields(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findFields(req,res,next) {
		try{
			await FieldsService.findFieldsById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findFieldsAndUpdate(req,res,next) {
		try{
			await FieldsService.findFieldsByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findFieldsAndRemove(req,res,next) {
		try{
			await FieldsService.deleteFieldsById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}
}

module.exports = new FieldsController();