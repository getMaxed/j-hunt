const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('JWT_SECRET');

router.post(`/`, async (req, res) => {
    const { username, password } = req.body;

    let error = null;
    if (!username) {
        error = `username is mising`;
    } else if (!password) {
        error = `password is missing`;
    }

    if (error) return res.status(400).json({ error });

    try {
        let user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: `invalid credentials` });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: `invalid credentials` });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            jwtSecret,
            {
                expiresIn: 3600 * 24 * 7
            },
            (err, token) => {
                if (err) {
                    console.error(err);
                } else {
                    const { _id, username } = user;
                    res.json({
                        token,
                        user: {
                            _id,
                            username
                        }
                    });
                }
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).send(`server error`);
    }
});

module.exports = router;
