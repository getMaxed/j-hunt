const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
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
        if (user) {
            return res.status(400).json({ error: `user already exists` });
        }

        user = new User({
            username,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

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
                    // trg
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
        res.status(500).send(`Server error`);
    }
});

module.exports = router;
