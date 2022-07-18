const express = require("express");
const router = express.Router();

const {
  listChangwat,
  listAmphoe,
  listTambon,
  listTamphoe,
  addTamphoe,
  editTamphoe,
  deleteTamphoe,
  listChwteam,
  editChwteam,
  addChwteam,
  deleteChwteam,
  listAmpteam,
  addAmpteam,
  editAmpteam,
  deleteAmpteam,
  listTgroceries,
  addTgrocery,
  editTgrocery,
  deleteTgrocery,
  listChwprofile,
  editChwprofile,
} = require("../controllers/rduprovince");

//@endpoint     localhost:4000/api/tamphoe
//@method       GET
//@access       Public
router.get("/tamphoe", listTamphoe);

//@endpoint     localhost:4000/api/tamphoe
//@method       POST
//@access       Public
router.get("/tamphoe", addTamphoe);

//@endpoint     localhost:4000/api/tamphoe
//@method       PUT
//@access       Public
router.get("/tamphoe", editTamphoe);

//@endpoint     localhost:4000/api/tamphoe
//@method       DELETE
//@access       Public
router.get("/tamphoe", deleteTamphoe);

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

//@endpoint     localhost:4000/api/tgroceries
//@method       GET
//@access       Public
router.get("/tgroceries", listTgroceries);

//@endpoint     localhost:4000/api/tgroceries
//@method       POST
//@access       Public
router.get("/tgroceries", addTgrocery);

//@endpoint     localhost:4000/api/tgroceries
//@method       PUT
//@access       Public
router.get("/tgroceries", editTgrocery);

//@endpoint     localhost:4000/api/tgroceries
//@method       DELETE
//@access       Public
router.get("/tgroceries", listTgroceries);

//@endpoint     localhost:4000/api/chwprofile
//@method       GET
//@access       Public
router.get("/chwprofile", listChwprofile);

//@endpoint     localhost:4000/api/chwprofile
//@method       PUT
//@access       Public
router.get("/chwprofile", editChwprofile);

module.exports = router;
