const express = require("express");
const router = express.Router();

const {
  EventCreation,
  EventGetAll,
  DeleteEvent,
  FindSingleEvent,
} = require("../controllers/EventController");


//Routers
router.route("/").post(EventCreation).get(EventGetAll)
router.route("/eventtoday").get(FindSingleEvent);
router.route("/:id").delete(DeleteEvent);

module.exports = router;