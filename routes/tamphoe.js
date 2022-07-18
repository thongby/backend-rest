const express = require("express");
const router = express.Router();

const {
  listTamphoe,
  addTamphoe,
  editTamphoe,
  deleteTamphoe,
} = require("../controllers/tamphoe");

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

module.exports = router;