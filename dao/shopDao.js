const mongoose = require("mongoose");
module.exports.addShops = async (addShops) => {
    const { shopName,
        shopLicenceNum,
        shopLicenxeImg,
        shopAdd,
        shopLocation,
        shopCorporate,
        shopTel,
        shopImg,
        shopFeature,
    } = addShops;
    await mongoose.model("shop").create({
        shopName,
        shopLicenceNum,
        shopLicenxeImg,
        shopAdd,
        shopLocation,
        shopCorporate,
        shopTel,
        shopImg,
        shopFeature
    })
    return {
        code: 1,
        msg: "新增成功！"
    }
}
module.exports.getShops = async ({ curPage, eachPage}) => {
    let result =
        {
            curPage: Number(curPage),
            eachPage: Number(eachPage)
        }
    let seatsModel = mongoose.model("shop")
    result.total = await seatsModel.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await seatsModel
        .find()
        .populate(["usersId"])//关联的ID        
        .skip((result.curPage - 1) * result.eachPage)//最大页数
        .limit(result.eachPage)//每一页显示条数 
        .sort({ _id: 1 })//排序
    return result;
}
module.exports.getById = async (data) => {
    return await mongoose.model("shop").find(data)
}
//修改数据
module.exports.updataShops = async (msg) => {
    let {_id}=msg
    let data = await mongoose.model("shop").updateOne({ _id }, { $set: msg })
    if (data) {
        return true;
    }
}
module.exports.postById = async (msg) => {
//    console.log(msg)
   let { _id,shopEmployee}=msg
//    console.log(_id)
   console.log()
    let data = await mongoose.model("shop").updateOne( {_id},{'$push':{ shopEmployee :JSON.parse(shopEmployee)}})
    
   console.log(data)
}
