const router = require("express").Router();
// const crypto = require('crypto');
const bcrypt = require('bcrypt');
const User = require('../models/User');
// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport')
// const {SENDGRID_API_KEY,EMAIL} = require('../config/keys');

// const transporter = nodemailer.createTransport(sendgridTransport({
//   auth:{
//       api_key:SENDGRID_API_KEY
//   }
// }))


// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser
} = require("../utils/auth");

// Users Registeration Route
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// // Admin Registration Route
// router.post("/register-admin", async (req, res) => {
//   await userRegister(req.body, "admin", res);
// });

// // Super Admin Registration Route
// router.post("/register-super-admin", async (req, res) => {
//   await userRegister(req.body, "superadmin", res);
// });

// Users Login Route
router.post("/", async (req, res) => {
  await userLogin(req.body,"user",res);
});

// // Admin Login Route
// router.post("/login-admin", async (req, res) => {
//   await userLogin(req.body, "admin", res);
// });

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});



module.exports = router;
