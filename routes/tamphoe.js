const express = require("express");
const router = express.Router();

// controllers
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/tamphoe");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/tamphoe
router.get("/tamphoe", list);
router.post("/tamphoe", auth, adminCheck, create);
router.get("/tamphoe/:id", auth, adminCheck, read);
router.put("/tamphoe/:id", auth, adminCheck, update);
router.delete("/tamphoe/:id", auth, adminCheck, remove);

module.exports = router;