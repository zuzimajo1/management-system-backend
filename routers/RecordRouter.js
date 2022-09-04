const express = require("express");
const router = express.Router();


const { RecordCreation, RecordRetrieve } = require("../controllers/RecordController");

router.route("/").post(RecordCreation).get(RecordRetrieve)

module.exports = router;