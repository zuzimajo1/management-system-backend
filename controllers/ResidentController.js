const db = require("../models");
const Resident = db.residents;


const ResidentProfiling = async (req, res)=>{
    try{
        const createProfiling = await Resident.create(req.body);
        res.status(200).json(createProfiling);
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = { ResidentProfiling };



