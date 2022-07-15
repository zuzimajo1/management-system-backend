const express = require("express");
const router = express.Router();

const { EventCreation, EventGetAll } = require("../controllers/EventController");


//Routers
router.route("/").post(EventCreation).get(EventGetAll);

module.exports = router;