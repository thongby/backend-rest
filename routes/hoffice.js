const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/hoffice");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/hoffice
router.get("/hoffice", list);
router.post("/hoffice", auth, adminCheck, create);
router.get("/hoffice/:id", auth, adminCheck, read);
router.put("/hoffice/:id", auth, adminCheck, update);
router.delete("/hoffice/:id", auth, adminCheck, remove);

module.exports = router;