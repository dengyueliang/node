const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	userName: String,
	userPsw: String,
	userMailbox:String,
	userType:Number,//用户类型 0表示平台管理员 1表示门店管理员
	userShop:{//指向门店集合
		type:Schema.Types.ObjectId,
		ref:"shop"
	},
	userGoods:{//指向商品集合
		type:Schema.Types.ObjectId,
		ref:"goods"
	},
	userService:{//指向服务
		type:Schema.Types.ObjectId,
		ref:"service"
	}
});

mongoose.model("users", usersSchema, "users");