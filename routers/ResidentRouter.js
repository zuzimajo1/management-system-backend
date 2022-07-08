const express = require('express');
const router = express.Router();


const {ResidentProfiling  }  = require("../controllers/ResidentController");

router.post('/profiling', ResidentProfiling);

module.exports = router;