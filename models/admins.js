const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminLevel: {
        type: String,
        required: true,
        enums: ['Super Admin', 'Admin']
    }
});

export default mongoose.model('admin', adminSchema);