const express = require("express");
const router = express.Router();

const {
  ResidentProfiling,
  FindAllResident,
  UpdateResident,
  DeleteResident,
} = require("../controllers/ResidentController");

//Routers
router
  .route("/")
  .get(FindAllResident)
  .post(ResidentProfiling)
  .patch(UpdateResident)
  .delete(DeleteResident);

module.exports = router;
