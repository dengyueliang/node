var express = require('express');
var router = express.Router();
const { addShops,getShops,getById,updataShops,postById} = require("../dao/shopDao.js")
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
router.get('/getById', async function (req, res, next) {
  res.send(await getById(req.query));
});
router.post('/updataShops', async function (req, res, next) {
  res.send(await updataShops(req.body));
});
router.post('/postById', async function (req, res, next) {
  res.send(await postById(req.body));
});
module.exports = router;
