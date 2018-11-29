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
    console.log(1)
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
        // .populate(["theaterId"])//关联的ID        
        .skip((result.curPage - 1) * result.eachPage)//最大页数
        .limit(result.eachPage)//每一页显示条数 
        .sort({ _id: 1 })//排序
    return result;
}
