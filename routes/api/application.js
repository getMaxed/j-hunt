const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send(`Application route`);
});

module.exports = router;
