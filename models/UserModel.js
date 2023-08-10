import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    password: String,
   
});
const DB_manager =mongoose.model("Database", UserSchema);
export { DB_manager};
