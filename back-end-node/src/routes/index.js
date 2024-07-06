const express = require('express');
const router = express.Router();
const UserloginController = require('../controller/userlogin')

router.post("/login", UserloginController.userlogin);



module.exports = router;