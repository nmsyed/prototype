var express = require("express");
var router = express.Router();
// const db = require("../config/db.js");
// const User = db.users;
// const jwt = require('jsonwebtoken');
const validator = require("validator");
// const passport = require('passport');
// const bcrypt = require('bcrypt');
// const passportConfig = require("../config/passport.config.js");

//const UserModel = require('../models/user');
console.log("hello");
module.exports = function () {
  /* GET home page. */

  router.get("/", function (req, res, next) {
    console.log("hello");
    res.json({ title: "Express started" });
  });

  return router;
};
//module.exports = router;
