var express = require('express');
var router = express.Router();
const { addUser, userIsExistence,userLogin} = require("../dao/usersDao.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//验证用户是否重复  重复返回1 未注册返回0
router.get('/userIsExistence', async function (req, res, next) {
  let  data =  await userIsExistence(req.query)
  if(data.length===0){
    res.send({state:0})
  }else{
    res.send({state:1})
  }
});

//新增门店用户
router.post('/addUser', async function (req, res, next) {
  res.send(await addUser(req.body));
});

//用户登陆 成功返回1  失败返回0
router.get('/login', async function (req, res, next) {
  let data =  await userLogin(req.query);
  if(data.length){
    res.send({state:1,data})
  }else{
    res.send({state:0})
  }
});


module.exports = router;
