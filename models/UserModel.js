import mongoose from "mongoose";

const Schema = mongoose.Schema;
//------------------User Schema---------------------
const UserSchema = new Schema({
    username: String,
    password: String,
   
});
export const DB_manager =mongoose.model("Database", UserSchema);

//------------------User Profile Schema---------------------
const UserProfileSchema = new Schema({
    name: {
        type: "String",
        default:
            "Not Available",
    },
    email: {
        type: "String",
        default:
            "Not Available",
    },
    phone: {
        type: "string",
        default:
            "Not Available",
    },
    pic: {
        type: "String",
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    Relation_id: String,

});
export const UserProfile = mongoose.model("UserProfile", UserProfileSchema);


