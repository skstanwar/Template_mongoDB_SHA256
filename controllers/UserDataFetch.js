import {UserProfile } from "../models/UserModel.js";

// export const profile =(req,res  , next)=> {
//     console.log("working fine !");
//     username:req.session.username||"sanjay Kumar Saini"
//     next();
// }
export const Setdashboard =async(req,res )=> { 
    const {name , email , phone , pic }=req.body;
    console.log(req.body);

    // res.session.name=name;
    // res.session.email=email;
    // res.session.phone=phone;
    // res.session.pic=pic;

   const data= new UserProfile({
    name , 
    email ,
    phone ,
    pic ,
    Relation_id:req.session.Relation_id
   });
//    console.log(req.session.Relation_id);
    const response = await data.save();
    if(response){
        console.log("data saved !");
        res.send({response});
    }

    
}
