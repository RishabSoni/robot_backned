const {robot_tasks} = require('../../models');


class RobotTasksService {
    async getAllRobotTasks(req,res,next){
        try{
            let result = await robot_tasks.findAll();
            return res.status(200).json({
                status: true,
                message: 'All Fields list',
                data: result,
            });
        }catch(error){
            next({status: false,errors : error.errors.map(d => d.message), message: 'error---------?'});
        }
    }

    async createRobotTasks(req, res, next){
        try {
            let body = req.body;                    
            const newFields = await robot_tasks.create(body);
            return res.status(200).json({status: true, message: 'successfully created'});      
        } catch (error) {
            // return res.status(500).json({status: false,error, message: 'error---------?'});      
            next({status: false,errors : error.errors.map(d => d.message), message: 'error---------?'});
        }
    }

    async findRobotTasksById(req, res, next){
        try {
            let {robottasksId} = req.params;                  
            console.log(robottasksId, ",===fieldId");  
            const isExist = await robot_tasks.findOne({where: {
                id: robottasksId
             }

            // const isExist = await fields.findById(fieldId)

          });
            if(isExist){
                return res.status(200).json({status: true, message: 'success result', field : isExist});      
            } else {
                return res.status(301).json({status: true, message: 'Fields not found.'});         
            }
        } catch (error) {
            next({status: false,errors : error.errors.map(d => d.message), message: 'error---------?'});
        }
    }

    async findRobotTasksByIdAndUpdate(req, res, next){
        try {
            let {fieldId} = req.params;   
            let { name, area , coordinates,  user_id, block_count, width, height } = req.body;               

            const isExist = await robot_tasks.findOne({where : {id : fieldId}});

            if(isExist){
                const updated = await isExist.update({ 
                    name, 
                    area , 
                    coordinates, 
                    user_id, 
                    block_count, 
                    width, 
                    height 
                });
                return res.status(200).json({
                    status: true, 
                    message: 'successfully Updated result', 
                    updatedField : updated
                });      
            } else {
                return res.status(301).json({
                    status: true, 
                    message: 'Fields not found.'
                });         
            }
        } catch (error) {
            next({status: false,errors : error, message: 'error---------?'});      
        }
    }

    async deleteRobotTasksById(req, res, next) {
        try {
            let {roboTaskId} = req.params;   

            let n = await robot_tasks.destroy({ where: { id: roboTaskId } });
            console.log(`number of deleted rows: ${n}`);
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'Fields not found.'});         
            }
        } catch (error) {
            next({status: false,errors : error.errors.map(d => d.message), message: 'error---------?'});
        }
    }
}

module.exports = new RobotTasksService();