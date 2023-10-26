const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateWithToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access denied, missing or malformed token" });
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        console.error("Internal server error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = authenticateWithToken;
