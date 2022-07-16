const express = require("express");
const router = express.Router();

const {
  listUser,
  register,
  login,
  editUser,
  deleteUser,
} = require("../controllers/auth");

//@endpoint     localhost:4000/api/register
//@method       POST
//@access       Public
router.post("/register", register);

//@endpoint     localhost:4000/api/login
//@method       POST
//@access       Public
router.post("/login", login);

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
