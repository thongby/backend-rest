const express = require("express");
const router = express.Router();

const {
  listUser,
  register,
  login,
  editUser,
  deleteUser,
  currentUser
} = require("../controllers/auth");

// middleware
const { auth,adminCheck } = require("../middleware/auth");

//@endpoint     localhost:4000/api/register
//@method       POST
//@access       Public
router.post("/register", register);

//@endpoint     localhost:4000/api/login
//@method       POST
//@access       Public
router.post("/login", login);

//@Endpoint  http://localhost:4000/api/current-user
//@Method    POST
//@Access    Private
router.post("/current-user", auth, currentUser);

//@Endpoint  http://localhost:4000/api/current-admin
//@Method    POST
//@Access    Private
router.post("/current-admin", auth,adminCheck, currentUser);

//@endpoint     localhost:4000/api/auth
//@method       GET
//@access       Public
router.get("/auth", listUser);

//@endpoint     localhost:4000/api/auth
//@method       PUT
//@access       Public
router.put("/auth", editUser);

//@endpoint     localhost:4000/api/auth
//@method       DELETE
//@access       Public
router.delete("/auth", deleteUser);

module.exports = router;
