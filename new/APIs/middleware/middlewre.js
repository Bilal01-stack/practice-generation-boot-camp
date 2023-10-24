const jwt = require('jsonwebtoken')
require('dotenv').config();

 const authenticateWithToken = (req,res,next)=>{
    try {
        const token = req.header("Authorization")
        if(!token){
            return res.status(401).json({message: "access denied, missing token"})
        }
        jwt.verify(token,process.env.PRIVATE_KEY, (err, user)=>{
            if(err){
                return res.status(403).json({message:"invalid token"})
            }
            req.user = user
            next()
        })
    } catch (error) {
        res.status(500).json("internal server error")
    }
   
}
module.exports = authenticateWithToken