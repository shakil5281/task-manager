const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
try{

    let token=req.headers['token'];
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const {userId, email} = decoded
    req.userId = userId
    req.email = email
    next()
    }
     catch(err) {
        console.log(err.message)
        next("Authentication failure!");
    }
};

module.exports = checkLogin;