const express = require("express");
const router = express.Router();

const {
    list,
    create,
    read,
    update,
    remove
  } = require("../controllers/amp_team");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/amp_team
router.get("/amp_team", list);
router.post("/amp_team", auth, adminCheck, create);
router.get("/amp_team/:id", auth, adminCheck, read);
router.put("/amp_team/:id", auth, adminCheck, update);
router.delete("/amp_team/:id", auth, adminCheck, remove);

module.exports = router;