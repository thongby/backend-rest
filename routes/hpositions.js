const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/hpositions");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/hpositions
router.get("/hpositions", list);
router.post("/hpositions", auth, adminCheck, create);
router.get("/hpositions/:id", auth, adminCheck, read);
router.put("/hpositions/:id", auth, adminCheck, update);
router.delete("/hpositions/:id", auth, adminCheck, remove);

module.exports = router;