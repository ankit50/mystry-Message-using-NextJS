import mongoose, { Document} from "mongoose";
 
export interface Message extends Document{
    content:string;
    createdAt: Date
}

const MessageSchema: mongoose.Schema<Message> = new mongoose.Schema({
    content: {type:String, required:true},
    createdAt : {type:Date, required:true, default:Date.now},
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean,
    isAcceptingMessage:boolean;
    messages:Message[]
}

const UserSchema : mongoose.Schema<User> = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Username is required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true,
        match: [/.+\@.+\..+/,"Please enter a valis email addess" ],
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    verifyCode:{
        type:String,
        required:[true, "Verify code is required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "Verify code expiry is required"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    messages:[MessageSchema]
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', UserSchema)
export default UserModel;