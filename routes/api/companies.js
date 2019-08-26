const router = require('express').Router();
const Company = require('../../models/Company');
const slugify = require('../../utils/slugify');

router.post('/', async (req, res) => {
    try {
        const { userId } = req.body;
        const companies = await Company.find({ user: userId }).select('-user');
        res.json(companies);
    } catch (err) {
        console.error(err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const company = await new Company(req.body);
        company.company_name_slug = slugify(req.body.company_name) || '';
        await company.save();
        res.status(204);
    } catch (err) {
        console.error(err);
    }
});

router.put('/update', async (req, res) => {
    //
});

module.exports = router;
