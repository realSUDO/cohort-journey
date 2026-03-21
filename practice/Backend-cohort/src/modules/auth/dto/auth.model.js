import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name : {
		type : String,
		trim : true ,
		minlenghth : 2 ,
		maxlength : 50,
		required : [true, "Name is required"]
	},
	email : {
		type : String,
		trim : true ,
		required : [true, "Email is required"],
		unique : true,
		lowercase : true 
	},
	password : {
		type : String,
		required : [true, "Email is required"],
		minlenghth : 8 
		// we know ; )
	},
	role : {
		type : String , 
		enum : ["customer","seller","admin"],
		default : "customer"
	},
	isVerified : {
		type : Boolean , 
		default : false
	},
	verificationToken : {type : String , select : false},
	refreshtoken : {type : String , select : false},
	resetpasswordtoken : {type : String , select : false},
	resetpasswordExpires : {type : String , select : false},
}, {timestamps : true});


export default mongoose.model("User",userSchema)
