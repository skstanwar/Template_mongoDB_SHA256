import {DB_manager} from "../models/UserModel.js";

const  passAndUserClear= async(req, res) => {
    const response= await DB_manager.deleteMany({});
    // console.log(response);
    res.send({response});
}
const passAndUserData = async(req, res) => {

    const response= await DB_manager.find({});
    // console.log(response);
    res.send({response});

};

export {passAndUserClear , passAndUserData};

