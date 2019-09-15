const faker = require('faker');
const Company = require('../models/Company');
const mainSeed = require('../config/db_seed');
const { slugify, maybe, randNum, addZero, formatDate } = require('../utils');

module.exports = async (id, n, needMainSeed = false) => {
    needMainSeed && mainSeed(id);
    if (!n) return;

    const sourceList = ['linkedin', 'indeed', 'angel', 'glassdoor', 'monster'];
    const stageList = [
        'applied',
        'screened',
        'interviewed',
        'second_interviewed'
    ];
    const linkList = [
        `https://www.quora.com/`,
        `https://context.reverso.net`,
        `https://www.npmjs.com/package/faker`,
        `https://www.indeed.com`,
        `https://www.facebook.com/`,
        `https://developer.mozilla.org`,
        `https://alligator.io/css/align-justify/`
    ];

    for (let i = 0; i < n; i++) {
        const user = id;

        const cName = faker.company.companyName();
        const cSuffix = faker.company.companySuffix();
        const iName = faker.company.companyName();

        let company_name = maybe(4)
            ? maybe(4)
                ? cName
                : `${cName} ${cSuffix}`
            : '';
        let intermediary = maybe(4) ? '' : iName;

        if (!company_name && !intermediary) {
            if (maybe) {
                company_name = cName;
            } else {
                intermediary = iName;
            }
        }

        const company_name_slug = company_name ? slugify(company_name) : '';
        const intermediary_slug = intermediary ? slugify(intermediary) : '';

        const link = linkList[randNum(0, 6)];
        const source = sourceList[randNum(0, 4)];
        const stage = stageList[randNum(0, 3)];
        const stage_inq_count = randNum(0, 3);

        const note = maybe(4)
            ? maybe(2)
                ? faker.company.bs() + ' ' + faker.company.bs()
                : faker.company.bs()
            : '';

        const firstInqMonth = maybe(13) ? `08` : `07`;
        const firstInqDay = addZero(randNum(1, 31));
        let first_inq_on = `${firstInqMonth}/${firstInqDay}`;

        const lastInqMonth = `08`;
        let lastInqDay =
            parseInt(firstInqDay, 10) < 31
                ? randNum(parseInt(firstInqDay, 10), 31)
                : 31;
        lastInqDay = lastInqDay < 10 ? addZero(lastInqDay) : lastInqDay;
        let last_inq_on = maybe(4) ? '' : `${lastInqMonth}/${lastInqDay}`;

        first_inq_on = formatDate(first_inq_on);
        last_inq_on = formatDate(last_inq_on);
        const failed_on = '';

        const newCompany = new Company({
            user,
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
            last_inq_on,
            failed_on
        });
        await newCompany.save();
    }
};
