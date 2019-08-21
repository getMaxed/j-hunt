const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('JWT_SECRET');
const { check, validationResult } = require('express-validator');

router.post(
    `/`,
    [
        check(`username`, `username is required`)
            .not()
            .isEmpty(),
        check(`password`, `password must have minimum 3 characters`).isLength({
            min: 3
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        try {
            let user = await User.findOne({ username });
            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: `User already exists` }] });
            }

            user = new User({
                username,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            // res.send(`user registered`);

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
                        res.json({ token });
                    }
                }
            );
        } catch (err) {
            console.error(err);
            res.status(500).send(`Server error`);
        }
    }
);

module.exports = router;
