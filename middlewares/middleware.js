import crypto from 'crypto';

const IsAuth= (req, res, next)=>{
    if(req.session.IsAuth){
        next();
    }
    else{
        res.redirect('/login');
    }
}

const SHA256converter= (req, res, next)=>{
    var hash = crypto.createHash('sha256');
    const temp= req.body.password;
    const originalValue = hash.update(temp, 'utf-8');
    req.body.password= originalValue.digest('hex');
    next();
}

export {IsAuth ,SHA256converter };
