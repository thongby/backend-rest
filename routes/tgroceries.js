const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/tgroceries");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/tgroceries
router.get("/tgroceries", list);
router.post("/tgroceries", auth, adminCheck, create);
router.get("/tgroceries/:id", auth, adminCheck, read);
router.put("/tgroceries/:id", auth, adminCheck, update);
router.delete("/tgroceries/:id", auth, adminCheck, remove);

module.exports = router;