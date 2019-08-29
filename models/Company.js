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
    intermediary_slug: {
        type: String
    },
    link: {
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
        type: String,
        default: null
    },
    first_inq_on: {
        type: Date,
        default: Date.now
    },
    last_inq_on: {
        type: Date,
        default: null
    },
    failed_on: {
        type: Date,
        default: null
    }
});

module.exports = Company = mongoose.model('company', CompanySchema);
