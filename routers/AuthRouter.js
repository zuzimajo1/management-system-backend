const express = require('express')
const router = express.Router();


const { Register, Login } = require("../controllers/AuthController");


//Routers
router.route('/').post(Register).get(Login);



module.exports = router;