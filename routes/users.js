var express = require('express');
var router = express.Router();
const { addUser} = require("../dao/usersDao.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addUser', async function (req, res, next) {
  console.log(1)
  console.log(req.body)
  res.send(await addUser(req.body));
});
module.exports = router;
