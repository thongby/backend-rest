const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/hofficetype");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/hofficetype
router.get("/hofficetype", list);
router.post("/hofficetype", auth, adminCheck, create);
router.get("/hofficetype/:id", auth, adminCheck, read);
router.put("/hofficetype/:id", auth, adminCheck, update);
router.delete("/hofficetype/:id", auth, adminCheck, remove);

module.exports = router;
