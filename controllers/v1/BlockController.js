const {BlockService} = require('../../services');

class BlockController {
    async allBlock(req,res,next) {
		try{
			await BlockService.getAllBlock(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createBlock(req,res,next) {
		try{
			await BlockService.createBlock(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findBlock(req,res,next) {
		try{
			await BlockService.findBlockById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findBlockAndUpdate(req,res,next) {
		try{
			await BlockService.findBlockByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findBlockAndRemove(req,res,next) {
		try{
			await BlockService.deleteBlockById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}
}

module.exports = new BlockController();