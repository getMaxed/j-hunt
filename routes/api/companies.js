const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const inq = await Inquiry.findOne({ user: req.user.id });
        console.log(inq);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
