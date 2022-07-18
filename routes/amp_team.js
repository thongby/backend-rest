const express = require("express");
const router = express.Router();

const {
    listAmpteam,
    addAmpteam,
    editAmpteam,
    deleteAmpteam
  } = require("../controllers/amp_team");

//@endpoint     localhost:4000/api/ampteam
//@method       GET
//@access       Public
router.get("/ampteam", listAmpteam);

//@endpoint     localhost:4000/api/ampteam
//@method       POST
//@access       Public
router.get("/ampteam", addAmpteam);

//@endpoint     localhost:4000/api/ampteam
//@method       PUT
//@access       Public
router.get("/ampteam", editAmpteam);

//@endpoint     localhost:4000/api/ampteam
//@method       DELETE
//@access       Public
router.get("/ampteam", deleteAmpteam);

module.exports = router;