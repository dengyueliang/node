var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    shopName: {//名称
        type: String
    },
    shopLicenceNum: {//营业执照
        type: String
    },
    shopLicenxeImg: {//营业执照图片
        type: String
    },
    shopAdd: {//营业地址
        type: String
    },
    shopLocation: {//营业定位
        type: String
    },
    shopCorporate: {//法人
        type: String
    },
    shopTel: {//联系电话
        type: String
    },
    shopImg: {//头像
        type: String
    },
    shopFeature: {//特色
        type: String
    },
    shopCommission: {//头像
        type: String
    },
    shopEmployee:[{
        empName:"",empLevel:"",empPhone:""
    }],
    usersId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

mongoose.model("shop", shopSchema, "shop");