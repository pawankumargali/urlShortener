const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
        const authHeader = req.header('Authorization');
        if(!authHeader) res.status(401).json({msg:'Unauthenticated request. Please register and login'});
        const token = authHeader.split(' ');
        jwt.verify(token[1] ,process.env.SECRET, (err, decoded) => {
            if(err) res.status(401).json({msg:'Invalid Token. Please try again'});
            else {
                const user = decoded.userId;
                if(!user) res.status(401).json({msg:'Unauthenticated user. Please login'});
                else next(); 
            }
        });
}