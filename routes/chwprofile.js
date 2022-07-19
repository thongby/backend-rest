const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/chwprofile");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/chwprofile
router.get("/chwprofile", list);
router.post("/chwprofile", auth, adminCheck, create);
router.get("/chwprofile/:id", auth, adminCheck, read);
router.put("/chwprofile/:id", auth, adminCheck, update);
router.delete("/chwprofile/:id", auth, adminCheck, remove);

module.exports = router;