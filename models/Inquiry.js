const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company_name: {
        type: String,
        required: true
    },
    company_name_slug: {
        type: String,
        required: true
    },
    intermediary: {
        type: Boolean,
        default: false
    },
    application_link: {
        type: String
    },
    source: {
        type: String
    },
    stage: {
        type: String,
        enum: ['applied', 'screened', 'interviewed', 'second_interviewed']
    },

    registered_on: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);
