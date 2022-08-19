const { robotType } = require('../../models');

class RoboTypesServices {
    async getAllRoboTypes(req,res,next){
        try{
            let result = await robotType.findAll();
            return res.status(200).json({
                status: true,
                message: 'All robot types list.',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async createRoboTypes(req,res,next){
        try{
            let body = req.body;
            let result = await robotType.create(body);
            return res.status(200).json({
                status: true,
                message: 'All robot types list.',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async findRoboTypesById(req,res,next){
        try{
            let {robotypeId} = req.params;
            const isExist = await robotType.findOne({where: {
                id: robotypeId
             }
            });
          if(isExist){
            return res.status(200).json({
                status: true,
                message: 'successfully result.',
                data: isExist,
            });
          } else {
            return res.status(301).json({
                status: true,
                message: 'Robo type no found.'
            });
          }
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async findRoboTypesByIdAndUpdate(req, res, next){
        try {
            let {robotypeId} = req.params;   
            let { name, model } = req.body;               

            const isExist = await robotType.findOne({where : {id : robotypeId}})
            
            if(isExist){
                const updated = await isExist.update({ name, model });
                    return res.status(200).json({status: true, message: 'successfully Updated result', updatedRoboTypes : updated});       
            } else {
                return res.status(301).json({status: true, message: 'Robot Type not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async deleteRoboTypesById(req, res, next) {
        try {
            let {robotypeId} = req.params;
            let n = await robotType.destroy({ where: { id: robotypeId } });
            console.log(`number of deleted rows: ${n}`);
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'Robo type not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }
}

module.exports = new RoboTypesServices();