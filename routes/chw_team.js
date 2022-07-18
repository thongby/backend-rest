const express = require("express");
const router = express.Router();

const {
    listChwteam,
    editChwteam,
    addChwteam,
    deleteChwteam
  } = require("../controllers/chw_team");

//@endpoint     localhost:4000/api/chwteam
//@method       GET
//@access       Public
router.get("/chwteam", listChwteam);

//@endpoint     localhost:4000/api/chwteam
//@method       POST
//@access       Public
router.post("/chwteam", addChwteam);

//@endpoint     localhost:4000/api/chwteam
//@method       PUT
//@access       Public
router.get("/chwteam", editChwteam);

//@endpoint     localhost:4000/api/chwteam
//@method       DELETE
//@access       Public
router.get("/chwteam", deleteChwteam);

module.exports = router;