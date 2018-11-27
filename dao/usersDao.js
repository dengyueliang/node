const mongoose = require("mongoose");
module.exports.addUser = async (users) => {
  console.log(users);
  const { username, password } = users;
  const data = await mongoose.model("users").find({ username });   //通过username查询数据库里是否有这个用户
  // console.log("12312",data)
  if (data.length === 1) {
      return {
          code: 0,
          msg: "用户名已存在，请重新输入！"
      }
  } else if (data.length === 0) {
      await mongoose.model("users").create({ username, password })
      return {
          code: 1,
          msg: "新增成功！"
      }
  }
}