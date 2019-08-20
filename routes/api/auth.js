const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send(`Auth route`);
});

module.exports = router;
