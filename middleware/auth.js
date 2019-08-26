const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get(`JWT_SECRET`);

module.exports = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res
            .status(401)
            .json({ error: `no token, authorization denied` });
    }

    try {
        const decoded = await jwt.verify(token, jwtSecret);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: `token is not valid` });
    }
};
