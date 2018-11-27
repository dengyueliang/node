var express = require('express');
var router = express.Router();
const { addUser} = require("../dao/usersDao.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addUser', async function (req, res, next) {
  res.send(await addUser(req.body));
});
module.exports = router;
