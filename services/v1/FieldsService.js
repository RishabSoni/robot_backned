'use restrict';
const { fields } = require('../../models');

class FieldsService {   
    async getAllFields(req,res,next){
        try{
            let result = await fields.findAll();
            return res.status(200).json({
                status: true,
                message: 'All Fields list',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, message: 'error---------?'});   
        }
    }

    async createFields(req, res, next){
        try {
            let body = req.body;                    
            const newFields = await fields.create(body);
            return res.status(200).json({status: true, message: 'successfully created'});      
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findFieldsById(req, res, next){
        try {
            let {fieldId} = req.params;                  
            console.log(fieldId, ",===fieldId");  
            const isExist = await fields.findOne({where: {
                id: fieldId
             }

            // const isExist = await fields.findById(fieldId)

          });
            if(isExist){
                return res.status(200).json({status: true, message: 'success result', field : isExist});      
            } else {
                return res.status(301).json({status: true, message: 'Fields not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findFieldsByIdAndUpdate(req, res, next){
        try {
            let {fieldId} = req.params;   
            let { name, area , coordinates,  user_id, block_count, width, height } = req.body;               

            const isExist = await fields.findOne({where : {id : fieldId}});

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
            return res.status(500).json({
                status: false,
                error, 
                message: 'error---------?'
            });      
        }
    }

    async deleteFieldsById(req, res, next) {
        try {
            let {fieldId} = req.params;   
            console.log("<==removed", fieldId);
            let n = await fields.destroy({ where: { id: fieldId } });
            console.log(`number of deleted rows: ${n}`);
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'Fields not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }
}

module.exports = new FieldsService();