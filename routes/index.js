const express = require ('express');
//const bcrypt = require("bcrypt");
//const config = require ('../config');

const router = express.Router();

//const Dao = require("../dbaccess/dao");

router.get ('/', function (req, res, next)
{
  res.render('login', {title:config['name'], errormg:false});
});


router.post ('/', function (req, res, next)
{
  res.render('index', { });
});

module.exports = router;
