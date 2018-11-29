var express = require('express');
var router = express.Router();
const { addShops,getShops} = require("../dao/shopDao.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addShops', async function (req, res, next) {
  res.send(await addShops(req.body));
});
router.get('/getShops', async function (req, res, next) {
  res.send(await getShops(req.query));
});
module.exports = router;
