import {DB_manager , UserProfile} from "../models/UserModel.js";

export const  passAndUserClear= async(req, res) => {
    const response= await DB_manager.deleteMany({});
    // console.log(response);
    res.send({response});
}
export const passAndUserData = async(req, res) => {

    const response= await DB_manager.find({});
    // console.log(response);
    res.send({response});

};
export const profiles = async(req, res) => {
    
        const response= await UserProfile.find({});
        // console.log(response);
        res.send({response});
    
    };



