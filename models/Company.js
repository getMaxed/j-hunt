const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    },
    company_name: {
        type: String
    },
    company_name_slug: {
        type: String
    },
    intermediary: {
        type: String
    },
    link_or_desc: {
        type: String
    },
    source: {
        type: String
    },
    stage: {
        type: String,
        // from each inquire
        enum: ['applied', 'screened', 'interviewed', 'second_interviewed']
    },
    stage_inq_count: {
        // null when moving up the stage
        type: Number,
        min: 0,
        max: 3
    },
    note: {
        type: String
    },
    first_inq_on: {
        type: Date,
        default: Date.now
    },
    last_inq_on: {
        type: Date
    },
    failed_on: {
        type: Date
    }
});

module.exports = Company = mongoose.model('company', CompanySchema);
