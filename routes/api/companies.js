const router = require('express').Router();
const Company = require('../../models/Company');
const slugify = require('../../utils/slugify');

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const company = await new Company(req.body);
        company.company_name_slug = slugify(req.body.company_name) || '';
        await company.save();
        console.log('com', company);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
