const router = require('express').Router();
const Company = require('../../models/Company');
const { slugify, formatDate, isValidURL } = require('../../utils');

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
    const {
        userId,
        company_name,
        intermediary,
        link,
        source,
        stage,
        stage_inq_count,
        note,
        first_inq_on: date1,
        last_inq_on: date2
    } = req.body;

    if (!company_name && !intermediary) {
        return res
            .status(400)
            .json({ error: `either company or intermediary is required` });
    }

    if (!link) {
        return res.status(400).json({ error: `link is required` });
    } else if (!isValidURL(link)) {
        return res.status(400).json({ error: `please enter valid URL` });
    }

    if (!source) {
        return res.status(400).json({ error: `source is required` });
    }

    let first_inq_on, last_inq_on;

    if (date1) {
        first_inq_on = formatDate(date1);
        if (!first_inq_on) {
            first_inq_on = Date.now();
            return res
                .status(400)
                .json({ error: `invalid date or format (should be DD/MM)` });
        }
    }

    if (date2) {
        last_inq_on = formatDate(date2);
        if (!last_inq_on)
            return res
                .status(400)
                .json({ error: `invalid date or format (should be DD/MM)` });
    }

    const company_name_slug = slugify(company_name);
    const intermediary_slug = slugify(intermediary);

    try {
        const company = await new Company({
            user: userId,
            company_name,
            company_name_slug,
            intermediary,
            intermediary_slug,
            link,
            source,
            stage,
            stage_inq_count,
            note,
            first_inq_on,
            last_inq_on
        });
        await company.save();
        res.json(company);
    } catch (err) {
        // todo:
        console.error(err);
    }
});

router.post('/update', async (req, res) => {
    const { refId, type, target, value, failed } = req.body;
    if (type === `edit`) {
        try {
            const company = await Company.findOne({ _id: refId });
            company[target] = value;
            if (target === `company_name`) {
                company.company_name_slug = slugify(value);
            } else if (target === `intermediary`) {
                company.intermediary_slug = slugify(value);
            }
            await company.save();
            res.json(company);
        } catch (err) {
            // todo:
            console.error(err);
        }
    }
});

module.exports = router;
