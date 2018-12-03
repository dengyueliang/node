const mongoose = require("mongoose");


//用户是否存在
module.exports.userIsExistence = async (userName) => {
    return  await mongoose.model("users").find(userName);   //通过username查询数据库里是否有这个用户
}


//新增门店用户
module.exports.addUser = async (usersData) => {
  const { userName, userPsw, userMailbox, userType } = usersData;
  return  await mongoose.model("users").create({ userName, userPsw, userMailbox, userType })
}

//用户登陆
module.exports.userLogin = async (userdata) => {
    return  await mongoose.model("users").find(userdata);   //通过username查询数据库里是否有这个用户
}
