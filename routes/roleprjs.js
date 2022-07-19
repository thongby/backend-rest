const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/roleprjs");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/roleprjs
router.get("/roleprjs", list);
router.post("/roleprjs", auth, adminCheck, create);
router.get("/roleprjs/:id", auth, adminCheck, read);
router.put("/roleprjs/:id", auth, adminCheck, update);
router.delete("/roleprjs/:id", auth, adminCheck, remove);

module.exports = router;