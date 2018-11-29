require("./model/users.js");   //用户登录
require("./model/shop.js");   //门店
const mongoose = require("mongoose");
var dbURI = 'mongodb://localhost/aichong';//猫眼数据库路径

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('爱宠邦数据库链接成功  路径为： ' + dbURI);
});
