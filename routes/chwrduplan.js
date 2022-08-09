const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/chwrduplan");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/chwrduplan
router.get("/chwrduplan", list);
router.post("/chwrduplan", auth, adminCheck, create);
router.get("/chwrduplan/:id", auth, adminCheck, read);
//router.put("/chwrduplan/:id", auth, adminCheck, update);
//router.delete("/chwrduplan/:id", auth, adminCheck, remove);

module.exports = router;