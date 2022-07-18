const express = require("express");
const router = express.Router();

const {
    listTgroceries,
    addTgrocery,
    editTgrocery
  } = require("../controllers/tgroceries");

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

module.exports = router;