const express = require("express");
const router = express.Router();

const {
    list,
    create,
    read,
    update,
    remove
  } = require("../controllers/chw_team");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:4000/api/chw_team
router.get("/chw_team", list);
router.post("/chw_team", auth, adminCheck, create);
router.get("/chw_team/:id", auth, adminCheck, read);
router.put("/chw_team/:id", auth, adminCheck, update);
router.delete("/chw_team/:id", auth, adminCheck, remove);

module.exports = router;