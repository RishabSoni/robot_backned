const {robots} = require('../../models');

class RobotsService {
    async getAllRobots(req,res,next){
        try{
            let result = await robots.findAll();
            return res.status(200).json({
                status: true,
                message: 'All robots list.',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async createNewRobots(req,res,next){
        try{
            let body = req.body;
            let result = await robots.create(body);
            return res.status(200).json({
                status: true,
                message: 'New Robot created successfully.',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async findRobotsById(req,res,next){
        try{
            let {robotId} = req.params;
            const isExist = await robots.findOne({where: {
                id: robotId
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
                message: 'Robot no found.'
            });
          }
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async findRobotsByIdAndUpdate(req, res, next){
        try {
            let {robotId} = req.params;   
            let { name, model, robot_type_id } = req.body;               

            const isExist = await robots.findOne({where : {id : robotId}})
            
            if(isExist){
                const updated = await isExist.update({ name, model, robot_type_id });
                    return res.status(200).json({status: true, message: 'successfully Updated result', updatedRobot : updated});       
            } else {
                return res.status(301).json({status: true, message: 'Robot not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async deleteRobotsById(req, res, next) {
        try {
            let {robotId} = req.params;
            let n = await robots.destroy({ where: { id: robotId } });
            console.log(`number of deleted rows: ${n}`);
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'Robot not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }
}

module.exports = new RobotsService();