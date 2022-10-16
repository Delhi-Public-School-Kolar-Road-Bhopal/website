const mongoose = require('mongoose');

const member = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('member', memberSchema);