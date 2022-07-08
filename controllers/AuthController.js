
const db = require('../models');
const Auth = db.auth;

const Register = async (req, res)=>{
    try{
        const registerUser = await Auth.create(req.body);
        res.status(200).json(registerUser);
    }catch(err){
        res.status(500).json(err);
    }
}


module.exports = { Register };

