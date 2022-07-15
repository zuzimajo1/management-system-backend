const express = require("express");
const router = express.Router();

const {
  ResidentProfiling,
  FindAllResident,
  UpdateResident,
  DeleteResident,
  FindSingleResident,
} = require("../controllers/ResidentController");

//Routers
router
  .route("/")
  .get(FindAllResident)
  .post(ResidentProfiling)
  .patch(UpdateResident)

router.route("/:id").delete(DeleteResident)

router.route("/find").get(FindSingleResident);


module.exports = router;
