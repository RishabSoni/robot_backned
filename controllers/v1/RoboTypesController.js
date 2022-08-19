const {RoboTypesServices}  = require('../../services')

class RoboTypesController {
    async allRobots(req,res,next) {
		try{
			await RoboTypesServices.getAllRoboTypes(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createRoboType(req,res,next) {
		try{
			await RoboTypesServices.createRoboTypes(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRoboType(req,res,next) {
		try{
			await RoboTypesServices.findRoboTypesById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRoboTypeAndUpdate(req,res,next) {
		try{
			await RoboTypesServices.findRoboTypesByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRoboTypeAndRemove(req,res,next) {
		try{
			await RoboTypesServices.deleteRoboTypesById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}
}

module.exports = new RoboTypesController();