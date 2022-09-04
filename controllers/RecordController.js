const db = require("../models");
const Resident = db.records;


const RecordCreation = async (req, res)=>{
    try{
        const createRecord = await Resident.create(req.body);
        res.status(200).json(createRecord);
    }catch(err){
        res.status(500).json(err);
    }
}


const RecordRetrieve = async (req, res)=>{
    try{
        const getRecord = await Resident.findAll();
        res.status(200).json(getRecord);
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = { RecordCreation, RecordRetrieve }

