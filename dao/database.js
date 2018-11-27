require("./model/users.js");   //用户登录
const mongoose = require("mongoose");
var dbURI = 'mongodb://localhost/aichong';//猫眼数据库路径

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('爱宠邦数据库链接成功  路径为： ' + dbURI);
});
// var dbURI = 'mongodb://localhost/maoyan';//猫眼数据库路径

// mongoose.connect(dbURI, { useNewUrlParser: true });

// mongoose.connection.on('connected', function () {
//   console.log('猫眼数据库链接成功  路径为： ' + dbURI);
// });
