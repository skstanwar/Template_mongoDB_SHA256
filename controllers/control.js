import {DB_manager} from "../models/UserModel.js";


///login_manager-----------------------------------------------------

const login = async(req, res) => {
    const { username, password } = req.body;
    // console.log(username, password);
    const response= await DB_manager.findOne({username:username,password:password});
    // console.log(response);
    if(response){
        req.session.username=username;
    req.session.IsAuth=true;
    console.log("page is unlocked!");
    res.send({message:true});
    
}
else{
    res.send({message:false});
}
    
   
   
}


///register_manager-----------------------------------------------------
const register = async(req, res) => {
    const { username, password } = req.body;
    // console.log(username, password);
    const response= await DB_manager.findOne({username:username,password:password});
        if(response){
            res.send({message:false});
            
        }
   else { const user = new DB_manager({
        username,
        password,
    });
   
        const response= await user.save();
        if(response){
       res.send({ message:true });
        console.log("page is unlocked!");} 
    
}


}

export { login , register };
