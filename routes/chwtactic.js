const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/chwtactic");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/chwtactic
router.get("/chwtactic", list);
router.post("/chwtactic", auth, adminCheck, create);
router.get("/chwtactic/:id", auth, adminCheck, read);
router.put("/chwtactic/:id", auth, adminCheck, update);
router.delete("/chwtactic/:id", auth, adminCheck, remove);

module.exports = router;