const express = require('express')
const router = express.Router();


const { Register, Login } = require("../controllers/AuthController");


//Routers
router.route('/').post(Register);
router.route('/login').post(Login);



module.exports = router;