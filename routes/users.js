var express = require('express');
var router = express.Router();
const controller=require("../controller/user")

 
router
.get('/login', controller.getLogin)
.get("/register",controller.getRegister)
.post("/auth",controller.postLogin)
.post("/adduser",controller.preg)

module.exports = router;
