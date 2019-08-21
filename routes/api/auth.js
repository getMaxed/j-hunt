const router = require('express').Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('JWT_SECRET');
const { check, validationResult } = require('express-validator');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Server error`);
    }
});

router.post(
    `/`,
    [
        check(`username`, `username is required`)
            .not()
            .isEmpty(),
        check(`password`, `password is required`).exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        try {
            let user = await User.findOne({ username });
            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: `Invalid credentials` }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: `Invalid credentials` }] });
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
